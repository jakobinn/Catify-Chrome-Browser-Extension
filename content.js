let BASE_URL = 'https://placekitten.com'
let KEY = 'catKey';

handleShowImages();

function handleShowImages(){
	chrome.storage.local.get(KEY, function(result) {
		if(result[KEY]) replaceImages();
	});
}

function replaceImages() {
	let images = document.getElementsByTagName('img');
	for(let i = 0; i < images.length; i++){
		images[i].src = `${BASE_URL}/${images[i].width}/${images[i].height}`
	}
}