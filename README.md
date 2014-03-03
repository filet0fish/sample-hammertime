Stop! Hammer Time
=================

A sample project for a talk on HammerJS

Project built with Yeoman as follows:

```
yo webapp
bower install hammerjs -save
grunt serve
```

Step 1 adds in the hammer js library, creates an instance of Hammer using the carousel as the target element, adds a listener to the swipe event, and logs the event data to console.

* Note drag vs swipe in testing
* Note event structure, specifically the ```gesture``` property
* Note ```stopDetect```, ```preventDefault```, and ```stopPropagation```
