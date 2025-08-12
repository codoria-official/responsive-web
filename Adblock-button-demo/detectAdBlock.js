(function (window) {
  function detectAdBlock(timeout = 1500) {
    return new Promise((resolve) => {
      const bait = document.createElement("div");
      bait.className = "adsbox ad-banner adsbygoogle";
      Object.assign(bait.style, {
        position: "absolute",
        left: "-9999px",
        width: "1px",
        height: "1px",
      });
      document.body.appendChild(bait);

      const checkBlocked = () => {
        const computed = window.getComputedStyle(bait);
        return (
          bait.offsetParent === null ||
          bait.offsetHeight === 0 ||
          bait.clientHeight === 0 ||
          computed.display === "none" ||
          computed.visibility === "hidden"
        );
      };

      let finished = false;
      const done = (result) => {
        if (finished) return;
        finished = true;
        bait.remove();
        resolve(result);
      };

      if (checkBlocked()) return done(true);

      const timer = setTimeout(() => done(checkBlocked()), timeout);

      const observer = new MutationObserver(() => {
        if (!document.body.contains(bait)) {
          clearTimeout(timer);
          observer.disconnect();
          done(true);
        }
      });
      observer.observe(document.documentElement, {
        childList: true,
        subtree: true,
      });
    });
  }

  window.detectAdBlock = detectAdBlock;
})(window);
