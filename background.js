browser.runtime.onMessage.addListener(async queryInfo => {
    const tabs = await browser.tabs.query(queryInfo)
    console.debug(tabs)
    if (!tabs.length) return
    await browser.windows.update(tabs[0].windowId, { focused: true })
    await browser.tabs.update(tabs[0].id, { active: true })
})