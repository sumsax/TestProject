import { After, Before } from "cucumber";
import { browser } from "protractor";

/**
 * This hook will be executed before scenarios
 */
Before({ tags: "@Sanity" }, function () {
  browser.manage().window().maximize();
});

/**
 * This hook will be executed after scenarios
 */
After(async function (scenario) {
  //take screesnhot and attach it with report
  const screenshot = await browser.takeScreenshot();
  this.attach(screenshot, "image/png");
  console.log("Test is completed");
});





