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
  if (
    window.location.href.toLowerCase() === "https://www.reddit.com/" ||
    window.location.href.toLowerCase() === "https://www.reddit.com" ||
    window.location.href.toLowerCase() === "https://twitter.com/" ||
    window.location.href.toLowerCase() === "https://twitter.com" 
  ) {
    window.location.href = "https://www.google.com/";
  }

  // let words = ["monsterhunter", "mhrise", "twitter", "anime", "gaming"];
  let words = [];
  if (isStricter) {
    words = [...words, "twitter", "reddit"];
  }
  console.log();
  for (const banned_word of words) {
    if (window.location.href.toLowerCase().indexOf(banned_word) > -1) {
      window.location.href = "https://www.google.com/";
    }
  }
}

main();
