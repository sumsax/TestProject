import { Given, When, Then } from "cucumber";
import { browser, element, by, protractor } from "protractor";
import { AddUserPage } from "../pages/AddUserPage";
import { UserManagementPage } from "../pages/UserManagementPage";
import chai from "chai";
import fs from 'fs';

const fileReader = require('fs');
const data = fileReader.readFileSync('./testData/data.json');
const testData = JSON.parse(data);

const orJsonFile = fileReader.readFileSync('./object_repo/object_repository.json');
const orJsonObject = JSON.parse(orJsonFile);

const envJsonFile = fileReader.readFileSync('./environment.json');
const envJsonObject = JSON.parse(envJsonFile);

let addUserPage = new AddUserPage();
let userManagementPage = new UserManagementPage();

const expectedConditions = protractor.ExpectedConditions;
let expect = chai.expect;

Given('Admin user landed on user management page', async () => {

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
  await userManagementPage.isUserExist(testData.username).then((userFound) => {
    expect(userFound).to.equals(true, "User not added");
  })
});

When('Delete specified user i.e. {string} from table', async (userName) => {
  userManagementPage.deleteuser(userName);
});

Then('Verify user {string} deleted successfully', async (userName) => {
  await userManagementPage.isUserExist(testData.username).then((userFound) => {
    expect(userFound).to.equals(false, "User not deleted");
  })
});