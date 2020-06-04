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
const orJsonFile = fileReader.readFileSync('./object_repo/object_repository.json');
const orJsonObject = JSON.parse(orJsonFile);
/**
 * Class for User Management page and its supported functionality
 */
class UserManagementPage {
    constructor() {
        this.addUserLink = protractor_1.element(protractor_1.by.xpath(orJsonObject.adduser));
        this.searchuserbox = protractor_1.element(protractor_1.by.model(orJsonObject.searchbox));
        this.userList = protractor_1.element.all(protractor_1.by.xpath(orJsonObject.userlist));
        this.crossokicon = protractor_1.element(protractor_1.by.xpath(orJsonObject.okdeleteuser));
        this.fistUser = protractor_1.element(protractor_1.by.xpath(orJsonObject.firstuser));
        this.addeduserList = protractor_1.element.all(protractor_1.by.xpath(orJsonObject.addeduserlist));
    }
    clickOnAddUser() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.addUserLink.click();
        });
    }
    getAddUserLink() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.addUserLink;
        });
    }
    /**
     * deleting user as per given user name
     * @param userName
     */
    deleteuser(userName) {
        return __awaiter(this, void 0, void 0, function* () {
            let userinthelst = 0;
            yield this.userList.each((elementtest, index) => {
                elementtest.getText().then(function (text) {
                    return __awaiter(this, void 0, void 0, function* () {
                        userinthelst++;
                        if (text == userName) {
                            yield protractor_1.element(protractor_1.by.xpath("//table[@table-title='Smart Table example']/tbody/tr[" + userinthelst + "]/td[11]//i[@class='icon icon-remove']")).click();
                        }
                    });
                });
            });
        });
    }
    //verify deleted user should not be present in any of the row
    /**
    //  *
    //  * @param userLastName
    //  */
    // async verifydeleteduser(userLastName: string) {
    //   let userinthelst = 0;
    //   await this.userList.each(function (elementtest, index) {
    //     elementtest.getText().then(async function (text) {
    //       userinthelst++;
    //       if (text == userLastName) {
    //         console.log("User Not Deleted");
    //       }
    //       else {
    //         console.log("User Not Present in Row " + userinthelst);
    //       }
    //     });
    //   });
    // }
    /**
   * verify given user exsts on web-table
   * @param userName
   */
    verifyAddedUser(userName) {
        return __awaiter(this, void 0, void 0, function* () {
            let userPosInList = 0;
            yield this.addeduserList.each(function (currentUser, index) {
                currentUser.getText().then(function (displayUserName) {
                    return __awaiter(this, void 0, void 0, function* () {
                        userPosInList++;
                        if (displayUserName == userName) {
                            console.log("User Found at Row : " + userPosInList);
                            return true;
                        }
                    });
                });
            });
        });
    }
}
exports.UserManagementPage = UserManagementPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXNlck1hbmFnZW1lbnRQYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vcGFnZXMvVXNlck1hbmFnZW1lbnRQYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSwyQ0FBcUY7QUFJckYsTUFBTSxVQUFVLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ2pDLE1BQU0sVUFBVSxHQUFHLFVBQVUsQ0FBQyxZQUFZLENBQUMsc0NBQXNDLENBQUMsQ0FBQztBQUNuRixNQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBRTVDOztHQUVHO0FBQ0gsTUFBYSxrQkFBa0I7SUFVN0I7UUFDRSxJQUFJLENBQUMsV0FBVyxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUMzRCxJQUFJLENBQUMsYUFBYSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztRQUMvRCxJQUFJLENBQUMsUUFBUSxHQUFHLG9CQUFPLENBQUMsR0FBRyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDN0QsSUFBSSxDQUFDLFdBQVcsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7UUFDaEUsSUFBSSxDQUFDLFFBQVEsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7UUFDMUQsSUFBSSxDQUFDLGFBQWEsR0FBQyxvQkFBTyxDQUFDLEdBQUcsQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO0lBQ3ZFLENBQUM7SUFFSyxjQUFjOztZQUNsQixNQUFNLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDakMsQ0FBQztLQUFBO0lBRUssY0FBYzs7WUFDbEIsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQzFCLENBQUM7S0FBQTtJQUVEOzs7T0FHRztJQUNHLFVBQVUsQ0FBQyxRQUFnQjs7WUFDL0IsSUFBSSxZQUFZLEdBQUcsQ0FBQyxDQUFDO1lBQ3JCLE1BQU0sSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxXQUFXLEVBQUUsS0FBSyxFQUFFLEVBQUU7Z0JBRTlDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBZ0IsSUFBSTs7d0JBQzdDLFlBQVksRUFBRSxDQUFDO3dCQUNmLElBQUksSUFBSSxJQUFJLFFBQVEsRUFBRTs0QkFFcEIsTUFBTSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsdURBQXVELEdBQUcsWUFBWSxHQUFHLHdDQUF3QyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQzt5QkFDcEo7b0JBQ0gsQ0FBQztpQkFBQSxDQUFDLENBQUM7WUFDTCxDQUFDLENBQUMsQ0FBQztRQUVMLENBQUM7S0FBQTtJQUVELDZEQUE2RDtJQUM3RDs7O1VBR007SUFDTixrREFBa0Q7SUFDbEQsMEJBQTBCO0lBQzFCLDZEQUE2RDtJQUU3RCx5REFBeUQ7SUFDekQsd0JBQXdCO0lBQ3hCLG9DQUFvQztJQUNwQywyQ0FBMkM7SUFDM0MsVUFBVTtJQUNWLGVBQWU7SUFDZixrRUFBa0U7SUFDbEUsVUFBVTtJQUNWLFVBQVU7SUFDVixRQUFRO0lBQ1IsSUFBSTtJQUVGOzs7S0FHQztJQUNHLGVBQWUsQ0FBQyxRQUFlOztZQUNuQyxJQUFJLGFBQWEsR0FBRyxDQUFDLENBQUM7WUFDbEIsTUFBTSxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxVQUFTLFdBQVcsRUFBRSxLQUFLO2dCQUNyRCxXQUFXLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQWdCLGVBQWU7O3dCQUMxRCxhQUFhLEVBQUUsQ0FBQzt3QkFDaEIsSUFBRyxlQUFlLElBQUksUUFBUSxFQUFDOzRCQUM3QixPQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFzQixHQUFHLGFBQWEsQ0FBQyxDQUFDOzRCQUNwRCxPQUFPLElBQUksQ0FBQzt5QkFDYjtvQkFDTCxDQUFDO2lCQUFBLENBQUMsQ0FBQztZQUNMLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQztLQUFBO0NBQ0o7QUFuRkQsZ0RBbUZDIn0=