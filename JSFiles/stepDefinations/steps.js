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
//var envVal = environmentDetail["env"]["envDetail"];
var dataVal = testData.env;
console.log("Reading Environment : " + dataVal);
let expect = chai_1.default.expect;
//let usmngmt = new userManagement();
let ah = new angularHomePage_1.angularHomePage();
let um = new userManagement_1.usermanagement();
const expectedConditions = protractor_1.protractor.ExpectedConditions;
cucumber_1.Given('I will navigate to Site', () => __awaiter(this, void 0, void 0, function* () {
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
    yield ah.customer.click();
    yield protractor_1.element(protractor_1.by.cssContainingText('option', testData.role)).click();
    yield ah.save.click();
    yield protractor_1.browser.sleep(20000);
}));
cucumber_1.When('User delete specified user from table', () => __awaiter(this, void 0, void 0, function* () {
    console.log("Deleted User is : " + testData.deleteUser);
    um.deleteuser(testData.deleteUser);
    yield um.crossokicon.click();
    yield protractor_1.browser.sleep(20000);
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zdGVwRGVmaW5hdGlvbnMvc3RlcHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLHVDQUE2QztBQUM3QyxpRUFBaUU7QUFDakUsMkNBQThEO0FBQzlELG9FQUFpRTtBQUNqRSxrRUFBK0Q7QUFDL0QsZ0RBQXdCO0FBR3hCLE1BQU0sR0FBRyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUMxQixNQUFNLElBQUksR0FBRyxHQUFHLENBQUMsWUFBWSxDQUFDLHNCQUFzQixDQUFDLENBQUM7QUFDdEQsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNsQyxxREFBcUQ7QUFDckQsSUFBSSxPQUFPLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQztBQUMzQixPQUFPLENBQUMsR0FBRyxDQUFDLHdCQUF3QixHQUFHLE9BQU8sQ0FBQyxDQUFDO0FBQ2hELElBQUksTUFBTSxHQUFHLGNBQUksQ0FBQyxNQUFNLENBQUM7QUFDekIscUNBQXFDO0FBQ3JDLElBQUksRUFBRSxHQUFHLElBQUksaUNBQWUsRUFBRSxDQUFDO0FBQy9CLElBQUksRUFBRSxHQUFHLElBQUksK0JBQWMsRUFBRSxDQUFDO0FBQzlCLE1BQU0sa0JBQWtCLEdBQUcsdUJBQVUsQ0FBQyxrQkFBa0IsQ0FBQztBQUV6RCxnQkFBSyxDQUFDLHlCQUF5QixFQUFFLEdBQVMsRUFBRTtJQUUxQyxNQUFNLG9CQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBUyxFQUFFO1FBQzlDLE1BQU0sb0JBQU8sQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUN4RSxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQ3ZELGdCQUFnQixDQUFDLENBQUM7SUFDdEIsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFHSCxlQUFJLENBQUMsNkNBQTZDLEVBQUUsR0FBUyxFQUFFO0lBQzVELG9FQUFvRTtJQUNwRSxNQUFNLG9CQUFPLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUMsTUFBTSxFQUFFLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQzdCLE1BQU0sRUFBRSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ2hELE1BQU0sRUFBRSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzdDLE1BQU0sRUFBRSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzlDLE1BQU0sRUFBRSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzlDLE1BQU0sRUFBRSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3hDLE1BQU0sRUFBRSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ2hELE1BQU0sRUFBRSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUUxQixNQUFNLG9CQUFPLENBQUMsZUFBRSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUVyRSxNQUFNLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7SUFFdEIsTUFBTSxvQkFBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUU5QixDQUFDLENBQUEsQ0FBQyxDQUFDO0FBR0gsZUFBSSxDQUFDLHVDQUF1QyxFQUFFLEdBQVMsRUFBRTtJQUN2RCxPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixHQUFHLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUN4RCxFQUFFLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNuQyxNQUFNLEVBQUUsQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDN0IsTUFBTSxvQkFBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUM3QixDQUFDLENBQUEsQ0FBQyxDQUFDIn0=