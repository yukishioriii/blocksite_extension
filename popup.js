async function main() {
  let result = await chrome.storage.local.get(["isEnabled", "isStricter"]);
  console.log("Value currently is %j", result);

  document.getElementById("toggle").checked = result.isEnabled;
  document.getElementById("isStricter").checked = result.isStricter;

  document.getElementById("toggle").addEventListener("change", function () {
    console.log("wac");
    if (this.checked) {
      chrome.storage.local.set({ ...result, isEnabled: true });
    } else {
      chrome.storage.local.set({ ...result, isEnabled: false });
    }
  });
  document.getElementById("isStricter").addEventListener("change", function () {
    console.log("wac");
    if (this.checked) {
      chrome.storage.local.set({ ...result, isStricter: true });
    } else {
      chrome.storage.local.set({ ...result, isStricter: false });
    }
  });
}

main();
