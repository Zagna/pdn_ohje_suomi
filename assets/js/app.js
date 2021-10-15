/*! npm.im/supports-webp 2.0.1 */
var supportsWebP = (function () {
	'use strict';
	
	var index = new Promise(function (resolve) {
		var image = new Image();
		image.onerror = function () { return resolve(false); };
		image.onload = function () { return resolve(image.width === 1); };
		image.src = 'data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=';
	}).catch(function () { return false; });
	
	return index;
	
}());

supportsWebP.then(supported => {
	if (!supported) {
		document.body.classList.add("no-webp");
	}
});

document.querySelectorAll(".tabs-wrapper input[type='radio']").forEach(radio =>
	radio.addEventListener('change', function(event) {
		document.querySelectorAll('.tab').forEach(item => item.classList.remove('active'));
		event.target.labels[0].parentElement.classList.add('active');
	}, false)
);

document.addEventListener('touchend', function(event) {
	document.querySelectorAll('.dropdown').forEach(navitem => navitem.classList.remove('active'));
	if (event.target.classList.contains('link')) event.target.parentNode.classList.add('active');
}, false);

document.querySelector('#dark').addEventListener('change', function(event) {
	document.body.classList.toggle('light');
});

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
	document.body.classList.add('light');
}
