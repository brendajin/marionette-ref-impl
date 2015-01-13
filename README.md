[![Build Status](https://travis-ci.org/brendajin/marionette-ref-impl.svg?branch=master)](https://travis-ci.org/brendajin/marionette-ref-impl)

# UI Architecture reference implementation for Macys.com

## Guidelines
* Simple enough to understand, but complex enough to illustrate architecture
* Illustrate best example of util, component, feature, page-level Marionette app
* Include example of Nested View

## Utils/Components to use
* Globals ( set a Global from the server, use it from the client ) - stateful
* StringUtil - stateless

## Marionette docs
* [Current official docs](http://marionettejs.com/docs/current)
* [Upcoming official docs](http://dev.marionettejs.com/docs/current)
* [Backbone.Radio](http://blog.marionettejs.com/2014/07/11/introducing-backbone-radio/)

## Marionette Changelog
* [Changelog](https://github.com/marionettejs/backbone.marionette/releases) - great place to learn what is new since v2.0
* [More detailed changelog for v2.0](https://github.com/MarionetteLabs/marionette-changelog-detail)
* [Plan for v3.0](https://github.com/marionettejs/backbone.marionette/issues/1796)
* [Status for v3.0](https://github.com/marionettejs/backbone.marionette/issues?q=is%3Aissue+milestone%3Av3.0.0)

## Reference Implementations
* [Marionette wires](https://github.com/thejameskyle/marionette-wires)
* [Gistbook](https://github.com/jmeas/gistbook) - live at [https://www.gistbook.io/](https://www.gistbook.io/)

## Setup
* Macy's network will block npm and bower when trying to download from ```git://``` so just run this trick one in your terminal and it will replace such references for ```https://``` and then npm and bower should work fine.
```
git config --global url."https://".insteadOf git://
```
* Follow these steps:
```
npm install
npm install -g bower
bower install
npm install -g jasmine
```
* In order to run: ```npm start```
* In order to test: ```npm test```
