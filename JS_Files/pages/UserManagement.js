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
const fileReader = require('fs');
const objectFIle = fileReader.readFileSync('./object_Repo/objectRepository.json');
const objectJson = JSON.parse(objectFIle);
//class to delete and verify user deletion
class usermanagement {
    constructor() {
        this.userList = protractor_1.element.all(protractor_1.by.xpath(objectJson.userlist));
        this.crossokicon = protractor_1.element(protractor_1.by.xpath(objectJson.okdeleteuser));
    }
    //deleting user as per given name 
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
    //verify deleted user should not be present in any of the row
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXNlck1hbmFnZW1lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9wYWdlcy9Vc2VyTWFuYWdlbWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsMkNBQW1GO0FBSW5GLE1BQU0sVUFBVSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNqQyxNQUFNLFVBQVUsR0FBRyxVQUFVLENBQUMsWUFBWSxDQUFDLHFDQUFxQyxDQUFDLENBQUM7QUFDbEYsTUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUcxQywwQ0FBMEM7QUFDMUMsTUFBYSxjQUFjO0lBSW5CO1FBRUksSUFBSSxDQUFDLFFBQVEsR0FBQyxvQkFBTyxDQUFDLEdBQUcsQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQ3pELElBQUksQ0FBQyxXQUFXLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7SUFHRixrQ0FBa0M7SUFDNUIsVUFBVSxDQUFDLFlBQW1COztZQUNwQyxJQUFJLFlBQVksR0FBQyxDQUFDLENBQUM7WUFDaEIsTUFBTSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFTLFdBQVcsRUFBRSxLQUFLO2dCQUVwRCxXQUFXLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQWdCLElBQUk7O3dCQUM3QyxZQUFZLEVBQUUsQ0FBQzt3QkFFYixJQUFHLElBQUksSUFBRSxZQUFZLEVBQUM7NEJBRXBCLE1BQU0sb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLHVEQUF1RCxHQUFHLFlBQVksR0FBRyx3Q0FBd0MsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7eUJBQ3BKO29CQUNMLENBQUM7aUJBQUEsQ0FBQyxDQUFDO1lBQ0wsQ0FBQyxDQUFDLENBQUM7UUFFTCxDQUFDO0tBQUE7SUFHRCw2REFBNkQ7SUFDdkQsaUJBQWlCLENBQUMsWUFBbUI7O1lBQ3pDLElBQUksWUFBWSxHQUFDLENBQUMsQ0FBQztZQUNoQixNQUFNLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVMsV0FBVyxFQUFFLEtBQUs7Z0JBRXBELFdBQVcsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBZ0IsSUFBSTs7d0JBQzdDLFlBQVksRUFBRSxDQUFDO3dCQUViLElBQUcsSUFBSSxJQUFFLFlBQVksRUFBQzs0QkFDcEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO3lCQUNqQzs2QkFDRzs0QkFDRixPQUFPLENBQUMsR0FBRyxDQUFDLDJCQUEyQixDQUFDLENBQUM7eUJBQzFDO29CQUNMLENBQUM7aUJBQUEsQ0FBQyxDQUFDO1lBQ0wsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDO0tBQUE7Q0FDUDtBQTlDRCx3Q0E4Q0MifQ==