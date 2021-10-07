# Image as button content

While the use of this practice has been used less and less, it's still found on certain websites, which makes it still a relevant topic to talk about.

## Problem

The problem here is that if a screen reader user finds a button that only contains an image as content and the button or contained image is not properly labeled, the screen reader has no clue what the button says or does.

### Video Demonstration

[![Accessibility - Image as button content (Wrong)](http://img.youtube.com/vi/_8qfHtjYPpw/0.jpg)](http://www.youtube.com/watch?v=_8qfHtjYPpw "Accessibility - Image as button content (Wrong)")

## Solution

There's a few ways to achieve the same solution for this problem:

* Add an `alt` attribute to the image.
* Add an `aria-label` to the button element.
* Switch to an `<input>` element with `type="image"` and add an `alt` attribute.

### Video Demonstration

[![Accessibility - Image as button content (Correct)](http://img.youtube.com/vi/Qr8Rjt8gbFs/0.jpg)](http://www.youtube.com/watch?v=Qr8Rjt8gbFs "Accessibility - Image as button content (Correct)")

## More on Image Buttons

You can read more on how to properly create image buttons and which cases apply or don't on [this article](https://www.w3.org/WAI/standards-guidelines/act/rules/image-button-accessible-name-59796f/).