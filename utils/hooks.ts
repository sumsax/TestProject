
import { After, Before, Status } from "cucumber";
import { browser } from "protractor";



Before({ tags: "@Sanity" }, function () {
  // This hook will be executed before scenarios tagged with @foo
  browser.manage().window().maximize();
});

After({ tags: "@Sanity" }, function () {
  // This hook will be executed before scenarios tagged with @foo
 
});

Before({ tags: "@Sanity" }, function () {
  // This hook will be executed before scenarios tagged with @foo and @bar
 
});

After(async function (scenario) {
  // This hook will be executed before scenarios tagged with @foo
  console.log("Test is completed");
  //code to take screesnhot
  const screenshot = await browser.takeScreenshot();
  this.attach(screenshot, "image/png");
});





