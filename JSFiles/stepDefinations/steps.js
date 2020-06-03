"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
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
//var envVal = environmentDetail["env"]["envDetail"];
var dataVal = testData.env;
console.log("Reading Environment 111111111111111111 : " + dataVal);
let expect = chai_1.default.expect;
//let usmngmt = new userManagement();
let ah = new angularHomePage_1.angularHomePage();
let um = new userManagement_1.usermanagement();
const expectedConditions = protractor_1.protractor.ExpectedConditions;
cucumber_1.Given('I will navigate to Site', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.get(testData.env).then(() => __awaiter(void 0, void 0, void 0, function* () {
        yield protractor_1.browser.wait(expectedConditions.visibilityOf(ah.addUserLink), 60);
        expect(yield ah.addUserLink.isDisplayed()).to.equals(true, "CLick Add User");
    }));
}));
cucumber_1.When('User Enter all the details in Add User Form', () => __awaiter(void 0, void 0, void 0, function* () {
    // Write code here that turns the phrase above into concrete actions
    yield protractor_1.browser.waitForAngularEnabled(true);
    yield ah.addUserLink.click();
    yield ah.firstName.sendKeys(testData.firstName);
    yield ah.lasName.sendKeys(testData.lastName);
    yield ah.userName.sendKeys(testData.username);
    yield ah.password.sendKeys(testData.password);
    yield ah.email.sendKeys(testData.email);
    yield ah.mobile.sendKeys(testData.mobileNumber);
    yield ah.customer.click();
    yield protractor_1.element(protractor_1.by.cssContainingText('option', testData.role)).click();
    yield ah.save.click();
    yield protractor_1.browser.sleep(20000);
}));
cucumber_1.When('User delete specified user from table', () => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Deleted User is : " + testData.deleteUser);
    um.deleteuser(testData.deleteUser);
    yield um.crossokicon.click();
    yield protractor_1.browser.sleep(20000);
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zdGVwRGVmaW5hdGlvbnMvc3RlcHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1Q0FBNkM7QUFDN0MsaUVBQWlFO0FBQ2pFLDJDQUE4RDtBQUM5RCxvRUFBaUU7QUFDakUsa0VBQStEO0FBQy9ELGdEQUF3QjtBQUd4QixNQUFNLEdBQUcsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDMUIsTUFBTSxJQUFJLEdBQUcsR0FBRyxDQUFDLFlBQVksQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0FBQ3RELE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDbEMscURBQXFEO0FBQ3JELElBQUksT0FBTyxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUM7QUFDM0IsT0FBTyxDQUFDLEdBQUcsQ0FBQywyQ0FBMkMsR0FBRyxPQUFPLENBQUMsQ0FBQztBQUNuRSxJQUFJLE1BQU0sR0FBRyxjQUFJLENBQUMsTUFBTSxDQUFDO0FBQ3pCLHFDQUFxQztBQUNyQyxJQUFJLEVBQUUsR0FBRyxJQUFJLGlDQUFlLEVBQUUsQ0FBQztBQUMvQixJQUFJLEVBQUUsR0FBRyxJQUFJLCtCQUFjLEVBQUUsQ0FBQztBQUM5QixNQUFNLGtCQUFrQixHQUFHLHVCQUFVLENBQUMsa0JBQWtCLENBQUM7QUFFekQsZ0JBQUssQ0FBQyx5QkFBeUIsRUFBRSxHQUFTLEVBQUU7SUFFMUMsTUFBTSxvQkFBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQVMsRUFBRTtRQUM5QyxNQUFNLG9CQUFPLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDeEUsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUN2RCxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ3RCLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUEsQ0FBQyxDQUFDO0FBR0gsZUFBSSxDQUFDLDZDQUE2QyxFQUFFLEdBQVMsRUFBRTtJQUM1RCxvRUFBb0U7SUFDcEUsTUFBTSxvQkFBTyxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFDLE1BQU0sRUFBRSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUM3QixNQUFNLEVBQUUsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNoRCxNQUFNLEVBQUUsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM3QyxNQUFNLEVBQUUsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM5QyxNQUFNLEVBQUUsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM5QyxNQUFNLEVBQUUsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN4QyxNQUFNLEVBQUUsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUNoRCxNQUFNLEVBQUUsQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7SUFFMUIsTUFBTSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7SUFFckUsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBRXRCLE1BQU0sb0JBQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7QUFFOUIsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUdILGVBQUksQ0FBQyx1Q0FBdUMsRUFBRSxHQUFTLEVBQUU7SUFDdkQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsR0FBRyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDeEQsRUFBRSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDbkMsTUFBTSxFQUFFLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQzdCLE1BQU0sb0JBQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDN0IsQ0FBQyxDQUFBLENBQUMsQ0FBQyJ9