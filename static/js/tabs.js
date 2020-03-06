/**
 * Object to hold a plugin's configuration
 * @class ConfigBag
 * @since 0.11.0
 * @author Thomas Erbe <vizuaalog@gmail.com>
 */
class ConfigBag {
    constructor(initialConfig = []) {
        if(typeof initialConfig !== 'object') {
            throw new TypeError('initialConfig must be of type object.');
        }

        this._items = initialConfig;
    }

    /**
     * Set a new config property
     * @param {string} key The config property's key
     * @param {mixed} value The config property's value
     */
    set(key, value) {
        if(!key || !value) {
            throw new Error('A key and value must be provided when setting a new option.');
        }

        this._items[key] = value;
    }

    /**
     * Check if a key exists
     * @param {string} key
     * @returns {boolean}
     */
    has(key) {
        if(!key) {
            throw new Error('A key must be provided.');
        }

        return (this._items.hasOwnProperty(key) && this._items[key]);
    }

    /**
     * Get a property by it's key. Returns the defaultValue if it doesn't exists
     * @param {string} key 
     * @param {mixed} defaultValue 
     * @returns {mixed}
     */
    get(key, defaultValue = null) {
        if(defaultValue && !this.has(key)) {
            if(typeof defaultValue === 'function') {
                return defaultValue();
            }
            
            return defaultValue;
        }

        return this._items[key];
    }
}

class Data {
    constructor() {
        this._data = {};
    }

    set(uid, key, value) {
        if(!this._data.hasOwnProperty(uid)) {
            this._data[uid] = {};
        }

        this._data[uid][key] = value;
    }

    get(uid, key) {
        if(!this._data.hasOwnProperty(uid)) {
            return undefined;
        }

        return this._data[uid][key];
    }

    destroy(uid) {
        if(this._data.hasOwnProperty(uid)) {
            delete this._data[uid];
        }
    }
}

Data.uid = 1;

/**
 * Wrap an element around Bulma.
 * @param {String|HTMLElement} selector The selector or HTMLElement to wrap.
 */
function Bulma(selector) {
    if(! (this instanceof Bulma)) {
        return new Bulma(selector);
    }

    if(selector instanceof Bulma) {
        return selector;
    }

    if(selector instanceof HTMLElement) {
        this._elem = selector;
    } else {
        this._elem = document.querySelector(selector);
    }

    if(!selector) {
        this._elem = document.createElement('div');
    }
    
    if(!this._elem.hasOwnProperty(Bulma.id)) {
        this._elem[Bulma.id] = Data.uid++;
    }

    return this;
}

/**
 * Current BulmaJS version.
 * @type {String}
 */
Bulma.VERSION = '0.11.0';

/**
 * Unique ID of Bulma
 * @type {String}
 */
Bulma.id = 'bulma-' + new Date().getTime();

/**
 * Global data cache for HTML elements
 * @type {Data}
 */
Bulma.cache = new Data();

/**
 * An index of the registered plugins
 * @type {Object}
 */
Bulma.plugins = {};

/**
 * Helper method to create a new plugin.
 * @param  {String} key The plugin's key
 * @param  {Object} config The config to be passed to the plugin
 * @return {Object} The newly created plugin instance
 */
Bulma.create = (key, config) => {
    if(!key || !Bulma.plugins.hasOwnProperty(key)) {
        throw new Error('[BulmaJS] A plugin with the key \''+key+'\' has not been registered.');
    }

    return new Bulma.plugins[key].handler(config);
};

/**
 * Register a new plugin
 * @param  {String} key The key to register the plugin under
 * @param  {Object} plugin The plugin's main constructor
 * @param  {number?} priority The priority this plugin has over other plugins. Higher means the plugin is registered before lower.
 * @return {undefined}
 */
Bulma.registerPlugin = (key, plugin, priority = 0) => {
    if(!key) {
        throw new Error('[BulmaJS] Key attribute is required.');
    }
    
    Bulma.plugins[key] = {
        priority: priority,
        handler: plugin
    };

    Bulma.prototype[key] = function(config) {
        return new Bulma.plugins[key].handler(config, this);
    };
};

/**
 * Parse the HTML DOM searching for data-bulma attributes. We will then pass
 * each element to the appropriate plugin to handle the required processing.
 * @param  {HTMLElement} root The root of the document we're going to parse.
 * @return {undefined}
 */
