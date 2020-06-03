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
var userinthelst = 0;
var objectLocator = objectjson.firstname;
console.log("Reading Locator 111111111111111111 : " + objectLocator);
class usermanagement {
    constructor() {
        this.userList = protractor_1.element.all(protractor_1.by.xpath(objectjson.userlist));
    }
    deleteuser(userLastName) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.userList.each(function (elementtest, index) {
                userinthelst++;
                console.log("User Number to be deleted 333333333" + userinthelst);
                elementtest.getText().then(function (text) {
                    return __awaiter(this, void 0, void 0, function* () {
                        console.log("44444444444444444444" + userLastName);
                        if (text == userLastName) {
                            console.log("555555555555555" + userLastName);
                            yield protractor_1.element(protractor_1.by.xpath("//table[@table-title='Smart Table example']/tbody/tr[" + userinthelst + "]/td[11]//i[@class='icon icon-remove']")).click();
                        }
                    });
                });
            });
        });
    }
}
exports.usermanagement = usermanagement;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlck1hbmFnZW1lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9wYWdlT2JqZWN0cy91c2VyTWFuYWdlbWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLDJDQUFtRjtBQUluRixNQUFNLEdBQUcsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDMUIsTUFBTSxVQUFVLEdBQUcsR0FBRyxDQUFDLFlBQVksQ0FBQyxvQ0FBb0MsQ0FBQyxDQUFDO0FBQzFFLE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDMUMsSUFBSSxZQUFZLEdBQUMsQ0FBQyxDQUFDO0FBQ25CLElBQUksYUFBYSxHQUFHLFVBQVUsQ0FBQyxTQUFTLENBQUM7QUFDekMsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1Q0FBdUMsR0FBRyxhQUFhLENBQUMsQ0FBQztBQUVyRSxNQUFhLGNBQWM7SUFJbkI7UUFFSSxJQUFJLENBQUMsUUFBUSxHQUFDLG9CQUFPLENBQUMsR0FBRyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFDN0QsQ0FBQztJQUVJLFVBQVUsQ0FBQyxZQUFtQjs7WUFDakMsTUFBTSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFTLFdBQVcsRUFBRSxLQUFLO2dCQUNwRCxZQUFZLEVBQUUsQ0FBQztnQkFDZixPQUFPLENBQUMsR0FBRyxDQUFDLHFDQUFxQyxHQUFHLFlBQVksQ0FBQyxDQUFDO2dCQUNsRSxXQUFXLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQWdCLElBQUk7O3dCQUM3QyxPQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFzQixHQUFHLFlBQVksQ0FBQyxDQUFDO3dCQUNqRCxJQUFHLElBQUksSUFBRSxZQUFZLEVBQUM7NEJBQ3BCLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEdBQUcsWUFBWSxDQUFDLENBQUM7NEJBQzdDLE1BQU0sb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLHVEQUF1RCxHQUFHLFlBQVksR0FBRyx3Q0FBd0MsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7eUJBQ3JKO29CQUVMLENBQUM7aUJBQUEsQ0FBQyxDQUFDO1lBQ0wsQ0FBQyxDQUFDLENBQUM7UUFFTCxDQUFDO0tBQUE7Q0FDTjtBQXhCRCx3Q0F3QkMifQ==