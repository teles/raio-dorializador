function changeAllImagesToPlaceholders(){
	var images = document.getElementsByTagName("img");

	for(var i=0; i < images.length; i++) {
		var image = images[i];
		image.setAttribute("src", "http://placehold.it/"+image.width+"x"+image.height);
	}
}

function makeEverythingGrayscale(){
	document.getElementsByTagName("html")[0].style.filter = "grayscale(100%)";
}

changeAllImagesToPlaceholders();
makeEverythingGrayscale();

(function(XHR) {
    XHR.prototype.open = function() {
        changeAllImagesToPlaceholders();
    };
})(XMLHttpRequest);