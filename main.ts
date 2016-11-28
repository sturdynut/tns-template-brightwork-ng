// this import should be first in order to load some required settings (like globals and reflect-metadata)
import { platformNativeScriptDynamic } from "nativescript-angular/platform";
import { AppModule } from "./app.module";

// Require Brightwork SDK
// @todo: Set your API_KEY and APP_NAME
require('bw-js-sdk');
const API_KEY = 'YOUR_API_KEY'; 
const APP_NAME = 'YOUR_APP_NAME';

// Initialize BrightWork API
global.BrightWork.initialize(API_KEY, APP_NAME)
  .then(() => {
    // @todo: Remove the code below, this is only for demonstration.
    console.log('Brightwork API Loaded!');
    console.dump(global.bw.models);
});

const platform = platformNativeScriptDynamic();
platform.bootstrapModule(AppModule);
