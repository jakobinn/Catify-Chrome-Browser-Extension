let KEY = 'catKey';
let slider = document.getElementById('slider');

document.addEventListener('DOMContentLoaded', () => {
	chrome.storage.local.get(KEY, (item) => {
	slider.checked = item[KEY];
	});
});

slider.addEventListener('click', () => {
	chrome.storage.local.set({
		[KEY]: slider.checked
	});
});