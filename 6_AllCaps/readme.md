# Typing out UPPERCASE copy

This is one of the most common mistakes found out there and also one of the most easily fixable ones.

## Problem

When you write out HTML or CSS, you wouldn't expect a screen reader to try to read it phonetically as it would sound like a bunch of gibberish. That's why screen readers try to read uppercase text as acronyms, which is why having a title like `THIS IS THE TITLE OF MY WEB SITE` could make a screen reader spell out each of the words, because there's no way for the screen reader to differentiate between acronyms and actual words.

## Solution

While some of the other cases might have multiple ways to circumvent the issue, this one really only has one fix; don't type out in ALL CAPS. If you need a text to be uppercase, do it through CSS with the `text-transform: uppercase` property, either by applying it to the element itself or by creating a utility class and applying it to each element that needs to be uppercase.

## More info

[Here](https://freshysites.com/wordpress/ada-compliance/capital-letters-accessibility/) you can find a small article explaining more in depth the reason why this is a bad practice.
