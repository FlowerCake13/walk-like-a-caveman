var imgSpace = document.getElementById('image-container');
var lastPicture = 5;
var counter = 0;
var left = 0;
imgSpace.style.postion = 'absolute'
window.addEventListener('keydown', function(event){
	console.log(event.keyCode)
	if (event.keyCode == 39) {
		counter++;
		imgSpace.src = 'assets/caveman' + counter +'.png';
		left++;
		console.log(imgSpace.style.left)
		imgSpace.style.left = left + 'px';
	}
	if (event.keyCode == 37) {
		counter++;
		imgSpace.src = 'assets/caveman' + counter +'.png';
		left--;
		console.log(imgSpace.style.left)
		imgSpace.style.left = left + 'px';
	}
	if (event.keyCode == 82) {
		counter++;
		imgSpace.src = 'assets/caveman' + counter +'.png';
		left = left + 10;
		console.log(imgSpace.style.left)
		imgSpace.style.left = left + 'px';
	}
	if (event.keyCode == 66) {
		counter++;
		imgSpace.src = 'assets/caveman' + counter +'.png';
		left = left - 10;
		console.log(imgSpace.style.left)
		imgSpace.style.left = left + 'px';
	}
	if (counter >= lastPicture) {
		counter = 0;
	}
})