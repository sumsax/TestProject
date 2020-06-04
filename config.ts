import { Config } from "protractor";
import * as reporter from "cucumber-html-reporter";
import { ElementFinder, element, by, ElementArrayFinder, browser } from "protractor";

export let config: Config = {
  // The address of a running selenium server.
  // seleniumAddress: 'http://localhost:4444/wd/hub',
  directConnect: true,
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    browserName: 'chrome',
    chromeOptions: {
      args: ['--window-size=1920,1080']
    }
  },

  // Spec patterns are relative to the configuration file location passed
  // to protractor (in this example conf.js).
  // They may include glob patterns.
  specs: ['../features/user.feature'],
  cucumberOpts: {
    // require step definitions
    tags:"@Sanity",
    format: 'json:reports/cucumber_report.json',
    require: ['./stepdefinations/*.js', './utils/*.js']
  },

  onComplete: () => {
    var options = {
      theme: 'bootstrap',
      jsonFile: 'reports/cucumber_report.json',
      output: 'reports/cucumber_report.html',
      reportSuiteAsScenarios: true,
      launchReport: true,
      metadata: {
        "App Version": "0.3.2",
        "Test Environment": "STAGING",
        "Browser": "Chrome  83.0",
        "Platform": "Windows 10",
      }
    };
    reporter.generate(options);
  }
};