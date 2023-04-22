for (const banned_word of ["monsterhunter", "mhrise", "twitter", "anime", "gaming"]) {
  if (window.location.href.toLowerCase().indexOf(banned_word) > -1) {
    window.location.href = "https://www.google.com/";
  }
}
