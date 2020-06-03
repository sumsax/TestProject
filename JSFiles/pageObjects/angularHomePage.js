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
let expect = chai_1.default.expect;
const filereader = require('fs');
const objectFile = filereader.readFileSync('./objectRepo/objectRepository.json');
//Caps j 
const objectJson = JSON.parse(objectFile);
const data = filereader.readFileSync('./testData/data.json');
const testData = JSON.parse(data);
var objectLocator = objectJson.firstname;
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
    verifyAddedUser(firstname) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.searchuserbox.sendKeys(firstname);
                yield protractor_1.browser.sleep(20000);
                yield expect(this.fistUser.getText()).toEqual(firstname);
            }
            catch (err) {
                //console.log(err);
            }
        });
    }
}
exports.HomePage = HomePage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhckhvbWVQYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vcGFnZU9iamVjdHMvYW5ndWxhckhvbWVQYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBbUY7QUFFbkYsZ0RBQXdCO0FBR3hCLElBQUksTUFBTSxHQUFHLGNBQUksQ0FBQyxNQUFNLENBQUM7QUFFekIsTUFBTSxVQUFVLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ2pDLE1BQU0sVUFBVSxHQUFHLFVBQVUsQ0FBQyxZQUFZLENBQUMsb0NBQW9DLENBQUMsQ0FBQztBQUNqRixTQUFTO0FBQ1QsTUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUUxQyxNQUFNLElBQUksR0FBRyxVQUFVLENBQUMsWUFBWSxDQUFDLHNCQUFzQixDQUFDLENBQUM7QUFDN0QsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUVsQyxJQUFJLGFBQWEsR0FBRyxVQUFVLENBQUMsU0FBUyxDQUFDO0FBRXpDLCtEQUErRDtBQUMvRCxNQUFhLFFBQVE7SUFpQmI7UUFFSSxJQUFJLENBQUMsV0FBVyxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsU0FBUyxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztRQUN2RCxJQUFJLENBQUMsYUFBYSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztRQUM3RCxJQUFJLENBQUMsT0FBTyxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUNwRCxJQUFJLENBQUMsUUFBUSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUNyRCxJQUFJLENBQUMsUUFBUSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUNyRCxJQUFJLENBQUMsTUFBTSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztRQUN2RCxJQUFJLENBQUMsS0FBSyxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUMvQyxJQUFJLENBQUMsSUFBSSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztRQUNyRCxJQUFJLENBQUMsSUFBSSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDekUsSUFBSSxDQUFDLFFBQVEsR0FBRyxvQkFBTyxDQUFDLEdBQUcsQ0FBQyxlQUFFLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQzlELElBQUksQ0FBQyxRQUFRLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO0lBRTVELENBQUM7SUFFRyxlQUFlLENBQUMsU0FBZ0I7O1lBRWhDLElBQUc7Z0JBRUQsTUFBTSxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQztnQkFDN0MsTUFBTSxvQkFBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDM0IsTUFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQzthQUMxRDtZQUFBLE9BQU0sR0FBRyxFQUFDO2dCQUNULG1CQUFtQjthQUNwQjtRQUVQLENBQUM7S0FBQTtDQUNOO0FBOUNELDRCQThDQyJ9