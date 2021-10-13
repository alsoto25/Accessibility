# Incorrect use of the `alt` attribute

Images are really tricky to work with when it comes to accessibility, as most of the times we'd like to use images of all types on our websites. It makes them more appealing, helps communicate information better and overall just improves the experience on the site, at least most of the times.

But what happens to screen reader users? Eye candy doesn't necessarily translates to "ear candy".

## Problem

On this case we focused on decorative images, as these are the most common images found in websites, so we have these cases:

1. No `alt` attribute on an image will cause the screen reader to read the name of the image, which 99% of the times won't make any sense to the user.
1. Having an over-explained `alt` description on a decorative image is not inaccessible per-se, but it creates unnecessary information for the user, as it makes no difference to the experience.

### Video Demonstration

[![Accessibility - Correct use of the `alt` attribute (Wrong)](http://img.youtube.com/vi/gqAz2SaesME/0.jpg)](http://www.youtube.com/watch?v=gqAz2SaesME "Accessibility - Correct use of the `alt` attribute (Wrong)")

## Solution

For decorative images, it's important that we set the `alt` attribute to empty (`alt=""`), as this makes it so the screen reader knows the image is completely eye candy and not relevant for a visually impaired user.

### Video Demonstration

[![Accessibility - Correct use of the `alt` attribute (Correct)](http://img.youtube.com/vi/C3qyp9zr1Kw/0.jpg)](http://www.youtube.com/watch?v=C3qyp9zr1Kw "Accessibility - Correct use of the `alt` attribute (Correct)")

## More information

While this case focused only on decorative images, there's quite a few more type of images in a websites:

* **Functional Images**: These are images used as buttons or links, e.g. A save icon that triggers a Save dialog or an image that opens a tooltip. The `alt` for these images should describe what clicking it will do.
* **Images of Text**: Some logos might be just a typography or maybe an image that has text written out in a fancy way not achievable through CSS. The `alt` in this case should just have the text on the image written out.
* **Informative Images**: This could be a photograph showcasing the use of a product we're selling or a simple graphic. On these types of images we want a brief explanation of what the image shows on the `alt`.
* **Complex Images**: These may be something like an infographic image or a complex graphic conveying essential information to the user. The approach for these are not as straight forward as the other ones, however we must make sure that the information is described somewhere else in the website, either the through the `alt` attribute or any other way accessible through the natural navigation of the site. Different possible approaches can be found [here](https://www.w3.org/WAI/tutorials/images/complex/).

You can read [this article](https://www.w3.org/WAI/tutorials/images/decision-tree/) to have a more in-depth explanation about each of the image types and a decision tree of how to fill the `alt`of your image.
