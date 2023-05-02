chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  chrome.runtime.sendMessage({
    message: "suh cuh!",
    url: changeInfo.url,
  });
});
