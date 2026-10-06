(() => {
  const init = (_onInstalledDetails) => {
    const ID_OTHERS = "unload-on-demand-others";
    const ID_FORCE = "unload-on-demand-others-force";

    browser.contextMenus.create({
      id: ID_OTHERS,
      title: "Unload Others",
      contexts: ["tab"],
    });

    browser.contextMenus.create({
      id: ID_FORCE,
      title: "Unload Others (Force)",
      contexts: ["tab"],
    });

    const contextMenuClick = async (clickInfo, clickedTab) => {
      // if different buttons are clicked, exit the function
      if (
        clickInfo.menuItemId !== ID_OTHERS &&
        clickInfo.menuItemId !== ID_FORCE
      ) {
        return;
      }

      const tabQuery = {};
      if (clickInfo.menuItemId !== ID_FORCE) {
        tabQuery.audible = false;
      }
      const tabs = await browser.tabs.query(tabQuery);
      for (const tab of tabs) {
        if (clickedTab.id === tab.id) {
          continue;
        }
        browser.tabs.discard(tab.id);
      }
    };

    browser.contextMenus.onClicked.addListener(contextMenuClick);
  };

  browser.runtime.onInstalled.addListener(init);
})();
