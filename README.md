# jQuery Lightbox Plugin
A simple Lightbox plugin for jQuery. Works in IE8 and above.

# Overview

This plugin was written a few years ago, mostly for fun. It provides a modal-style window, intended for image galleries, and works on all modern browsers, including legacy support for Internet Explorer 8 on Windows XP.

# Demo

A basic demo of the plugin's functionality can be found at: http://martinmacmillan/jq-lightbox-plugin/, and includes all the core files necessary for legacy support.

# Design Concerns

The plugin is safely encapsulated, and works out of the box, with or without the optional paramaters.

Regarding the seperation of concerns, I have made the difficult decision to have the primary CSS hardcoded into the application. Whilst it can be argued that a seperate CSS file may be more appropiate, I believe, in this circumstance, that the core styles are absolutely integral to the plugin's functionality, and should not be altered.

The plugin does apply unique CSS classes, however, which can be hooked onto and styled, externally.

# Plugin Usage

Simply link the lightbox.min.js file to your HTML file, and then, within your script, append the method '.lightbox()' to the DOM element that contains your image gallery.

# Optional Paramaters

There are optional arguements which may be supplied to the plugin method, within an object literal. 

These are:

- preload: An array of images for the purposes of pre-loading larger size images in the background
- speed: Animation speed [default 400]
- animation: Animation type [default 'linear']
- opacity: Opacity of the overlay [default 0.7]

# Disclaimer

This plugin is supplied as is, and I make no guarantees to its interaction with any other code or framework. I am, however, happy to hear any feedback.
