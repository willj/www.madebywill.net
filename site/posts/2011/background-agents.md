---
title: Don't be evil. Background Agents on Windows Phone
date: 2011/11/27
excerpt: "Some things to think about to ensure your background agents do the right thing for your users."
---

Microsoft has done a lot of work to ensure background agents are useful without disrupting the user or wiping out their remaining battery power. However, it is still important for you as a developer to do the right thing and think about the user when implementing periodic agents.

## Give the user control and understand their intention

Unless the background agent is critical to your application (from the users point of view, not yours) you should always give the user the choice of whether they want to use this functionality or not. Having asked the question you can now do the right thing, you know the users intention.

If they said no, you know never to bother them again and not to enable a background task when they open your app.

If the user said yes, you can do your best to ensure their expectations are met
- You know to renew the agent when they use your app.
- If the agent has lapsed (for instance the user was without their phone for more than 14 days) you know you should renew it.
- If you’re unable to renew it (because the user blocked your task, perhaps in an attempt to save battery life one day) you know it’s a good idea to tell the user so they can fix it.

## Only run when you need to and do only what you need to do

Periodic tasks run every 30 minutes or so, but that doesn’t mean all of your code needs to execute that often. Think about your use case, are you fetching data? How often does it get updated? Are there times of the day it will never change?

With my [Lovefilm](http://www.windowsphone.com/en-GB/apps/c8366df9-1127-e011-854c-00237de2db9e) app, I use a background agent to check for new films/games that have shipped to the user. This isn’t likely to happen more than a couple of times a week, and the user wouldn’t want to be woken up to hear about it. Therefore I run my code only once every 90 minutes and only between the hours of 8am and midnight, at other times the background agent does nothing and exits immediately.

If your agent is updating live tiles, has the user actually pinned any? Do you check this before you waste their battery downloading data?

Don’t be selfish, it’s not your battery life you’re using, so don’t do things for yourself like upload analytics in the background.

## Other tips

Given that periodic agents have a 14 day time limit before they expire, it’s a good idea to use the back of your tile to gently remind the user to open your app and renew the agent, but don’t be annoying!

If you’re using Isolated Storage Application Settings from a background agent make sure you explicitly call the Save() method, your data won’t be saved otherwise.
