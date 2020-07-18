window.addEventListener('DOMContentLoaded', function() {

    var link = document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    link.href = document.getElementById('favicon').getAttribute('src');
    document.getElementsByTagName('head')[0].appendChild(link);

});

import Tabs from '@vizuaalog/bulmajs/src/plugins/tabs';
import Navbar from '@vizuaalog/bulmajs/src/plugins/navbar';