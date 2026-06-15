// 单页自适应缩放 — 独立打开时 scale 到视口，iframe 内则交由外层 index.html 处理
(function () {
  if (window.self !== window.top) return; // 在 iframe 内，不缩放
  var W = 1920, H = 1080;
  function fit() {
    var s = Math.min(window.innerWidth / W, window.innerHeight / H);
    document.body.style.transform = 'scale(' + s + ')';
  }
  fit();
  window.addEventListener('resize', fit);
})();
