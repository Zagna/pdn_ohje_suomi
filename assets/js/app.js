document.querySelectorAll(".tabs-wrapper input[type='radio']").forEach(radio =>
	radio.addEventListener('change', function(event) {
		document.querySelectorAll('.tab').forEach(item => item.classList.remove('active'));
		event.target.labels[0].parentElement.classList.add('active');
	}, false)
);

document.addEventListener('touchend', function(event) {
	if (event.target.tagName == 'A') return;
	document.querySelectorAll('.dropdown').forEach(navitem => navitem.classList.remove('active'));
	if (event.target.classList.contains('link')) event.target.parentNode.classList.add('active');
}, false);
