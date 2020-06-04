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
const protractor_1 = require("protractor");
const AddUserPage_1 = require("../pages/AddUserPage");
const UserManagementPage_1 = require("../pages/UserManagementPage");
const chai_1 = __importDefault(require("chai"));
const fileReader = require('fs');
const data = fileReader.readFileSync('./testData/data.json');
const testData = JSON.parse(data);
const orJsonFile = fileReader.readFileSync('./object_repo/object_repository.json');
const orJsonObject = JSON.parse(orJsonFile);
const envJsonFile = fileReader.readFileSync('./environment.json');
const envJsonObject = JSON.parse(envJsonFile);
let expect = chai_1.default.expect;
let addUserPage = new AddUserPage_1.AddUserPage();
let userManagementPage = new UserManagementPage_1.UserManagementPage();
const expectedConditions = protractor_1.protractor.ExpectedConditions;
cucumber_1.Given('Admin user landed on user management page', () => __awaiter(this, void 0, void 0, function* () {
    yield protractor_1.browser.get(envJsonObject.env).then(() => __awaiter(this, void 0, void 0, function* () {
        // browser.wait(expectedConditions.visibilityOf(userManagementPage.getAddUserLink()), 60);
        // expect(await userManagementPage.getAddUserLink().isDisplayed()).to.equals(true,
        //   "CLick Add User");
        protractor_1.browser.sleep(10000);
    }));
}));
cucumber_1.When('Add new User with all the details on Add User Form', () => __awaiter(this, void 0, void 0, function* () {
    yield userManagementPage.clickOnAddUser();
    yield addUserPage.addUser();
}));
cucumber_1.Then('Verify user added successfully on web table', () => __awaiter(this, void 0, void 0, function* () {
    yield userManagementPage.verifyAddedUser(testData.username);
}));
cucumber_1.When('Delete specified user i.e. {string} from table', (userName) => __awaiter(this, void 0, void 0, function* () {
    // userManagementPage.deleteuser(userName);
    // await userManagementPage.crossokicon.click();
    // console.log("Deleted User is : " + testData.deleteUser);
}));
cucumber_1.Then('Verify user {string} deleted successfully', (userName) => __awaiter(this, void 0, void 0, function* () {
    // await userManagementPage.verifydeleteduser(userName);
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zdGVwRGVmaW5hdGlvbnMvc3RlcHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLHVDQUE2QztBQUM3QywyQ0FBOEQ7QUFDOUQsc0RBQW1EO0FBQ25ELG9FQUFpRTtBQUNqRSxnREFBd0I7QUFHeEIsTUFBTSxVQUFVLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ2pDLE1BQU0sSUFBSSxHQUFHLFVBQVUsQ0FBQyxZQUFZLENBQUMsc0JBQXNCLENBQUMsQ0FBQztBQUM3RCxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBRWxDLE1BQU0sVUFBVSxHQUFHLFVBQVUsQ0FBQyxZQUFZLENBQUMsc0NBQXNDLENBQUMsQ0FBQztBQUNuRixNQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBRTVDLE1BQU0sV0FBVyxHQUFHLFVBQVUsQ0FBQyxZQUFZLENBQUMsb0JBQW9CLENBQUMsQ0FBQztBQUNsRSxNQUFNLGFBQWEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBRTlDLElBQUksTUFBTSxHQUFHLGNBQUksQ0FBQyxNQUFNLENBQUM7QUFFekIsSUFBSSxXQUFXLEdBQUcsSUFBSSx5QkFBVyxFQUFFLENBQUM7QUFDcEMsSUFBSSxrQkFBa0IsR0FBRyxJQUFJLHVDQUFrQixFQUFFLENBQUM7QUFDbEQsTUFBTSxrQkFBa0IsR0FBRyx1QkFBVSxDQUFDLGtCQUFrQixDQUFDO0FBRXpELGdCQUFLLENBQUMsMkNBQTJDLEVBQUUsR0FBUyxFQUFFO0lBRTVELE1BQU0sb0JBQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFTLEVBQUU7UUFDbkQsMEZBQTBGO1FBQzFGLGtGQUFrRjtRQUNsRix1QkFBdUI7UUFDdkIsb0JBQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdkIsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFHSCxlQUFJLENBQUMsb0RBQW9ELEVBQUUsR0FBUyxFQUFFO0lBQ3BFLE1BQU0sa0JBQWtCLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDMUMsTUFBTSxXQUFXLENBQUMsT0FBTyxFQUFFLENBQUM7QUFDOUIsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUVILGVBQUksQ0FBQyw2Q0FBNkMsRUFBRSxHQUFTLEVBQUU7SUFDN0QsTUFBTSxrQkFBa0IsQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQzlELENBQUMsQ0FBQSxDQUFDLENBQUM7QUFFSCxlQUFJLENBQUMsZ0RBQWdELEVBQUUsQ0FBTyxRQUFRLEVBQUUsRUFBRTtJQUN4RSwyQ0FBMkM7SUFDM0MsZ0RBQWdEO0lBQ2hELDJEQUEyRDtBQUM3RCxDQUFDLENBQUEsQ0FBQyxDQUFDO0FBRUgsZUFBSSxDQUFDLDJDQUEyQyxFQUFFLENBQU8sUUFBUSxFQUFFLEVBQUU7SUFDbkUsd0RBQXdEO0FBQzFELENBQUMsQ0FBQSxDQUFDLENBQUMifQ==