# Correct use of `role` attribute

Roles are a great way to help screen reader users give the correct context on what type of element is the user on and how should the screen reader react to the element. Here I've presented a couple of use cases that are not that uncommon.

## Problem

1. There's just times where we need to have an entire section turned into a clickable element, however if we just add a `click` event to an element that isn't usually clickable, the screen reader has no way to know and inform the user that the element is clickable.

1. A lot of websites implement tooltips nowdays, it's a great way to convey information that might not be obvious to the user without cluttering the site with content that might not be relevant unless the user is actively interacting with certain elements. However, using the correct role will not only change how the screen reader reads the element, but the urgency or politeness of the element.

## Solution

1. If adding the entire section on a `<button>` is not feasible or feels too clunky, then the next best approach is adding a `role="button"` which makes the screen reader interpret it as a button regardless of the type of element it is. Also adding a `tabindex="0"` to the element will make it so it's "tab-able", as it's an interactive element.

1. While having a tooltip with the `role="alert"` is not entirely wrong, it implies that the user is expected to navigate into the tooltip. Instead, WAI-ARIA has a specialized role for tooltip (`role="tooltip"`) which should be used, accompanied by `aria-hidden="true"` and `aria-describedby` on the parent. This way, the tooltip will automatically be read to the user when he navigates to the element that has it.

## More information

ARIA has a lot of roles available and new ones are constantly created and gave support to, so it's pretty hard to go over all of them here, but if you're looking into more information on them, you can check it out [here](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles)

### Button Role

While the button role itself is pretty straight forward, there's a few other attributes that can be used in conjunction with this one for certain situations:

1. **Toggle**: When working with a toggle button, aria has another attribute (`aria-pressed`) which can be used to inform the user whether the toggle is *on* or *off*.
1. **Accordion**: Accordions are pretty common on websites nowdays and while they technically function as toggles, WAI-ARIA has provided a great way to identify them as accordions specifically. The attribute `aria-expanded` can tell the user whether the content this button controles is currently shown or not.

Another important topic to keep in mind is when to use `<button>` vs `<a>` which will be covered in the next case. More best practices and info regarding the button role and even the `<button>` tag can be found on [this page](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/button_role).

### Tooltip Role

This is a relatively new role and support is still not at 100%, however it's important to keep it in mind and use when it can be applied. That being said, it's important to use this role accompanied by all other attributes described on the solution:

* `aria-describedby`: The `aria-describedby` attribute's job is to give more context or information on the element. When we set this attribute to the element that triggers the tooltip, it creates an experience similar to what visual users experience.
* `aria-hidden="true"`: Adding this to the tooltip makes it so the screen reader ignores this element through natural navigation. This is because the `aria-describedby` already reads out the information present inside this tooltip, so it's unnecessary to have this element visible to the screen reader, specially considering sometimes tooltips are not positioned right next to the element it described in a HTML structure context.
* `role="tooltip"`: This attribute is used mostly to complement the functionality that the other 2 attributes provide, by giving a context of the functionality to the screen reader.

Information was taken from [this article](https://www.digitala11y.com/tooltip-role/) where you can see a couple tiny examples as well.