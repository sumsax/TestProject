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
const protractor_1 = require("protractor");
const chai_1 = __importDefault(require("chai"));
var expect = chai_1.default.expect;
const filereader = require('fs');
const objectFile = filereader.readFileSync('./object_Repo/objectRepository.json');
const objectJson = JSON.parse(objectFile);
const data = filereader.readFileSync('./testData/data.json');
const testData = JSON.parse(data);
//Class to initial add user and verify added user functionality
class HomePage {
    constructor() {
        this.addUserLink = protractor_1.element(protractor_1.by.xpath(objectJson.adduser));
        this.firstName = protractor_1.element(protractor_1.by.css(objectJson.firstname));
        this.searchuserbox = protractor_1.element(protractor_1.by.model(objectJson.searchbox));
        this.lasName = protractor_1.element(protractor_1.by.css(objectJson.lastname));
        this.userName = protractor_1.element(protractor_1.by.css(objectJson.userName));
        this.password = protractor_1.element(protractor_1.by.css(objectJson.password));
        this.mobile = protractor_1.element(protractor_1.by.css(objectJson.mobilenumber));
        this.email = protractor_1.element(protractor_1.by.css(objectJson.email));
        this.save = protractor_1.element(protractor_1.by.xpath(objectJson.savebutton));
        this.role = protractor_1.element(protractor_1.by.cssContainingText(objectJson.role, testData.role));
        this.customer = protractor_1.element.all(protractor_1.by.repeater(objectJson.customer));
        this.fistUser = protractor_1.element(protractor_1.by.xpath(objectJson.firstuser));
    }
    //verify added user after searching  
    verifyAddedUser(firstname) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield protractor_1.browser.sleep(2000);
                yield this.searchuserbox.sendKeys(firstname);
                console.log("first user after search" + this.fistUser.getText());
                expect(yield this.fistUser.getText()).to.equals(firstname);
            }
            catch (err) {
                console.log(err);
            }
        });
    }
}
exports.HomePage = HomePage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSG9tZVBhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9wYWdlcy9Ib21lUGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEsMkNBQW1GO0FBRW5GLGdEQUF3QjtBQUV4QixJQUFJLE1BQU0sR0FBRyxjQUFJLENBQUMsTUFBTSxDQUFDO0FBQ3pCLE1BQU0sVUFBVSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNqQyxNQUFNLFVBQVUsR0FBRyxVQUFVLENBQUMsWUFBWSxDQUFDLHFDQUFxQyxDQUFDLENBQUM7QUFFbEYsTUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUMxQyxNQUFNLElBQUksR0FBRyxVQUFVLENBQUMsWUFBWSxDQUFDLHNCQUFzQixDQUFDLENBQUM7QUFDN0QsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUdsQywrREFBK0Q7QUFDL0QsTUFBYSxRQUFRO0lBaUJiO1FBRUksSUFBSSxDQUFDLFdBQVcsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDekQsSUFBSSxDQUFDLFNBQVMsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7UUFDdkQsSUFBSSxDQUFDLGFBQWEsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7UUFDN0QsSUFBSSxDQUFDLE9BQU8sR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDcEQsSUFBSSxDQUFDLFFBQVEsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDckQsSUFBSSxDQUFDLFFBQVEsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDckQsSUFBSSxDQUFDLE1BQU0sR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7UUFDdkQsSUFBSSxDQUFDLEtBQUssR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLElBQUksR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7UUFDckQsSUFBSSxDQUFDLElBQUksR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ3pFLElBQUksQ0FBQyxRQUFRLEdBQUcsb0JBQU8sQ0FBQyxHQUFHLENBQUMsZUFBRSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUM5RCxJQUFJLENBQUMsUUFBUSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztJQUU1RCxDQUFDO0lBR0gscUNBQXFDO0lBQy9CLGVBQWUsQ0FBQyxTQUFnQjs7WUFFcEMsSUFBRztnQkFDQyxNQUFNLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUMxQixNQUFNLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUM3QyxPQUFPLENBQUMsR0FBRyxDQUFDLHlCQUF5QixHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztnQkFDakUsTUFBTSxDQUFDLE1BQU0sSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7YUFDMUQ7WUFBQSxPQUFNLEdBQUcsRUFBQztnQkFDVCxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQ2xCO1FBRVAsQ0FBQztLQUFBO0NBQ047QUFoREQsNEJBZ0RDIn0=