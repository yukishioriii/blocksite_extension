async function main() {
  let isEnabled;
  let result = await chrome.storage.local.get(["isEnabled"]);
  isEnabled = result.isEnabled;

  console.log("isEnabled: " + isEnabled);
  if (isEnabled) doTheBlocking();
}
function doTheBlocking() {
  for (const banned_word of [
    "monsterhunter",
    "mhrise",
    "twitter",
    "anime",
    "gaming",
  ]) {
    if (window.location.href.toLowerCase().indexOf(banned_word) > -1) {
      window.location.href = "https://www.google.com/";
    }
  }
}
main();
