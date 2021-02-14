window.addEventListener('DOMContentLoaded', function () {
	var link = document.createElement('link');
	link.type = 'image/x-icon';
	link.rel = 'shortcut icon';
	var favicon = document.getElementById('favicon');
	if (favicon.currentSrc) {
		link.href = favicon.currentSrc;
	}
	else {
		link.href = favicon.getAttribute('src');
	}
	document.getElementsByTagName('head')[0].appendChild(link);

	document.addEventListener('touchend', function (event) {
		document.querySelectorAll('.navbar-item.has-dropdown').forEach(el => el.classList.remove('is-active'));
		if (event.target.classList.contains('navbar-link')) event.target.parentNode.classList.add('is-active');
	}, false);
});

supportsWebP.then(supported => {
	if (!supported) {
		document.body.classList.add("no-webp");
	}
});

import supportsWebP from 'supports-webp';
import '@vizuaalog/bulmajs/src/plugins/tabs';
import '@vizuaalog/bulmajs/src/plugins/navbar';