Bulma.parseDocument = (root = document) => {
    let sortedPlugins = Object.keys(Bulma.plugins)
        .sort((a, b) => Bulma.plugins[a].priority < Bulma.plugins[b].priority);

    Bulma.each(sortedPlugins, (key) => {
        if(!Bulma.plugins[key].handler.hasOwnProperty('parseDocument')) {
            // eslint-disable-next-line no-console
            console.error('[BulmaJS] Plugin ' + key + ' does not have a parseDocument method. Automatic document parsing is not possible for this plugin.');
            return;
        }

        Bulma.plugins[key].handler.parseDocument(root);
    });
};

/**
 * Create an element and assign classes
 * @param {string} name The name of the element to create
 * @param {array} classes An array of classes to add to the element
 * @return {HTMLElement} The newly created element
 */
Bulma.createElement = (name, classes) => {
    if(!classes) {
        classes = [];
    }

    if(typeof classes === 'string') {
        classes = [classes];
    }

    let elem = document.createElement(name);

    Bulma.each(classes, (className) => {
        elem.classList.add(className);
    });

    return elem;
};

/**
 * Find an element otherwise create a new one.
 * @param {string} query The CSS selector query to find
 * @param {HTMLElement|null} parent The parent we want to search/create within
 * @param {[string]} elemName The name of the element to create
 * @param {[array]} classes The classes to apply to the element
 * @returns {HTMLElement} The HTML element we found or created
 */
Bulma.findOrCreateElement = (query, parent = document, elemName = 'div', classes = []) => {
    var elem = parent.querySelector(query);

    if(!elem) {
        if(classes.length === 0) {
            classes = query.split('.').filter((item) => {
                return item;
            });
        }

        var newElem = Bulma.createElement(elemName, classes);

        parent.appendChild(newElem);

        return newElem;
    }

    return elem;
};

/**
 * For loop helper
 * @param {*} objects The array/object to loop through
 * @param {*} callback The callback used for each item
 */
Bulma.each = (objects, callback) => {
    let i;

    for(i = 0; i < objects.length; i++) {
        callback(objects[i], i);
    }
};

/**
 * Make an AJAX GET request to the specified URL. Stripping any script tags from the response.
 * @param {*} url The url to send the request to
 * @returns {Promise} Returns a promise containing the response HTML or error
 */
Bulma.ajax = (url) => {
    return new Promise((resolve, reject) => {
        var request = new XMLHttpRequest();
        request.open('GET', url, true);

        request.onload = () => {
            if (request.status >= 200 && request.status < 400) {
                resolve(Bulma._stripScripts(request.responseText));
            } else {
                reject();
            }
        };

        request.onerror = () => reject();

        request.send();
    });
};

/**
 * Strip any script tags from a HTML string.
 * @param {string} htmlString 
 * @returns {string} The cleaned HTML string
 * 
 * @private
 */
Bulma._stripScripts = (htmlString) => {
    var div = document.createElement('div');
    div.innerHTML = htmlString;
    
    var scripts = div.getElementsByTagName('script');
    
    var i = scripts.length;
    
    while (i--) {
        scripts[i].parentNode.removeChild(scripts[i]);
    }
    
    return div.innerHTML.replace(/  +/g, ' ');
};

/**
 * Get or set custom data on a Bulma element.
 * @type {String} key
 * @type {any} value
 * @returns {Bulma}
 */
Bulma.prototype.data = function(key, value) {
    if(!value) {
        return Bulma.cache.get(this._elem[Bulma.id], key);
    }

    Bulma.cache.set(this._elem[Bulma.id], key, value);

    return this;
};

/**
 * Destroy the data for an element.
 * @returns {Bulma}
 */
Bulma.prototype.destroyData = function() {
    Bulma.cache.destroy(this._elem[Bulma.id]);

    return this;
};

document.addEventListener('DOMContentLoaded', () => {
    if(window.hasOwnProperty('bulmaOptions') && window.bulmaOptions.autoParseDocument === false) {
        return;
    }

    Bulma.parseDocument();
});

/**
 * Base plugin class. Provides basic, common functionality.
 * @class Plugin
 * @since 0.7.0
 * @author  Thomas Erbe <vizuaalog@gmail.com>
 */
class Plugin {
    /**
     * Returns an object containing the default config for this plugin.
     * @returns {object} The default config object.
     */
    static defaultConfig() {
        return {};
    }

