# How long have you wasted on Renren??

This Chrome plugin aims to time how long you spend on Renren.

Basically, we want to achieve the goal by time how long user focuses on *renren.com* web pages.

This is the **demo** branch of the repo. That means, all files except `timerDemo.md` are from demo of the Google [Getting Started: Building a Chrome Extension](http://developer.chrome.com/extensions/getstarted.html). All the guides are on the pages as well.

## Files List
There are 4 files in total:
* `icon.png`: The tiny logo on the extenstions bar.
* `manifest.json`: The configure file.
* `popup.html`: The UI when you click the tiny logo on the extenstions bar.
* `popup.js`: The js scripts of the `popup.html`.
* `timerDemo.html`: The html resource file to help us build the timer.

## ATTENTION!!!
Google doesn't allow you to write `js` in `html`, the right way is to import it, otherwise the `js` won't run at all.

The other requirement are mentioned in the [this article](http://ephrain.pixnet.net/blog/post/46329708-%5Bchrome-extension%5D-%E8%A2%AB-chrome-extension-manifest-v2-%E6%90%9E%E7%BF%BB).
