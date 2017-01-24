function changeAllImagesToPlaceholders(){
	var images = document.getElementsByTagName("img");

	for(var i=0; i < images.length; i++) {
		var image = images[i];
		image.setAttribute("src", "https://placeholdit.imgix.net/~text?txtsize=33&txt=&w="+image.width+"&h="+image.height);
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
