async function main() {
  let result = await chrome.storage.local.get(["isEnabled"]);
  console.log("Value currently is %j", result);

  document.getElementById("toggle").checked = result.isEnabled;
  document.getElementById("toggle").addEventListener("change", function () {
    console.log("wac");
    if (this.checked) {
      chrome.storage.local.set({ isEnabled: true });
    } else {
      chrome.storage.local.set({ isEnabled: false });
    }
  });
}

main();
