# Using `<button>` vs using `<a>`

With SEO becoming more and more refined and relevant to the organic visits of a website, this is happening less and less often. That being said, the answer to why this could be an accessibility issue as well is not obvious.

## Problem

The problem when using the incorrect tag is that screen readers read **anchors** in a way that gives the users an expectation to be a navigation to another part of the site or a different site completely.

The other way is also an issue, when a button that has the only function to redirect a user to another part of the site is navigated to, the screen reader won't give the user any clues that this might be the case, as it's not the expected behavior of a button.

Finally, another minor problem that not everyone is familiar with is that `<button>` elements are expected to work with the `Space` or `Enter` keys, while on `<a>` tags only the `Enter` key should work and pressing the `Space` button shouldn't trigger it. Switching them around could create confusing interactions for the user.

### Video Demonstration

[![Accessibility - Using `<button>` vs using `<a>` (Wrong)](http://img.youtube.com/vi/AGzpyaO8Rok/0.jpg)](http://www.youtube.com/watch?v=AGzpyaO8Rok "Accessibility - Using `<button>` vs using `<a>` (Wrong)")

## Solution

While the solution seems really obvious at first glance, it's sometimes not easy to make the correct choice since there's some cases where you want a button to first trigger some JS functionality and then redirect the user, or when you have an element that completely looks like all the other `<button>` elements on the site, however it's only functionality is to redirect the user somewhere else.

There's a rule of thumb to making sure when to use the correct element for each situation:

> If an element's only job is to navigate the user to another place, it should be a link, but if clicking the element will trigger some sort of functionality on the site (download a file, login, open a popup, etc.), a button should be used instead.

### Video Demonstration

[![Accessibility - Using `<button>` vs using `<a>` (Correct)](http://img.youtube.com/vi/aUM_ygaKKYc/0.jpg)](http://www.youtube.com/watch?v=aUM_ygaKKYc "Accessibility - Using `<button>` vs using `<a>` (Correct)")
## More info

[Here](http://web-accessibility.carnegiemuseums.org/content/buttons/) you can find a little more information on the topic.
