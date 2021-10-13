# Common Accessibility Mistakes

## Introduction
Working with accessibility is something that we should work on as web developers, however there's still a lot of confusion and easily avoidable mistakes we've all probably done at least once.

Here I've identified some of the most common ones I've seen or made myself when working with accessibility. I know there's A LOT more so I might keep updating this repo and even re-structure the directory to keep it organized., but I'll be releasing them in batches as these go in hand-in-hand with a presentation. That being said, all the needed information and explanation is here.

Every case has it's own `readme.md` explaining what the common mistake is, why it's bad and how to fix it, along with the sample code. There's also a sample website template which is what I use to base every example.

## Mistakes

1. No `aria-live` on dynamic content
1. No Focus management on Popups/Modals
1. Having an image as a button
1. Incorrect use of `role` attribute
1. Using `<button>` vs using `<a>`


## Bonus extra simple ones

1. Typing out UPPERCASE copy
1. Incorrect use of the `alt` attribute

***

# Accessibility Auditing Tools

The most trustworthy tools I found when we started working on this project were:
* [axe DevTools Chrome Extension](https://chrome.google.com/webstore/detail/axe-devtools-web-accessib/lhdoppojpmngadmnindnejefpokejbdd)
* [WAVE Evaluation Tool Chrome Extension](https://chrome.google.com/webstore/detail/wave-evaluation-tool/jbbplnpkjmmeebjpijfedlgcdilocofh)

Also, axe recently developed a VS Code extension as well which works a bit like a linter, and while it's somewhat new and I haven't used it for long, so far it looks pretty useful:
* [axe VS Code Linter](https://marketplace.visualstudio.com/items?itemName=deque-systems.vscode-axe-linter)
