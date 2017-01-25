function changeAllImagesToGrey(currentState) {
  var images = Array.from(document.getElementsByTagName('img'));
  images.forEach(function(i) {
    if (currentState === 'on') {
      i.dataset.src = i.getAttribute('src');
      i.removeAttribute('src');
      i.style.backgroundColor = '#a5a0a0';
    } else {
      if (i.dataset.src) {
        i.setAttribute('src', i.dataset.src);
      }
      i.style.backgroundColor = 'transparent'
    }
  });
}

function makeEverythingGrayscale(currentState) {
  if (currentState === 'on') {
    document.getElementsByTagName('html')[0].style.filter = 'grayscale(100%)';
  } else {
    document.getElementsByTagName('html')[0].style.filter = 'none';
  }
}

function run(chrome) {
  chrome.storage.local.get(function(items) {
    changeAllImagesToGrey(items.currentState);
    makeEverythingGrayscale(items.currentState);
  });
}

(function(XHR, chrome) {
  XHR.prototype.open = function() {
    run(chrome);
  };
})(XMLHttpRequest, chrome);

run(chrome);
