function setIcon(currentState) {
  chrome.browserAction.setIcon({
    path: 'icon-' + currentState + '.png'
  });
}

function executeScript(tab, currentState) {
  return function() {
    setIcon(currentState);
    chrome.tabs.executeScript(tab.id || null, {
      file: 'raio-dorializador.js'
    });
  }
}

chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.storage.local.get(function(items) {
    if (items.currentState === 'off') {
      chrome.storage.local.set({
        currentState: 'on'
      }, executeScript(tab, 'on'));
    } else {
      chrome.storage.local.set({
        currentState: 'off'
      }, executeScript(tab, 'off'));
    }
  });
});

chrome.storage.local.get(function(items) {
  setIcon(items.currentState || 'off');
});
