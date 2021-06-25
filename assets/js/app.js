import supportsWebP from 'supports-webp';

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