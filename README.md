# How long have you wasted on watering Renren??

This Chrome plugin aims to time how long you spend on Renren.

Basically, we want to achieve the goal by time the period that the user focus on *renren.com* web pages.

## Current State
You can import this folder as an underdevelopping plugin. And the plugin will occur on the plugin bar with the logo of earth (in fact, it is the demo logo of the chrome plugin).

After you import it, everytime you open an Chrome tab including `*renren.com*`, there will be an alert to infome you the plugin works (it runs the `a.js` file). On the other hand, after clicking the logo that is in the plugin bar, you will see an html UI (`temp.html`). However, it doesn't work now. If you open the `temp.html`, it will time how long you've focused on it, and everytime you switch to other tabs, the title of `temp.html` will be `unfocus`.

I think this is caused by the `permission` in the `manifest.json` file. I will try to solve it later.

## Files List
懒得写了...

## To Be Continued...
