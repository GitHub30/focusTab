exportFunction(browser.runtime.sendMessage, window, {defineAs:'focusTab'})
document.addEventListener('focusTab', e => browser.runtime.sendMessage(e.detail))