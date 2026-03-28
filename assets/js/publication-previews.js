(function () {
  function buildPreview(bar) {
    var link = bar.querySelector(".publication-link");
    var preview = bar.querySelector(".link-preview");

    if (!link || !preview) {
      return;
    }

    var href = link.getAttribute("href");
    var title = link.textContent ? link.textContent.trim() : "Publication";
    if (!href) {
      return;
    }

    // Thum.io returns a screenshot-style thumbnail of the target page.
    var screenshotUrl = "https://image.thum.io/get/width/960/crop/620/noanimate/" + href;

    preview.innerHTML =
      '<div class="website-preview">' +
      '<img class="website-preview-shot" src="' +
      screenshotUrl +
      '" alt="Preview of ' +
      title.replace(/"/g, "&quot;") +
      '" loading="lazy" referrerpolicy="no-referrer" />' +
      '<div class="website-preview-meta">Live page preview</div>' +
      '</div>';
  }

  document.addEventListener("DOMContentLoaded", function () {
    var bars = document.querySelectorAll(".publication-bar");
    bars.forEach(buildPreview);
  });
})();
