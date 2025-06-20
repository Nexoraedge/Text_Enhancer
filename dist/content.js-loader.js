(function () {
  'use strict';

  const injectTime = performance.now();
  (async () => {
    if ("vendor/crx-client-preamble.js")
      await import(
        /* @vite-ignore */
        chrome.runtime.getURL("vendor/crx-client-preamble.js")
      );
    await import(
      /* @vite-ignore */
      chrome.runtime.getURL("vendor/vite-client.js")
    );
    const { onExecute } = await import(
      /* @vite-ignore */
      chrome.runtime.getURL("content.js.js")
    );
    onExecute?.({ perf: { injectTime, loadTime: performance.now() - injectTime } });
  })().catch(console.error);

})();
