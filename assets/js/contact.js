(function () {
  function buildEmailAddress(element) {
    var user = element.getAttribute("data-email-user");
    var domain = element.getAttribute("data-email-domain");
    var tld = element.getAttribute("data-email-tld");

    if (!user || !domain || !tld) {
      return;
    }

    var email = user + "@" + domain + "." + tld;
    element.setAttribute("href", "mailto:" + email);

    if (element.getAttribute("data-show-email") === "true") {
      element.textContent = email;
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    var links = document.querySelectorAll("[data-email-user][data-email-domain][data-email-tld]");
    links.forEach(buildEmailAddress);
  });
})();