    /**
     * Create a plugin.
     * @param {object} config The config for this plugin
     */
    constructor(config = {}, root) {
        config.root = (root instanceof Bulma) ? root._elem : root;

        this.config = new ConfigBag({...this.constructor.defaultConfig(), ...config});

        if(!root && !this.config.has('parent')) {
            throw new Error('A plugin requires a root and/or a parent.');
        }

        this.parent = this.config.get('parent', config.root ? config.root.parentNode : null);

        this._events = {};
    }

    on(event, callback) {
        if(!this._events.hasOwnProperty(event)) {
            this._events[event] = [];
        }

        this._events[event].push(callback);
    }

    trigger(event, data = {}) {
        if(!this._events.hasOwnProperty(event)) {
            return;
        }

        for(let i = 0; i < this._events[event].length; i++) {
            this._events[event][i](data);
        }
    }

    destroy() {
        Bulma(this.root).destroyData();
    }
}

/**
 * @module Tabs
 * @since  0.4.0
 * @author  Thomas Erbe <vizuaalog@gmail.com>
 */
class Tabs extends Plugin {
    /**
     * Handle parsing the DOMs data attribute API.
     * @param {HTMLElement} element The root element for this instance
     * @returns {undefined}
     */
    static parseDocument(context) {
        let elements = context.querySelectorAll('.tabs-wrapper');

        Bulma.each(elements, (element) => {
            Bulma(element).tabs({
                hover: element.hasAttribute('data-hover') ? true : false
            });
        });
    }

    /**
     * Returns an object containing the default config for this plugin.
     * @returns {object} The default config object.
     */
    static defaultConfig() {
        return {
            hover: false
        };
    }

    /**
     * Plugin constructor
     * @param  {Object} config The config object for this plugin
     * @return {this} The newly created instance
     */
    constructor(config, root) {
        super(config, root);

        /**
         * The root tab element
         * @param {HTMLElement}
         */
        this.root = this.config.get('root');
        this.root.setAttribute('data-bulma-attached', 'attached');

        /**
         * Whether the tabs should be changed when the nav item is hovered over
         * @param {boolean}
         */
        this.hover = this.config.get('hover');

        /**
         * The tab nav container
         * @param {HTMLElement}
         */
        this.nav = this.findNav();

        /**
         * The tab's nav items
         * @param {HTMLElement[]}
         */
        this.navItems = this.findNavItems();

        /**
         * The tab content container
         * @param {HTMLElement}
         */
        this.content = this.findContent();

        /**
         * The tab's content items
         * @param {HTMLElement[]}
         */
        this.contentItems = this.findContentItems();

        this.setupNavEvents();

        Bulma(this.root).data('tabs', this);

        this.trigger('init');
    }

    /**
     * Find the tab navigation container.
     * @returns {HTMLElement} The navigation container
     */
    findNav() {
        return this.root.querySelector('.tabs');
    }

    /**
     * Find each individual tab item
     * @returns {HTMLElement[]} An array of the found items
     */
    findNavItems() {
        return this.nav.querySelectorAll('li');
    }

    /**
     * Find the tab content container.
     * @returns {HTMLElement} The content container
     */
    findContent() {
        return this.root.querySelector('.tabs-content');
    }

    /**
     * Find each individual content item
     * @returns {HTMLElement[]} An array of the found items
     */
    findContentItems() {
        // We have to use the root here as the querySelectorAll API doesn't
        // support using '>' as the first character. So we have to have a
        // class to start with.
        return this.root.querySelectorAll('.tabs-content > ul > li');
    }

    /**
     * Setup the events to handle tab changing
     * @returns {void}
     */
    setupNavEvents() {
        Bulma.each(this.navItems, (navItem, index) => {
            navItem.addEventListener('click', () => {
                this.setActive(index);
            });

            if(this.hover) {
                navItem.addEventListener('mouseover', () => {
                    this.setActive(index);
                });
            }
        });
    }

    /**
     * Set the provided tab's index as the active tab.
     * 
     * @param {integer} index The new index to set
     */
    setActive(index) {
        Bulma.each(this.navItems, (navItem) => {
            navItem.classList.remove('is-active');
        });

        Bulma.each(this.contentItems, (contentItem) => {
            contentItem.classList.remove('is-active');
        });

        this.navItems[index].classList.add('is-active');
        this.contentItems[index].classList.add('is-active');
    }
}

Bulma.registerPlugin('tabs', Tabs);