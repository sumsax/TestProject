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
const HomePage_1 = require("../pages/HomePage");
const UserManagementPage_1 = require("../pages/UserManagementPage");
const chai_1 = __importDefault(require("chai"));
const fileReader = require('fs');
const data = fileReader.readFileSync('./testData/data.json');
const testData = JSON.parse(data);
const objectFIle = fileReader.readFileSync('./object_Repo/objectRepository.json');
const objectJson = JSON.parse(objectFIle);
let dataVal = testData.env;
console.log("Reading Environment : " + dataVal);
let expect = chai_1.default.expect;
let ah = new HomePage_1.HomePage();
let um = new UserManagementPage_1.usermanagement();
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
}));
cucumber_1.When('User delete specified user from table', () => __awaiter(this, void 0, void 0, function* () {
    console.log("Deleted User is : " + testData.deleteUser);
    um.deleteuser(testData.deleteUser);
    yield um.crossokicon.click();
}));
cucumber_1.Then('User verify successfully added user in user management table', () => __awaiter(this, void 0, void 0, function* () {
    yield ah.verifyaddeduser(testData.username);
}));
cucumber_1.Then('User verify user deleted successfully', () => __awaiter(this, void 0, void 0, function* () {
    yield um.verifydeleteduser(testData.lastName);
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zdGVwRGVmaW5hdGlvbnMvc3RlcHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLHVDQUE2QztBQUM3QyxpRUFBaUU7QUFDakUsMkNBQThEO0FBQzlELGdEQUE2QztBQUM3QyxvRUFBNkQ7QUFDN0QsZ0RBQXdCO0FBR3hCLE1BQU0sVUFBVSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNqQyxNQUFNLElBQUksR0FBRyxVQUFVLENBQUMsWUFBWSxDQUFDLHNCQUFzQixDQUFDLENBQUM7QUFDN0QsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUdsQyxNQUFNLFVBQVUsR0FBRyxVQUFVLENBQUMsWUFBWSxDQUFDLHFDQUFxQyxDQUFDLENBQUM7QUFDbEYsTUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUUxQyxJQUFJLE9BQU8sR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDO0FBQzNCLE9BQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLEdBQUcsT0FBTyxDQUFDLENBQUM7QUFFaEQsSUFBSSxNQUFNLEdBQUcsY0FBSSxDQUFDLE1BQU0sQ0FBQztBQUV6QixJQUFJLEVBQUUsR0FBRyxJQUFJLG1CQUFRLEVBQUUsQ0FBQztBQUN4QixJQUFJLEVBQUUsR0FBRyxJQUFJLG1DQUFjLEVBQUUsQ0FBQztBQUM5QixNQUFNLGtCQUFrQixHQUFHLHVCQUFVLENBQUMsa0JBQWtCLENBQUM7QUFFekQsZ0JBQUssQ0FBQywyQ0FBMkMsRUFBRSxHQUFTLEVBQUU7SUFFNUQsTUFBTSxvQkFBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQVMsRUFBRTtRQUM5QyxNQUFNLG9CQUFPLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDeEUsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUN2RCxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ3RCLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUEsQ0FBQyxDQUFDO0FBR0gsZUFBSSxDQUFDLDZDQUE2QyxFQUFFLEdBQVMsRUFBRTtJQUU1RCxvRUFBb0U7SUFDcEUsTUFBTSxvQkFBTyxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFDLE1BQU0sRUFBRSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUM3QixNQUFNLEVBQUUsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNoRCxNQUFNLEVBQUUsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM3QyxNQUFNLEVBQUUsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM5QyxNQUFNLEVBQUUsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM5QyxNQUFNLEVBQUUsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN4QyxNQUFNLEVBQUUsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUNoRCxNQUFNLEVBQUUsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2pDLE1BQU0sb0JBQU8sQ0FBQyxlQUFFLENBQUMsaUJBQWlCLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBRXJFLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztBQUV6QixDQUFDLENBQUEsQ0FBQyxDQUFDO0FBR0gsZUFBSSxDQUFDLHVDQUF1QyxFQUFFLEdBQVMsRUFBRTtJQUV2RCxPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixHQUFHLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUN4RCxFQUFFLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNuQyxNQUFNLEVBQUUsQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLENBQUM7QUFDL0IsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUVILGVBQUksQ0FBQyw4REFBOEQsRUFBRSxHQUFTLEVBQUU7SUFFOUUsTUFBTSxFQUFFLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUM5QyxDQUFDLENBQUEsQ0FBQyxDQUFDO0FBRUgsZUFBSSxDQUFDLHVDQUF1QyxFQUFFLEdBQVMsRUFBRTtJQUV2RCxNQUFNLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDaEQsQ0FBQyxDQUFBLENBQUMsQ0FBQyJ9