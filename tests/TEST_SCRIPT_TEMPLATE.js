const constants = require('../global_constants'); // reference to hardcoded constants for use in test scripts and PO functions
const testData = require('../elements/testData'); // reference to hardcoded element locators for use in test scripts and PO functions

describe('Tailor UI Refresh: Accessibility Tests', function () {
   const self = this;
   this.tags = ['test']; // tags to target for run script
   before(function (browser) {
      // any setup code etc
   });
   beforeEach(function (browser) {
      if (process.env.PLATFORM == "desktop") {
         browser.window.maximize();
      }
   });
   afterEach(function (browser) {
      browser.end();
   });
   after(function (browser) {
      // any cleanup code etc
   });

      /* 
     * This is a template to use for starting on a new script
     * Feel free to copy this template for use in starting a test script!
     * Here is an example:
     * 
     *   //This will test the repeatSteps command
     *   'TESTING!!! Repeat Steps command' : (browser) => {
     *    var n = 1
     *
     *    browser.repeatSteps(3, () => {
     *        console.log("Repeat Steps iteration: "  +n);
     *        n++;
     *    })
     *    browser.end();
     *    },
     * 
     */

   it("TESTING!!! <ENTER TEST NAME HERE>", function (browser) {
      //Enter your script here

      browser.end();
   });
   
});