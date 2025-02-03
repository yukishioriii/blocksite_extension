// chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
//   console.log("%j", request);
// });

async function main() {
  let isEnabled;
  let result = await chrome.storage.local.get(["isEnabled", "isStricter"]);
  isEnabled = result.isEnabled;
  isStricter = result.isStricter;

  doTheBlocking(isStricter);
}

function rewrite_tab() {
  // document.write('<html><body><pre>guh</pre></body></html>');
  // document.close();
  window.location.href = "http://192.168.1.94"
}
function doTheBlocking(isStricter) {
  if (window.location.host.toLowerCase().includes("reddit")) {
    if (!(window.location.href.endsWith("reddit.com/") || window.location.href.endsWith("reddit.com/"))) {
      rewrite_tab();
    }
  }
  if (
    window.location.host === "x.com" ||
    window.location.href.includes("twitter.com")
  ) {
    rewrite_tab();
  }


  // let words = ["monsterhunter", "mhrise", "twitter", "anime", "gaming"];
  // let words = [];
  // if (isStricter) {
  //   words = [...words, "twitch", "reddit", "gmail", "youtube"];
  // }
  // console.log();
  // for (const banned_word of words) {
  //   if (window.location.href.toLowerCase().indexOf(banned_word) > -1) {
  //     window.location.href = "https://www.google.com/";
  //   }
  // }
}

main();
