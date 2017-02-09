# NativeScript Template with Angular 2 and BrightWork

[![Build Status](https://travis-ci.org/sturdynut/tns-template-brightwork-ng.svg?branch=master)](https://travis-ci.org/sturdynut/tns-template-brightwork-ng) 
[![Dependency Status](https://david-dm.org/sturdynut/tns-template-brightwork-ng.svg)](https://david-dm.org/sturdynut/tns-template-brightwork-ng) 
[![devDependency Status](https://david-dm.org/sturdynut/tns-template-brightwork-ng/dev-status.png)](https://david-dm.org/sturdynut/tns-template-brightwork-ng?type=dev)

Telerik NativeScript template using [Angular 2](angular.io) for the frontend and [BrightWork](http://www.brightwork.io/) as the backend.

[![nativescript-ng-bw-logo.png](https://s20.postimg.org/cu4arjfxp/nativescript_ng_bw_logo.png)](https://postimg.org/image/ntpi356cp/)

## Getting Started

Before using this template you will need to setup your system to run NativeScript.  It is recommended you 
read through the quick-setup [here](http://docs.nativescript.org/start/quick-setup) and to install the [NativeScript CLI](https://github.com/NativeScript/nativescript-cli).

To create a new NativeScript project using this template you'll need to use the NativeScript CLI with the `--template` option.

* `tns create my-app-name --template tns-template-brightwork-ng`
* `cd my-app-name`
* `tns platform add ios` for IOS or `tns platform add android` for Android

### BrightWork Setup

Sign up if you haven't already at [http://www.brightwork.io/](http://www.brightwork.io/). It is also recommend that you read through the [Getting Started](http://www.brightwork.io/#/docs/main/gettingstarted) docs.

* `npm install -g bw-cli` - Installs the Brightwork CLI.
* `bw login` - Enter your Brightwork username and password
* `bw configure` - Setup your API endpoint, default is "http://api.brightwork.io".
  * `bw info` - To verify your configuration.
* `bw init` - To create your app manifest.  Be sure to update the `manifest.yml` file with your app name and models.
* `bw push` - To deploy your app.
* `bw list` - To view your deployed apps and to retrieve your API key.

## Running

* `tns livesync ios --watch` for local dev
* or `tns run ios` for running IOS
* or `tns run android` for running Android

## Issues

Please file issues [here](https://github.com/sturdynut/tns-template-brightwork-ng/issues)

## Questions / Comments

Send a message to [@sturdynut](https://twitter.com/sturdynut)