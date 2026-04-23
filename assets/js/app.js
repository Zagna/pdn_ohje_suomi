document.querySelectorAll('summary').forEach(summary => {
	summary.addEventListener('keydown', e => {
		if (e.key == 'Enter' || e.key == 'Space') {
			if (e.target.parentElement.hasAttribute('open')) {
				e.preventDefault();
			}
		}
	});
	summary.addEventListener('click', e => {
		if (e.target.parentElement.hasAttribute('open')) {
			e.preventDefault();
		}
	});
});

document.addEventListener('touchend', function(event) {
	if (event.target.tagName == 'A') return;
	document.querySelectorAll('.submenu').forEach(input => {
		if (input != event.target) {
			input.checked = false;
		}
	});
});
