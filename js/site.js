function setThemeLight() {
  document.getElementById("html").classList.remove("dark-theme");
  document.getElementById("html").classList.remove("amoled-theme");
  document.getElementById("html").classList.add("light-theme");
  document.getElementById("navbar-top-level").classList.remove("navbar-dark");
  document.getElementById("navbar-top-level").classList.add("navbar-light");
  document.getElementById("light-theme-toggler").classList.remove("btn-light");
  document.getElementById("light-theme-toggler").classList.add("btn-dark");
  document.getElementById("dark-theme-toggler").classList.remove("btn-light");
  document.getElementById("dark-theme-toggler").classList.add("btn-dark");
  document.getElementById("amoled-theme-toggler").classList.remove("btn-light");
  document.getElementById("amoled-theme-toggler").classList.add("btn-dark");
}

function setThemeDark() {
  document.getElementById("html").classList.remove("light-theme");
  document.getElementById("html").classList.remove("amoled-theme");
  document.getElementById("html").classList.add("dark-theme");
  document.getElementById("navbar-top-level").classList.remove("navbar-light");
  document.getElementById("navbar-top-level").classList.add("navbar-dark");
  document.getElementById("light-theme-toggler").classList.remove("btn-dark");
  document.getElementById("light-theme-toggler").classList.add("btn-light");
  document.getElementById("dark-theme-toggler").classList.remove("btn-dark");
  document.getElementById("dark-theme-toggler").classList.add("btn-light");
  document.getElementById("amoled-theme-toggler").classList.remove("btn-dark");
  document.getElementById("amoled-theme-toggler").classList.add("btn-light");
}

function setThemeAmoled() {
  document.getElementById("html").classList.remove("light-theme");
  document.getElementById("html").classList.remove("dark-theme");
  document.getElementById("html").classList.add("amoled-theme");
  document.getElementById("navbar-top-level").classList.remove("navbar-light");
  document.getElementById("navbar-top-level").classList.add("navbar-dark");
  document.getElementById("light-theme-toggler").classList.remove("btn-dark");
  document.getElementById("light-theme-toggler").classList.add("btn-light");
  document.getElementById("dark-theme-toggler").classList.remove("btn-dark");
  document.getElementById("dark-theme-toggler").classList.add("btn-light");
  document.getElementById("amoled-theme-toggler").classList.remove("btn-dark");
  document.getElementById("amoled-theme-toggler").classList.add("btn-light");
}

document.getElementById("light-theme-toggler").addEventListener("click", () => {
  setThemeLight();
  document.cookie =
    "theme=light; expires= Thu, 31 Dec 2026 23:59:59 UTC;SameSite=Lax";
  console.log("Setting Theme Cookie: Light Theme");
});

document.getElementById("dark-theme-toggler").addEventListener("click", () => {
  setThemeDark();
  document.cookie =
    "theme=dark; expires= Thu, 31 Dec 2026 23:59:59 UTC;SameSite=Lax";
  console.log("Setting Theme Cookie: Dark Theme");
});

document
  .getElementById("amoled-theme-toggler")
  .addEventListener("click", () => {
    setThemeAmoled();
    document.cookie =
      "theme=amoled; expires= Thu, 31 Dec 2026 23:59:59 UTC;SameSite=Lax";
    console.log("Setting Theme Cookie: ANOLED Theme");
  });

var ThemeCookie = document.cookie;

console.log('ThemeCookieResponse = "' + ThemeCookie + '"');

if (ThemeCookie == "theme=light") {
  console.log("Setting Theme based on Cookie: Light Theme");
  setThemeLight();
} else {
  if (ThemeCookie == "theme=dark") {
    console.log("Setting Theme based on Cookie: Dark Theme");
    setThemeDark();
  } else {
    if (ThemeCookie == "theme=amoled") {
      console.log("Setting Theme based on Cookie: AMOLED Theme");
      setThemeAmoled();
    }
  }
}

// SMOOTH SCROLLING PLUS OFFSET FOR FIXED NAV
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .on("click", function (event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Store hash
      var hash = this.hash;

      // Using jQuery with animate() method to add smooth page scroll
      // The optional number (650) specifies the number of milliseconds it takes to scroll to the specified area
      // - 70 is the offset/top margin
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top - 61,
        },
        650,
        function () {
          // Add hash (#) to URL when done scrolling (default click behavior), without jumping to hash
          if (history.pushState) {
            history.pushState(null, null, hash);
          } else {
            window.location.hash = hash;
          }
        }
      );
      return false;
    } // End if
  });
