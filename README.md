# focusTab
Focus a tab with window.focusTab() function.

# Usage
```javascript
// Focus a tab with title
focusTab({title: 'Example Domain'})

// Focus a tab with url
focusTab({url: 'http://example.com/'})

// Focus a tab with wildcard
focusTab({url: 'https://www.google.com/search*'})
```

First argument is queryInfo object.
https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/query#Parameters