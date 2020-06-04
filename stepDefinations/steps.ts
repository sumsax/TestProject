import { Given, When, Then } from "cucumber";
import { browser, element, by, protractor } from "protractor";
import { AddUserPage } from "../pages/AddUserPage";
import { UserManagementPage } from "../pages/UserManagementPage";
import chai from "chai";
import fs from 'fs';

// read json for test-data and environment properties
const fileReader = require('fs');
const data = fileReader.readFileSync('./testData/data.json');
const testData = JSON.parse(data);

const envJsonFile = fileReader.readFileSync('./environment.json');
const envJsonObject = JSON.parse(envJsonFile);

// page object reference
let addUserPage = new AddUserPage();
let userManagementPage = new UserManagementPage();

const expectedConditions = protractor.ExpectedConditions;
let expect = chai.expect;

Given('User landed on user management page', async () => {

  await browser.get(envJsonObject.env).then(async () => {
    browser.wait(expectedConditions.visibilityOf(userManagementPage.addUserLink), 60);
    expect(await userManagementPage.addUserLink.isDisplayed()).to.equals(true,
      "CLick Add User");
  });
});

When('Add new User with all the details on Add User Form', async () => {
  await userManagementPage.clickOnAddUser();
  await addUserPage.addUser();
});

Then('Verify user added successfully on web table', async () => {
  await userManagementPage.getUserRecordPosition(testData.username).then((pos) => {
    expect(pos).to.not.equals(-1, "User not added");
  })
});

When('Delete specified user i.e. {string} from table', async (userName) => {
  await userManagementPage.deleteUser(userName);
});

Then('Verify user {string} deleted successfully', async (userName) => {
  await userManagementPage.getUserRecordPosition(userName).then((pos) => {
    expect(pos).to.equals(-1, "User not deleted");
  })
});