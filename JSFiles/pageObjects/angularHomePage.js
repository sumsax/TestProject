"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const fs1 = require('fs');
const objectFIle = fs1.readFileSync('./objectRepo/objectRepository.json');
const objectjson = JSON.parse(objectFIle);
var objectLocator = objectjson.firstname;
console.log("Reading Locator 111111111111111111 : " + objectLocator);
class angularHomePage {
    constructor() {
        this.addUserLink = protractor_1.element(protractor_1.by.xpath(objectjson.adduser));
        this.firstName = protractor_1.element(protractor_1.by.css(objectjson.firstname));
        this.lasName = protractor_1.element(protractor_1.by.css(objectjson.lastname));
        this.userName = protractor_1.element(protractor_1.by.css(objectjson.userName));
        this.password = protractor_1.element(protractor_1.by.css(objectjson.password));
        this.mobile = protractor_1.element(protractor_1.by.css(objectjson.mobilenumber));
        this.email = protractor_1.element(protractor_1.by.css(objectjson.email));
        this.save = protractor_1.element(protractor_1.by.xpath(objectjson.savebutton));
        //  this.role=element(by.options("c.Value as c.Text for c in column.options"));
        this.role = protractor_1.element(protractor_1.by.cssContainingText(objectjson.role, ""));
        this.customer = protractor_1.element(protractor_1.by.css(objectjson.customer));
    }
    deleteuser(userLastName) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.role.each(function (elementtest, index) {
                elementtest.getText().then(function (text) {
                    return __awaiter(this, void 0, void 0, function* () {
                        if (text == userLastName) {
                            yield protractor_1.element(protractor_1.by.xpath("//table[@table-title='Smart Table example']/tbody/tr[{userinthelst}]/td[11]//i[@class='icon icon-remove']")).click();
                        }
                    });
                });
            });
        });
    }
}
exports.angularHomePage = angularHomePage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhckhvbWVQYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vcGFnZU9iamVjdHMvYW5ndWxhckhvbWVQYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSwyQ0FBbUY7QUFJbkYsTUFBTSxHQUFHLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQzFCLE1BQU0sVUFBVSxHQUFHLEdBQUcsQ0FBQyxZQUFZLENBQUMsb0NBQW9DLENBQUMsQ0FBQztBQUMxRSxNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBRTFDLElBQUksYUFBYSxHQUFHLFVBQVUsQ0FBQyxTQUFTLENBQUM7QUFDekMsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1Q0FBdUMsR0FBRyxhQUFhLENBQUMsQ0FBQztBQUVyRSxNQUFhLGVBQWU7SUFlcEI7UUFHSSxJQUFJLENBQUMsV0FBVyxHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUN2RCxJQUFJLENBQUMsU0FBUyxHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztRQUNyRCxJQUFJLENBQUMsT0FBTyxHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUNsRCxJQUFJLENBQUMsUUFBUSxHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUNuRCxJQUFJLENBQUMsUUFBUSxHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUNuRCxJQUFJLENBQUMsTUFBTSxHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztRQUNyRCxJQUFJLENBQUMsS0FBSyxHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUM3QyxJQUFJLENBQUMsSUFBSSxHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztRQUNyRCwrRUFBK0U7UUFDN0UsSUFBSSxDQUFDLElBQUksR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDNUQsSUFBSSxDQUFDLFFBQVEsR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFFdkQsQ0FBQztJQUdLLFVBQVUsQ0FBQyxZQUFtQjs7WUFDbEMsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFTLFdBQVcsRUFBRSxLQUFLO2dCQUVoRCxXQUFXLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQWdCLElBQUk7O3dCQUMzQyxJQUFHLElBQUksSUFBRSxZQUFZLEVBQUM7NEJBQ25CLE1BQU0sb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLDJHQUEyRyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQzt5QkFDL0k7b0JBRUwsQ0FBQztpQkFBQSxDQUFDLENBQUM7WUFDTCxDQUFDLENBQUMsQ0FBQztRQUVMLENBQUM7S0FBQTtDQUVOO0FBOUNELDBDQThDQyJ9