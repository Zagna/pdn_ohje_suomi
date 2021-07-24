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

document.querySelectorAll(".tab-radio").forEach(radio =>
	radio.addEventListener('change', function (event) {
		document.querySelectorAll('.tab-item').forEach(item => item.classList.remove('is-active'));
		event.target.labels[0].parentElement.classList.add('is-active');
	}, false)
);

document.addEventListener('touchend', function (event) {
	document.querySelectorAll('.navbar-item.has-dropdown').forEach(navitem => navitem.classList.remove('is-active'));
	if (event.target.classList.contains('navbar-link')) event.target.parentNode.classList.add('is-active');
}, false);