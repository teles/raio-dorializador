# Raio Dórializador

Plugin chrome para deixar sua internet tão cinza quanto a cidade de SP sob a gestão João Dória.

### Código do plugin:

Ao instalar o plugin todas as páginas do seu navegador ficarão lindas, isto é, cinzas. O código que faz isso pode ser visto a seguir:

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

## Próximos passos:

* Habilitar ícone da extensão com botão liga/desliga;
* Empacotar código como extensão baixável pelo site de addon do Chrome;
* Adicionar sessão sobre como instalar no README, com link;
* Adicionar gif mostrando a utilização do plugin em uma página do google imagens com antes e depois;
* Adicionar a licença WTFPL;
* Adicionar lista de artigos sobre a operação cidade linda neste README

## Contribuidores:

* [William Oliveira](https://www.github.com/woliveiras)
* [Daniel Rubin](https://www.github.com/dann95)
