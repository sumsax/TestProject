import { Given, When, Then } from "cucumber";
//import { userManagement } from "../pageObjects/userManagement";
import { browser, element, by, protractor } from "protractor";
import { angularHomePage } from "../pageObjects/angularHomePage";
import { usermanagement } from "../pageObjects/userManagement";
import chai from "chai";
import fs from 'fs';

const fs1 = require('fs');
const data = fs1.readFileSync('./testData/data.json');
const testData = JSON.parse(data);
//var envVal = environmentDetail["env"]["envDetail"];
var dataVal = testData.env;
console.log("Reading Environment : " + dataVal);
let expect = chai.expect;
//let usmngmt = new userManagement();
let ah = new angularHomePage();
let um = new usermanagement();
const expectedConditions = protractor.ExpectedConditions;

Given('Admin user landed on user management page', async () => {

  await browser.get(testData.env).then(async () => {
    await browser.wait(expectedConditions.visibilityOf(ah.addUserLink), 60);
    expect(await ah.addUserLink.isDisplayed()).to.equals(true,
      "CLick Add User");
  });
});


When('User Enter all the details in Add User Form', async () => {
   // Write code here that turns the phrase above into concrete actions
   await browser.waitForAngularEnabled(true);
   await ah.addUserLink.click();
   await ah.firstName.sendKeys(testData.firstName);
   await ah.lasName.sendKeys(testData.lastName);
   await ah.userName.sendKeys(testData.username);
   await ah.password.sendKeys(testData.password);
   await ah.email.sendKeys(testData.email);
   await ah.mobile.sendKeys(testData.mobileNumber);
   await ah.customer.click();
  
   await element(by.cssContainingText('option', testData.role)).click();
  
   await ah.save.click();
  
   await browser.sleep(10000);
  
});


When('User delete specified user from table', async () => {
  console.log("Deleted User is : " + testData.deleteUser);
  um.deleteuser(testData.deleteUser);
  await um.crossokicon.click();
  await browser.sleep(20000);
});

Then('User verify successfully added user in user management table', async () => {
  ah.verifyAddedUser(testData.firstName);
  
});

Then('User verify user deleted successfully', async () => { 
  await browser.sleep(10000);
  await um.verifydeleteduser(testData.deleteUser);
});