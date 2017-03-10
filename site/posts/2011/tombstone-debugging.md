---
title: Force your Windows Phone 7.5 app to tombstone when debugging
date: 2011/09/27
---

With the new multitasking and fast app switching functionality in Windows Phone 7.5 apps are often kept in memory and no longer tombstone as they did with Windows Phone 7. As long as you build your app with the WP 7.1 SDK you get this free as a developer, it just works.

However, there are times when your app may tombstone, therefore it’s still important to handle (and test) the activated and deactivated events.

In order to test your tombstoning code you can force your application to be tombstoned instead of kept in memory during debugging. To do this, just open your project properties panel, click the debug tab and check **Tombstone upon deactivation while debugging**.

<div class="image-holder">
    <img src="/media/2011/tombstone.png" alt="Settings" />
</div>