(function () {
  var storageKey = "preferred-theme";
  var root = document.documentElement;

  function getPreferredTheme() {
    var saved = localStorage.getItem(storageKey);
    if (saved === "light" || saved === "dark") {
      return saved;
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  function setTheme(theme) {
    root.setAttribute("data-theme", theme);
    localStorage.setItem(storageKey, theme);

    var button = document.getElementById("theme-toggle");
    if (!button) {
      return;
    }

    var icon = button.querySelector(".toggle-icon");
    var text = button.querySelector(".toggle-text");
    var isDark = theme === "dark";

    button.setAttribute("aria-pressed", String(isDark));
    button.setAttribute("aria-label", isDark ? "Switch to bright mode" : "Switch to dark mode");

    if (icon) {
      icon.textContent = isDark ? "Moon" : "Sun";
    }

    if (text) {
      text.textContent = isDark ? "Bright mode" : "Dark mode";
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    setTheme(getPreferredTheme());

    var button = document.getElementById("theme-toggle");
    if (!button) {
      return;
    }

    button.addEventListener("click", function () {
      var current = root.getAttribute("data-theme") || "light";
      setTheme(current === "light" ? "dark" : "light");
    });
  });
})();
