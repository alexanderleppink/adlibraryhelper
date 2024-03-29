export function watchAds(addCallback: (ad: Element) => unknown) {
  const adSelector = "._7jvw";
  watchElements(adSelector, addCallback);
}

function watchElements(
  selector: string,
  callback: (element: Element) => unknown
) {
  const observer = new MutationObserver((mutationsList, observer) => {
    for (let mutation of mutationsList) {
      if (mutation.type === "childList") {
        mutation.addedNodes.forEach((node) => {
          if (
            node.nodeType === Node.ELEMENT_NODE &&
            (node as Element).matches(selector)
          ) {
            callback(node as Element);
          }

          const children = (node as Element).querySelectorAll?.(selector);
          for (let child of children) {
            callback(child);
          }
        });
      }
    }
  });
  const config = { childList: true, subtree: true };
  observer.observe(document.body, config);
}
