# Unload On Demand

### Install

[Firefox Add-ons Marketplace](https://addons.mozilla.org/en-US/firefox/addon/unload-on-demand/)

### What it does

It unloads the tabs other than the currently open one. It does that through the 2 context menu
(right click menu) buttons: ```Unload Others``` and ```Unload Others (Force)```. The latter button tries to
unload all other tabs no matter what they are doing in the background. The former button **doesn't
unload** the tab if the tab is **playing media and NOT MUTED**. You can use this add-on to save
memory or stop the media/background task/anything that other tabs are executing, all at once.
It is disabled on private windows (not optional at the moment).

### Why this add-on

- It is simple and efficient. The functionality is triggered only when the buttons are clicked.
It doesn't auto unload tabs. That means there is **0 background task**. No tracker, no counter, nothing.
Even the source code itself is unloaded after a while of the last usage. 
- Some old add-ons try to unload tabs by replacing the content with a blank page.
UoD uses modern firefox APIs to discover and unload(discard) the tabs.
- It doesn't alter the title of the tab. Some other add-ons do that and it creates weird inconsistency
between the manually unloaded tabs and tabs handled by the add-on. With this add-on, unloaded tabs look
faded the default way zen handles them. 
- It **really** unloads all other tabs. It unloads script running tabs, tabs with socket connection, all
the tabs. You will not need to check the tabs one by one. There is also *Force* option if you want to
unload media playing tab.

