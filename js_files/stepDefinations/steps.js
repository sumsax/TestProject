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
const protractor_1 = require("protractor");
const AddUserPage_1 = require("../pages/AddUserPage");
const UserManagementPage_1 = require("../pages/UserManagementPage");
const chai_1 = __importDefault(require("chai"));
// read json for test-data and environment properties
const fileReader = require('fs');
const data = fileReader.readFileSync('./testData/data.json');
const testData = JSON.parse(data);
const envJsonFile = fileReader.readFileSync('./environment.json');
const envJsonObject = JSON.parse(envJsonFile);
// page object reference
let addUserPage = new AddUserPage_1.AddUserPage();
let userManagementPage = new UserManagementPage_1.UserManagementPage();
const expectedConditions = protractor_1.protractor.ExpectedConditions;
let expect = chai_1.default.expect;
cucumber_1.Given('User landed on user management page', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.get(envJsonObject.env).then(() => __awaiter(void 0, void 0, void 0, function* () {
        protractor_1.browser.wait(expectedConditions.visibilityOf(userManagementPage.addUserLink), 60);
        expect(yield userManagementPage.addUserLink.isDisplayed()).to.equals(true, "CLick Add User");
    }));
}));
cucumber_1.When('Add new User with all the details on Add User Form', () => __awaiter(void 0, void 0, void 0, function* () {
    yield userManagementPage.clickOnAddUser();
    yield addUserPage.addUser();
}));
cucumber_1.Then('Verify user added successfully on web table', () => __awaiter(void 0, void 0, void 0, function* () {
    yield userManagementPage.getUserRecordPosition(testData.username).then((pos) => {
        expect(pos).to.not.equals(-1, "User not added");
    });
}));
cucumber_1.When('Delete specified user i.e. {string} from table', (userName) => __awaiter(void 0, void 0, void 0, function* () {
    yield userManagementPage.deleteUser(userName);
}));
cucumber_1.Then('Verify user {string} deleted successfully', (userName) => __awaiter(void 0, void 0, void 0, function* () {
    yield userManagementPage.getUserRecordPosition(userName).then((pos) => {
        expect(pos).to.equals(-1, "User not deleted");
    });
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zdGVwRGVmaW5hdGlvbnMvc3RlcHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1Q0FBNkM7QUFDN0MsMkNBQThEO0FBQzlELHNEQUFtRDtBQUNuRCxvRUFBaUU7QUFDakUsZ0RBQXdCO0FBR3hCLHFEQUFxRDtBQUNyRCxNQUFNLFVBQVUsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDakMsTUFBTSxJQUFJLEdBQUcsVUFBVSxDQUFDLFlBQVksQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0FBQzdELE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7QUFFbEMsTUFBTSxXQUFXLEdBQUcsVUFBVSxDQUFDLFlBQVksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0FBQ2xFLE1BQU0sYUFBYSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUM7QUFFOUMsd0JBQXdCO0FBQ3hCLElBQUksV0FBVyxHQUFHLElBQUkseUJBQVcsRUFBRSxDQUFDO0FBQ3BDLElBQUksa0JBQWtCLEdBQUcsSUFBSSx1Q0FBa0IsRUFBRSxDQUFDO0FBRWxELE1BQU0sa0JBQWtCLEdBQUcsdUJBQVUsQ0FBQyxrQkFBa0IsQ0FBQztBQUN6RCxJQUFJLE1BQU0sR0FBRyxjQUFJLENBQUMsTUFBTSxDQUFDO0FBRXpCLGdCQUFLLENBQUMscUNBQXFDLEVBQUUsR0FBUyxFQUFFO0lBRXRELE1BQU0sb0JBQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFTLEVBQUU7UUFDbkQsb0JBQU8sQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsWUFBWSxDQUFDLGtCQUFrQixDQUFDLFdBQVcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ2xGLE1BQU0sQ0FBQyxNQUFNLGtCQUFrQixDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUN2RSxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ3RCLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUEsQ0FBQyxDQUFDO0FBRUgsZUFBSSxDQUFDLG9EQUFvRCxFQUFFLEdBQVMsRUFBRTtJQUNwRSxNQUFNLGtCQUFrQixDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQzFDLE1BQU0sV0FBVyxDQUFDLE9BQU8sRUFBRSxDQUFDO0FBQzlCLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFFSCxlQUFJLENBQUMsNkNBQTZDLEVBQUUsR0FBUyxFQUFFO0lBQzdELE1BQU0sa0JBQWtCLENBQUMscUJBQXFCLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFO1FBQzdFLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ2xELENBQUMsQ0FBQyxDQUFBO0FBQ0osQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUVILGVBQUksQ0FBQyxnREFBZ0QsRUFBRSxDQUFPLFFBQVEsRUFBRSxFQUFFO0lBQ3hFLE1BQU0sa0JBQWtCLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ2hELENBQUMsQ0FBQSxDQUFDLENBQUM7QUFFSCxlQUFJLENBQUMsMkNBQTJDLEVBQUUsQ0FBTyxRQUFRLEVBQUUsRUFBRTtJQUNuRSxNQUFNLGtCQUFrQixDQUFDLHFCQUFxQixDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFO1FBQ3BFLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLGtCQUFrQixDQUFDLENBQUM7SUFDaEQsQ0FBQyxDQUFDLENBQUE7QUFDSixDQUFDLENBQUEsQ0FBQyxDQUFDIn0=