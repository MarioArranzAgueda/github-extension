chrome.tabs.onCreated.addListener((tab) => {
  chrome.tabs.query({active: true}, (tabActive) => {
    console.log(tabActive);
    if(tab.pendingUrl === 'chrome://newtab/') {
      chrome.tabs.update(tabActive.id, {url:`chrome-extension://${chrome.runtime.id}/index.html`})
    }
  })
})

chrome.runtime.onInstalled.addListener(() => {
  chrome.tabs.create({
    url: 'index.html'
  })
})