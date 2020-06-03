"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
//import { userManagement } from "../pageObjects/userManagement";
const protractor_1 = require("protractor");
const angularHomePage_1 = require("../pageObjects/angularHomePage");
const userManagement_1 = require("../pageObjects/userManagement");
const chai_1 = __importDefault(require("chai"));
const fs1 = require('fs');
const data = fs1.readFileSync('./testData/data.json');
const testData = JSON.parse(data);
const objectFIle = fs1.readFileSync('./objectRepo/objectRepository.json');
const objectjson = JSON.parse(objectFIle);
var dataVal = testData.env;
console.log("Reading Environment : " + dataVal);
let expect = chai_1.default.expect;
let ah = new angularHomePage_1.HomePage();
let um = new userManagement_1.usermanagement();
const expectedConditions = protractor_1.protractor.ExpectedConditions;
cucumber_1.Given('Admin user landed on user management page', () => __awaiter(this, void 0, void 0, function* () {
    yield protractor_1.browser.get(testData.env).then(() => __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.wait(expectedConditions.visibilityOf(ah.addUserLink), 60);
        expect(yield ah.addUserLink.isDisplayed()).to.equals(true, "CLick Add User");
    }));
}));
cucumber_1.When('User Enter all the details in Add User Form', () => __awaiter(this, void 0, void 0, function* () {
    // Write code here that turns the phrase above into concrete actions
    yield protractor_1.browser.waitForAngularEnabled(true);
    yield ah.addUserLink.click();
    yield ah.firstName.sendKeys(testData.firstName);
    yield ah.lasName.sendKeys(testData.lastName);
    yield ah.userName.sendKeys(testData.username);
    yield ah.password.sendKeys(testData.password);
    yield ah.email.sendKeys(testData.email);
    yield ah.mobile.sendKeys(testData.mobileNumber);
    yield ah.customer.get(0).click();
    yield protractor_1.element(protractor_1.by.cssContainingText('option', testData.role)).click();
    yield ah.save.click();
    yield protractor_1.browser.sleep(10000);
}));
cucumber_1.When('User delete specified user from table', () => __awaiter(this, void 0, void 0, function* () {
    console.log("Deleted User is : " + testData.deleteUser);
    um.deleteuser(testData.deleteUser);
    yield um.crossokicon.click();
    yield protractor_1.browser.sleep(20000);
}));
cucumber_1.Then('User verify successfully added user in user management table', () => __awaiter(this, void 0, void 0, function* () {
    ah.verifyAddedUser(testData.firstName);
}));
cucumber_1.Then('User verify user deleted successfully', () => __awaiter(this, void 0, void 0, function* () {
    yield protractor_1.browser.sleep(10000);
    yield um.verifydeleteduser(testData.deleteUser);
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zdGVwRGVmaW5hdGlvbnMvc3RlcHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLHVDQUE2QztBQUM3QyxpRUFBaUU7QUFDakUsMkNBQThEO0FBQzlELG9FQUEwRDtBQUMxRCxrRUFBK0Q7QUFDL0QsZ0RBQXdCO0FBR3hCLE1BQU0sR0FBRyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUMxQixNQUFNLElBQUksR0FBRyxHQUFHLENBQUMsWUFBWSxDQUFDLHNCQUFzQixDQUFDLENBQUM7QUFDdEQsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUdsQyxNQUFNLFVBQVUsR0FBRyxHQUFHLENBQUMsWUFBWSxDQUFDLG9DQUFvQyxDQUFDLENBQUM7QUFDMUUsTUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUUxQyxJQUFJLE9BQU8sR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDO0FBQzNCLE9BQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLEdBQUcsT0FBTyxDQUFDLENBQUM7QUFFaEQsSUFBSSxNQUFNLEdBQUcsY0FBSSxDQUFDLE1BQU0sQ0FBQztBQUV6QixJQUFJLEVBQUUsR0FBRyxJQUFJLDBCQUFRLEVBQUUsQ0FBQztBQUN4QixJQUFJLEVBQUUsR0FBRyxJQUFJLCtCQUFjLEVBQUUsQ0FBQztBQUM5QixNQUFNLGtCQUFrQixHQUFHLHVCQUFVLENBQUMsa0JBQWtCLENBQUM7QUFFekQsZ0JBQUssQ0FBQywyQ0FBMkMsRUFBRSxHQUFTLEVBQUU7SUFFNUQsTUFBTSxvQkFBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQVMsRUFBRTtRQUM5QyxNQUFNLG9CQUFPLENBQUMsSUFBSSxDQUFDLGtCQUFrQixD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