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
                            yield protractor_1.element(protractor_1.by.xpath("//table[@table-title='Smart Table example']/tbody/tr[" + userinthelst + "]/td[11]//i[@class='icon icon-remove']")).click();
                        }
                    });
                });
            });
        });
    }
    verifydeleteduser(userLastName) {
        return __awaiter(this, void 0, void 0, function* () {
            let userinthelst = 0;
            yield this.userList.each(function (elementtest, index) {
                elementtest.getText().then(function (text) {
                    return __awaiter(this, void 0, void 0, function* () {
                        userinthelst++;
                        if (text == userLastName) {
                            console.log("User Not Deleted");
                        }
                        else {
                            console.log("User Deleted Successfully");
                        }
                    });
                });
            });
        });
    }
}
exports.usermanagement = usermanagement;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlck1hbmFnZW1lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9wYWdlT2JqZWN0cy91c2VyTWFuYWdlbWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLDJDQUFtRjtBQUluRixNQUFNLEdBQUcsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDMUIsTUFBTSxVQUFVLEdBQUcsR0FBRyxDQUFDLFlBQVksQ0FBQyxvQ0FBb0MsQ0FBQyxDQUFDO0FBQzFFLE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUM7QUFFMUMsSUFBSSxhQUFhLEdBQUcsVUFBVSxDQUFDLFNBQVMsQ0FBQztBQUV6QyxNQUFhLGNBQWM7SUFLbkI7UUFFSSxJQUFJLENBQUMsUUFBUSxHQUFDLG9CQUFPLENBQUMsR0FBRyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDekQsSUFBSSxDQUFDLFdBQVcsR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7SUFDaEUsQ0FBQztJQUVJLFVBQVUsQ0FBQyxZQUFtQjs7WUFDcEMsSUFBSSxZQUFZLEdBQUMsQ0FBQyxDQUFDO1lBQ2hCLE1BQU0sSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBUyxXQUFXLEVBQUUsS0FBSztnQkFFcEQsV0FBVyxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFnQixJQUFJOzt3QkFDN0MsWUFBWSxFQUFFLENBQUM7d0JBRWIsSUFBRyxJQUFJLElBQUUsWUFBWSxFQUFDOzRCQUVwQixNQUFNLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyx1REFBdUQsR0FBRyxZQUFZLEdBQUcsd0NBQXdDLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO3lCQUNwSjtvQkFDTCxDQUFDO2lCQUFBLENBQUMsQ0FBQztZQUNMLENBQUMsQ0FBQyxDQUFDO1FBRUwsQ0FBQztLQUFBO0lBRUssaUJBQWlCLENBQUMsWUFBbUI7O1lBQ3pDLElBQUksWUFBWSxHQUFDLENBQUMsQ0FBQztZQUNoQixNQUFNLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVMsV0FBVyxFQUFFLEtBQUs7Z0JBRXBELFdBQVcsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBZ0IsSUFBSTs7d0JBQzdDLFlBQVksRUFBRSxDQUFDO3dCQUViLElBQUcsSUFBSSxJQUFFLFlBQVksRUFBQzs0QkFDcEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO3lCQUNqQzs2QkFDRzs0QkFDRixPQUFPLENBQUMsR0FBRyxDQUFDLDJCQUEyQixDQUFDLENBQUM7eUJBQzFDO29CQUNMLENBQUM7aUJBQUEsQ0FBQyxDQUFDO1lBQ0wsQ0FBQyxDQUFDLENBQUM7UUFFTCxDQUFDO0tBQUE7Q0FDUDtBQTVDRCx3Q0E0Q0MifQ==