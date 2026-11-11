/* World Kitchen – animation helpers. Purely cosmetic: the site works the same without this file. */
(function () {
  "use strict";
  var reduce = false;
  try { reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches; } catch (e) {}

  /* 1) Recipe cards animate only the first time they appear (not on "show more" or filter re-renders). */
  var grid = document.getElementById("grid");
  if (grid && window.MutationObserver) {
    var seen = new Set();
    var mark = function () {
      grid.querySelectorAll(".card").forEach(function (c) {
        var k = c.dataset.key;
        if (seen.has(k)) c.classList.add("m-seen"); else seen.add(k);
      });
    };
    new MutationObserver(function () { mark(); }).observe(grid, { childList: true });
    mark();
  }

  /* 2) Heart "pop" when a recipe is added to favourites. */
  document.addEventListener("click", function (e) {
    var b = e.target.closest && e.target.closest(".fav, #sheetFav, #favToggle");
    if (!b || reduce) return;
    var key = b.dataset && b.dataset.fav;
    setTimeout(function () {
      var t = key ? document.querySelector('.fav[data-fav="' + key + '"]') : b;
      if (!t || t.getAttribute("aria-pressed") !== "true") return;
      t.classList.add("m-pop");
      setTimeout(function () { t.classList.remove("m-pop"); }, 600);
    }, 0);
  }, true);

  /* 3) Sections fade in as they scroll into view. */
  if (!reduce && "IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (items) {
      items.forEach(function (it) {
        if (it.isIntersecting) { it.target.classList.add("m-in"); io.unobserve(it.target); }
      });
    }, { threshold: 0.08, rootMargin: "0px 0px -40px 0px" });
    document.querySelectorAll(".pantry, footer").forEach(function (el) {
      var r = el.getBoundingClientRect();
      if (r.top < window.innerHeight) return;           // already on screen: leave it alone
      el.classList.add("m-rv");
      io.observe(el);
    });
  }
})();
