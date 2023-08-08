

document.addEventListener("DOMContentLoaded", () => {
    const activateButton = document.getElementById("activate");
    activateButton.addEventListener("click", () => {
      console.log("Extension activated");
      chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
        chrome.tabs.executeScript(
          tabs[0].id,
          { code: 'console.log("Content script injected");' }
        );
      });
    });
  });
  