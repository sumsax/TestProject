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
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const fs1 = require('fs');
const objectFIle = fs1.readFileSync('./objectRepo/objectRepository.json');
const objectjson = JSON.parse(objectFIle);
var objectLocator = objectjson.firstname;
console.log("Reading Locator 111111111111111111 : " + objectLocator);
class angularHomePage {
    constructor() {
        this.selectDropdownbyNum = function (element, optionNum) {
            if (optionNum) {
                var options = element.all(protractor_1.by.tagName('option'))
                    .then(function (options) {
                    options[optionNum].click();
                });
            }
        };
        this.addUserLink = protractor_1.element(protractor_1.by.xpath(objectjson.adduser));
        this.search = protractor_1.element(protractor_1.by.css("objectjson.firstname"));
        this.firstName = protractor_1.element(protractor_1.by.css(objectjson.firstname));
        this.lasName = protractor_1.element(protractor_1.by.css(objectjson.lastname));
        this.userName = protractor_1.element(protractor_1.by.css(objectjson.userName));
        this.password = protractor_1.element(protractor_1.by.css(objectjson.password));
        this.mobile = protractor_1.element(protractor_1.by.css(objectjson.mobilenumber));
        this.email = protractor_1.element(protractor_1.by.css(objectjson.email));
        this.save = protractor_1.element(protractor_1.by.xpath(objectjson.savebutton));
        //  this.role=element(by.options("c.Value as c.Text for c in column.options"));
        // this.role=element.all(by.css());
        this.customer = protractor_1.element(protractor_1.by.css("input[type='radio']"));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhckhvbWVQYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vcGFnZU9iamVjdHMvYW5ndWxhckhvbWVQYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsMkNBQW1GO0FBSW5GLE1BQU0sR0FBRyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUMxQixNQUFNLFVBQVUsR0FBRyxHQUFHLENBQUMsWUFBWSxDQUFDLG9DQUFvQyxDQUFDLENBQUM7QUFDMUUsTUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUUxQyxJQUFJLGFBQWEsR0FBRyxVQUFVLENBQUMsU0FBUyxDQUFDO0FBQ3pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUNBQXVDLEdBQUcsYUFBYSxDQUFDLENBQUM7QUFFckUsTUFBYSxlQUFlO0lBZXBCO1FBZ0NDLHdCQUFtQixHQUFHLFVBQVcsT0FBTyxFQUFFLFNBQVM7WUFDaEQsSUFBSSxTQUFTLEVBQUM7Z0JBQ1osSUFBSSxPQUFPLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFFLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO3FCQUM1QyxJQUFJLENBQUMsVUFBUyxPQUFPO29CQUNwQixPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7Z0JBQzdCLENBQUMsQ0FBQyxDQUFDO2FBQ047UUFDSCxDQUFDLENBQUM7UUFwQ0EsSUFBSSxDQUFDLFdBQVcsR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDdkQsSUFBSSxDQUFDLE1BQU0sR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxDQUFDO1FBQ3BELElBQUksQ0FBQyxTQUFTLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1FBQ3JELElBQUksQ0FBQyxPQUFPLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQ2xELElBQUksQ0FBQyxRQUFRLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxRQUFRLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxNQUFNLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO1FBQ3JELElBQUksQ0FBQyxLQUFLLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQzdDLElBQUksQ0FBQyxJQUFJLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1FBQ3JELCtFQUErRTtRQUM5RSxtQ0FBbUM7UUFDbEMsSUFBSSxDQUFDLFFBQVEsR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDO0lBRXpELENBQUM7SUFHSyxVQUFVLENBQUMsWUFBbUI7O1lBQ2xDLE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBUyxXQUFXLEVBQUUsS0FBSztnQkFFaEQsV0FBVyxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFnQixJQUFJOzt3QkFDM0MsSUFBRyxJQUFJLElBQUUsWUFBWSxFQUFDOzRCQUNuQixNQUFNLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQywyR0FBMkcsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7eUJBQy9JO29CQUVMLENBQUM7aUJBQUEsQ0FBQyxDQUFDO1lBQ0wsQ0FBQyxDQUFDLENBQUM7UUFFTCxDQUFDO0tBQUE7Q0FhTjtBQTFERCwwQ0EwREMifQ==