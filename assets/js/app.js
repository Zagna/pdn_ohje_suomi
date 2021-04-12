import supportsWebP from 'supports-webp';

var elements = document.getElementsByClassName("tab-radio");

for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('change', function (event) {
		document.querySelectorAll('.tab-item').forEach(el => el.classList.remove('is-active'));
		event.target.labels[0].parentElement.classList.add('is-active');
	}, false);
}

supportsWebP.then(supported => {
	if (!supported) {
		document.body.classList.add("no-webp");
	}
});