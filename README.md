Colordrop
=====
*Interactive Drag and Drop Coloring Concept*
***

[![Colordrop Interactive Drag and Drop Coloring](https://raw.githubusercontent.com/ApoorvSaxena/colordrop/master/chrome-extension/images/coloring_concept.gif)](https://chrome.google.com/webstore/detail/colordrop-interactive-dra/gdoiopdelonmejbbcfoiibojafcpihhm)

Color a website by dragging and dropping a color droplet from a palette.

Installation
-----

Bookmarklet(Cross Browser):

Just add this into the URL section of a new bookmark:

```
javascript:(function(){var el=document.createElement('script');el.type='text/javascript';el.src='https://rawgit.com/ApoorvSaxena/colordrop/master/dist/production.min.js';el.onerror=function(){alert("Looks like the Content Security Policy directive is blocking the use of bookmarklets\n\nYou can copy and paste the content of:\n\n\"https://rawgit.com/ApoorvSaxena/colordrop/master/dist/production.min.js\"\n\ninto your console instead\n\n(link is in console already)");console.log("https://rawgit.com/ApoorvSaxena/colordrop/master/dist/production.min.js");};document.getElementsByTagName('body')[0].appendChild(el);})();
```

For Chrome Users: [Download from Chrome WebStore](https://chrome.google.com/webstore/detail/colordrop-interactive-dra/gdoiopdelonmejbbcfoiibojafcpihhm)

Usage
-----

Drag a color from the color palette(Material Design specific) to a website and color designated areas of it (like sections or texts). One can drag a color from the color palette and drop it on any area that lights up with a blue outline, including text elements.

Once the droplet that you are dragging gets dropped on a content area, a fun little Google Material like animation happens and the whole area gets filled with a colored circle.

Browser Support
-----

**Colordrop** works best on latest versions of Google Chrome.

For all non-supported browsers, the extension does nothing and fallbacks to normal behavior without any explicit handling in your code.

License
-----

Copyright (c) 2015 Apoorv Saxena, http://apoorvsaxena.github.io
Licensed under the [MIT license](http://opensource.org/licenses/MIT).

Credits
-----

Mary Lou - for her contribution [interactive drag and drop coloring concept](http://tympanus.net/codrops/2015/04/22/interactive-drag-drop-coloring-concept/).