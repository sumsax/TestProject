import { Given, When, Then } from "cucumber";
//import { userManagement } from "../pageObjects/userManagement";
import { browser, element, by, protractor } from "protractor";
import { angularHomePage } from "../pageObjects/angularHomePage";
import chai from "chai";
import fs from 'fs';

const fs1 = require('fs');
const data = fs1.readFileSync('./testData/data.json');
const testData = JSON.parse(data);
//var envVal = environmentDetail["env"]["envDetail"];
var dataVal = testData.env;
console.log("Reading Environment 111111111111111111 : " + dataVal);
let expect = chai.expect;
//let usmngmt = new userManagement();
let ah = new angularHomePage();
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

  await ah.addUserLink.click();
  await ah.firstName.sendKeys(testData.firstName);
  await ah.lasName.sendKeys(testData.lastName);
  await ah.userName.sendKeys(testData.username);
  await ah.password.sendKeys(testData.password);
  await ah.email.sendKeys(testData.email);
  await ah.mobile.sendKeys(testData.mobileNumber);
  await ah.customer.click();
  //await ah.role

  // await ah.arrEle.filter;

  // expect(ah.arrEle.getText()).equal('some text');



});


Then('User verify the first user', async (string) => {
  // Write code here that turns the phrase above into concrete actions
  await browser.sleep(3000);
  await ah.search.sendKeys(string);
});