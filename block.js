// chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
//   console.log("%j", request);
// });

async function main() {
  let isEnabled;
  let result = await chrome.storage.local.get(["isEnabled", "isStricter"]);
  isEnabled = result.isEnabled;
  isStricter = result.isStricter;

  console.log("result: %j", result);
  if (isEnabled) doTheBlocking(isStricter);
}
function doTheBlocking(isStricter) {
  let words = ["monsterhunter", "mhrise", "twitter", "anime", "gaming"];
  if (isStricter) {
    words = [...words, "twitch", "reddit", "gmail", "youtube"];
  }
  console.log();
  for (const banned_word of words) {
    if (window.location.href.toLowerCase().indexOf(banned_word) > -1) {
      window.location.href = "https://www.google.com/";
    }
  }
}
main();
