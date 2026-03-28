(function () {
  document.addEventListener("DOMContentLoaded", function () {
    var select = document.getElementById("publication-type-select");
    if (!select) {
      return;
    }

    select.addEventListener("change", function () {
      var target = select.value;
      if (target) {
        window.location.href = target;
      }
    });
  });
})();
