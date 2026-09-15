(function() {
  function updateAdVisibility() {
    var ads = Array.prototype.slice.call(document.querySelectorAll('.bidvertiser-side'));
    var targets = Array.prototype.slice.call(document.querySelectorAll('button, a.button, .button'));

    ads.forEach(function(ad) {
      var adRect = ad.getBoundingClientRect();
      var overlapsButton = targets.some(function(target) {
        if (target.closest('.bidvertiser-side') || target.hidden) return false;
        var style = window.getComputedStyle(target);
        if (style.display === 'none' || style.visibility === 'hidden') return false;
        var rect = target.getBoundingClientRect();
        return rect.left < adRect.right && rect.right > adRect.left &&
          rect.top < adRect.bottom && rect.bottom > adRect.top;
      });

      ad.hidden = overlapsButton;
      ad.setAttribute('aria-hidden', overlapsButton ? 'true' : 'false');
    });
  }

  var scheduled = false;
  function scheduleUpdate() {
    if (scheduled) return;
    scheduled = true;
    window.requestAnimationFrame(function() {
      scheduled = false;
      updateAdVisibility();
    });
  }

  window.addEventListener('scroll', scheduleUpdate, { passive: true });
  window.addEventListener('resize', scheduleUpdate);
  window.addEventListener('load', scheduleUpdate);
  new MutationObserver(scheduleUpdate).observe(document.body, {
    childList: true,
    subtree: true,
    attributes: true,
    attributeFilter: ['class', 'hidden', 'style']
  });
  scheduleUpdate();
})();
