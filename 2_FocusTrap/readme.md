# No Focus management on Popups/Modals

Focus management is one of the easiest things to forget when developing popups/modals. That being said, focus management is one of the most important accessibility improvements for a site.

## Problem

There's 4 big problems that a modal without focus management has:
* If no obvious label is set on the button, the user has no way of knowing that pressing the button will open up a popup.
* Unless the modal is positioned right after the button that opens it (which is uncommon, they're usually at the end of the page), the user won't be able to know or find where the newly opened popup is.
* While the focus is on the popup, if a keyboard user keeps navigating through the modal, the focus will eventually fall outside of the modal, which can be really confusing for users, as popups are supposed to block the content of the page.
* After closing the modal, the focus will be lost again, meaning users might not be able to naturally continue navigatin the site where they left off.

### Video Demonstration

[![Accessibility - Focus management on Popups/Modals (Wrong)](http://img.youtube.com/vi/TTKaXVe6p40/0.jpg)](http://www.youtube.com/watch?v=TTKaXVe6p40 "Accessibility - Focus management on Popups/Modals (Wrong)")
## Solution

After knowing the problems, the solutions are pretty straight forward:
1. Add the `aria-haspoup="dialog"` attribute to the button, so user can expect a dialog to be opened and focus to be switched.
1. Switch the focus to the popup when it's opened.
1. Trap the focus inside the popup so users aren't allowed to switch focus to an element outside the modal.
1. As soon as the popup is closed, switch the focus to the element that had the focus before opening the modal, so the user can continue navigating through the content.

### Video Demonstration

[![Accessibility - Focus management on Popups/Modals (Correct)](http://img.youtube.com/vi/r17sHZvbt3g/0.jpg)](http://www.youtube.com/watch?v=r17sHZvbt3g "Accessibility - Focus management on Popups/Modals (Correct)")
## More info

This is only a small part of focus management, but there's a few more things to take into consideration when talking about this topic. You can read more about focus management on [this article](https://css-tricks.com/focus-management-and-inert/).
