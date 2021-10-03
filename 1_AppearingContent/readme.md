# No `aria-live` on dynamic content

For this case, we have a section where content can be switched by a couple of buttons places below the content. I've seen this used in a similar way on a couple of projects I've worked on, perhaps not exactly this way, but it can be seen as a very simple carousel.

## Problem

The issue with this approach is that a screen reader user might not be informed of what content is changing and where. This case is even worse because the buttons are located under the changing content, which means that the user won't see the content changed on the normal navigation flow of the website, meaning that if a user presses the button and goes to the next content on the page, they'll be on a completely different section not related to the buttons just pressed, which can be confusing.

## Solution

There's a few solutions that can help with making this more accessible. The main one is adding an `aria-live` property to the container of the slides, this will make it so when displayed content changes, the screen reader will read the content out loud for the user.

Another change that would further improve the experience is moving the buttons above the slides, that way the user with go through the content when navigating to the next section.

## More info on `aria-live`

This attribute was created to fill the gap that dynamic changes on a website creates to visually impaired users, as this content is obvious for user who can see the page, but there's no other queue for those who rely on screen readers. `aria-live` works great when working with dynamic content, a carousel being an example of this, but another great use case for this attribute is when working with searches/filters.

There's 3 different "politeness" settings we can have for `aria-live`:
1. **off (default)**: Any content changed on elements with this setting won't be notified to the user.
2. **polite**: This setting will notify the user about any changes done to the region in a "polite" manner, meaning it will read out changes to the user as long as the user is idle and not interacting with other elements of the page.
3. **assertive**: On this setting, any changes made inside the element will be read out to the user with top priority, meaning that regardless if the user is interacting with the page or not, the changes will be read out, overriding any other interaction the user might be having.

You can read more about the `aria-live` [here](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions).