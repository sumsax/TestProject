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
class usermanagement {
    constructor() {
        this.userList = protractor_1.element.all(protractor_1.by.xpath(objectjson.userlist));
        this.crossokicon = protractor_1.element(protractor_1.by.xpath(objectjson.okdeleteuser));
    }
    deleteuser(userLastName) {
        return __awaiter(this, void 0, void 0, function* () {
            let userinthelst = 0;
            yield this.userList.each(function (elementtest, index) {
                elementtest.getText().then(function (text) {
                    return __awaiter(this, void 0, void 0, function* () {
                        userinthelst++;
                        if (text == userLastName) {
                            console.log("Count when user met" + userinthelst);
                            yield protractor_1.element(protractor_1.by.xpath("//table[@table-title='Smart Table example']/tbody/tr[" + userinthelst + "]/td[11]//i[@class='icon icon-remove']")).click();
                        }
                    });
                });
            });
        });
    }
}
exports.usermanagement = usermanagement;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlck1hbmFnZW1lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9wYWdlT2JqZWN0cy91c2VyTWFuYWdlbWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsMkNBQW1GO0FBSW5GLE1BQU0sR0FBRyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUMxQixNQUFNLFVBQVUsR0FBRyxHQUFHLENBQUMsWUFBWSxDQUFDLG9DQUFvQyxDQUFDLENBQUM7QUFDMUUsTUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUUxQyxJQUFJLGFBQWEsR0FBRyxVQUFVLENBQUMsU0FBUyxDQUFDO0FBRXpDLE1BQWEsY0FBYztJQUtuQjtRQUVJLElBQUksQ0FBQyxRQUFRLEdBQUMsb0JBQU8sQ0FBQyxHQUFHLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsV0FBVyxHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztJQUNoRSxDQUFDO0lBRUksVUFBVSxDQUFDLFlBQW1COztZQUNwQyxJQUFJLFlBQVksR0FBQyxDQUFDLENBQUM7WUFDaEIsTUFBTSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFTLFdBQVcsRUFBRSxLQUFLO2dCQUVwRCxXQUFXLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQWdCLElBQUk7O3dCQUM3QyxZQUFZLEVBQUUsQ0FBQzt3QkFFYixJQUFHLElBQUksSUFBRSxZQUFZLEVBQUM7NEJBQ3BCLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLEdBQUMsWUFBWSxDQUFDLENBQUM7NEJBQ2hELE1BQU0sb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLHVEQUF1RCxHQUFHLFlBQVksR0FBRyx3Q0FBd0MsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7eUJBQ3BKO29CQUNMLENBQUM7aUJBQUEsQ0FBQyxDQUFDO1lBQ0wsQ0FBQyxDQUFDLENBQUM7UUFFTCxDQUFDO0tBQUE7Q0FDTjtBQTFCRCx3Q0EwQkMifQ==