/*! npm.im/supports-webp 3.0.0 */
var supportsWebP = new Promise(resolve => {
	const image = new Image();
	image.addEventListener('error', () => resolve(false));
	image.addEventListener('load', () => resolve(image.width === 1));
	image.src = 'data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=';
}).catch(() => false);

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
