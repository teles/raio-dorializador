# Dórializador

Plugin chrome para deixar sua internet tão cinza quanto a cidade de SP sob a gestão Dória.

Código do plugin:

```javascript
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

(function(open) {
    XMLHttpRequest.prototype.open = function() {
        changeAllImagesToPlaceholders();
    };
})(XMLHttpRequest.prototype.open);
```
