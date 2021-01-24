window.addEventListener('DOMContentLoaded', function () {
	var link = document.createElement('link');
	link.type = 'image/x-icon';
	link.rel = 'shortcut icon';
	link.href = document.getElementById('favicon').getAttribute('src');
	document.getElementsByTagName('head')[0].appendChild(link);

	document.addEventListener('touchend', function (event) {
		document.querySelectorAll('.navbar-item.has-dropdown').forEach(el => el.classList.remove('is-active'));
		if (event.target.classList.contains('navbar-link')) event.target.parentNode.classList.add('is-active');
	}, false);

	if (!support_format_webp()) {
		document.body.classList.add("no-webp");
	}
});

function support_format_webp() {
	var elem = document.createElement('canvas');

	if (!!(elem.getContext && elem.getContext('2d'))) {
		// was able or not to get WebP representation
		return elem.toDataURL('image/webp').indexOf('data:image/webp') == 0;
	} else {
		// very old browser like IE 8, canvas not supported
		return false;
	}
}

import Tabs from '@vizuaalog/bulmajs/src/plugins/tabs';
import Navbar from '@vizuaalog/bulmajs/src/plugins/navbar';