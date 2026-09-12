const adSelectors = [
  '.ad-container',
  '.ad-box',
  '.sponsored-post',
  '[id^="google_ads_"]',
  'iframe[src*="doubleclick.net"]',
  'iframe[src*="googlesyndication.com"]',
  'div[class*="ad_unit"]',
  'div[id*="ad_unit"]',
  'div[class*="banner"]',
  'a[href*="adblock-tester.com/test-ads/"]',
  'img[src*="adblock-tester.com/test-ads/"]'
];

function collapseAdElements() {
  adSelectors.forEach(selector => {
    document.querySelectorAll(selector).forEach(el => {
      el.style.setProperty('display', 'none', 'important');
      el.style.setProperty('visibility', 'hidden', 'important');
      el.style.setProperty('height', '0px', 'important');
    });
  });
}

// Run immediately and setup mutation observer for dynamic elements
collapseAdElements();
if (document.body) {
  const observer = new MutationObserver(collapseAdElements);
  observer.observe(document.body, { childList: true, subtree: true });
} else {
  document.addEventListener('DOMContentLoaded', () => {
    collapseAdElements();
    const observer = new MutationObserver(collapseAdElements);
    observer.observe(document.body, { childList: true, subtree: true });
  });
}