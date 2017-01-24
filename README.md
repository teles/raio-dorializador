# Dórializador

Plugin chrome para deixar sua internet tão cinza quanto a cidade de SP sob a gestão Dória.

Código do plugin:

```javascript
function changeAllImagesToGrey () {
	var images = Array.from(document.getElementsByTagName("img"));
	images.forEach(function (i) {
		i.removeAttribute('src');
		i.style.backgroundColor = '#a5a0a0';
	});
}

function makeEverythingGrayscale () {
	document.getElementsByTagName("html")[0].style.filter = "grayscale(100%)";
}

changeAllImagesToGrey();
makeEverythingGrayscale();

(function (XHR) {
    XHR.prototype.open = function () {
        changeAllImagesToGrey();
    };
})(XMLHttpRequest);
```
