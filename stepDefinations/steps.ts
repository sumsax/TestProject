import { Given, When, Then } from "cucumber";
//import { userManagement } from "../pageObjects/userManagement";
import { browser, element, by, protractor } from "protractor";
import { angularHomePage } from "../pageObjects/angularHomePage";
import { usermanagement } from "../pageObjects/userManagement";
import chai from "chai";
import fs from 'fs';
var userinthelst =0;

const fs1 = require('fs');
const data = fs1.readFileSync('./testData/data.json');
const testData = JSON.parse(data);
//var envVal = environmentDetail["env"]["envDetail"];
var dataVal = testData.env;
console.log("Reading Environment 111111111111111111 : " + dataVal);
let expect = chai.expect;
//let usmngmt = new userManagement();
let ah = new angularHomePage();
let um = new usermanagement();
const expectedConditions = protractor.ExpectedConditions;

Given('I will navigate to Site', async () => {

  await browser.get(testData.env).then(async () => {
    await browser.wait(expectedConditions.visibilityOf(ah.addUserLink), 60);
    expect(await ah.addUserLink.isDisplayed()).to.equals(true,
      "Error while loading User Management page, unable to locate Add User button");
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
  // console.log("Reading Environment 2222222222222 : " + ah.role.count());
   await browser.sleep(10000);
   await element(by.xpath('//select[@name="RoleId"]')).click();
   await element(by.xpath('//select[@name="RoleId"]/option[text()="Customer"]')).click();
   await browser.sleep(50000);
   await element(by.cssContainingText('option', 'Sales Team')).click();
   
   await ah.save.click();
  
   await browser.sleep(50000);
  //await ah.role

  // await ah.arrEle.filter;

  // expect(ah.arrEle.getText()).equal('some text');



});


When('User delete specified user from table', async () => {
  um.deleteuser("Novac");

});