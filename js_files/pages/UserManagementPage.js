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
const fileReader = require('fs');
const orJsonFile = fileReader.readFileSync('./object_repo/object_repository.json');
const orJsonObject = JSON.parse(orJsonFile);
/**
 * Class for User Management page and its supported functionality
 */
class UserManagementPage {
    /**
     *  cnstructor to initiaize the element
     */
    constructor() {
        this.addUserLink = protractor_1.element(protractor_1.by.xpath(orJsonObject.adduser));
        this.userList = protractor_1.element.all(protractor_1.by.repeater(orJsonObject.userlist));
        this.deleteConfirmation = protractor_1.element(protractor_1.by.xpath(orJsonObject.deleteConfirmation));
    }
    get addUserLink() {
        return this._addUserLink;
    }
    set addUserLink(value) {
        this._addUserLink = value;
    }
    clickOnAddUser() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this._addUserLink.click();
        });
    }
    /**
     * deleting user as per given user name
     * @param userName
     */
    deleteUser(userName) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getUserRecordPosition(userName).then((pos) => __awaiter(this, void 0, void 0, function* () {
                yield this.userList.get(pos - 1).element(protractor_1.by.className("icon icon-remove")).click().then(() => __awaiter(this, void 0, void 0, function* () {
                    yield this.deleteConfirmation.click().then(() => {
                        console.log("User deleted: " + userName);
                    });
                }));
            }));
        });
    }
    /**
    * get the current user position on web-table
    * @param userName
    */
    getUserRecordPosition(userName) {
        return __awaiter(this, void 0, void 0, function* () {
            let userPosInList = -1;
            yield this.userList.each(function (currentUser, index) {
                return __awaiter(this, void 0, void 0, function* () {
                    const cells = currentUser.all(protractor_1.by.css("td"));
                    yield cells.get(2).getText().then(function (displayUserName) {
                        return __awaiter(this, void 0, void 0, function* () {
                            if (displayUserName == userName) {
                                console.log("User Found at Row : " + (index + 1));
                                userPosInList = (index + 1);
                                return;
                            }
                        });
                    });
                });
            });
            return userPosInList;
        });
    }
}
exports.UserManagementPage = UserManagementPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXNlck1hbmFnZW1lbnRQYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vcGFnZXMvVXNlck1hbmFnZW1lbnRQYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsMkNBQXFGO0FBS3JGLE1BQU0sVUFBVSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNqQyxNQUFNLFVBQVUsR0FBRyxVQUFVLENBQUMsWUFBWSxDQUFDLHNDQUFzQyxDQUFDLENBQUM7QUFDbkYsTUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUU1Qzs7R0FFRztBQUNILE1BQWEsa0JBQWtCO0lBSzdCOztPQUVHO0lBQ0g7UUFDRSxJQUFJLENBQUMsV0FBVyxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUMzRCxJQUFJLENBQUMsUUFBUSxHQUFHLG9CQUFPLENBQUMsR0FBRyxDQUFDLGVBQUUsQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDaEUsSUFBSSxDQUFDLGtCQUFrQixHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDO0lBQy9FLENBQUM7SUFFRCxJQUFXLFdBQVc7UUFDcEIsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO0lBQzNCLENBQUM7SUFDRCxJQUFXLFdBQVcsQ0FBQyxLQUFvQjtRQUN6QyxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztJQUM1QixDQUFDO0lBRUssY0FBYzs7WUFDbEIsTUFBTSxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2xDLENBQUM7S0FBQTtJQUVEOzs7T0FHRztJQUNHLFVBQVUsQ0FBQyxRQUFnQjs7WUFDL0IsTUFBTSxJQUFJLENBQUMscUJBQXFCLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQU8sR0FBRyxFQUFFLEVBQUU7Z0JBQzVELE1BQU0sSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxlQUFFLENBQUMsU0FBUyxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBUyxFQUFFO29CQUNqRyxNQUFNLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFO3dCQUM5QyxPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixHQUFHLFFBQVEsQ0FBQyxDQUFDO29CQUMzQyxDQUFDLENBQUMsQ0FBQztnQkFDTCxDQUFDLENBQUEsQ0FBQyxDQUFDO1lBQ0wsQ0FBQyxDQUFBLENBQUMsQ0FBQztRQUNMLENBQUM7S0FBQTtJQUVEOzs7TUFHRTtJQUNJLHFCQUFxQixDQUFDLFFBQWdCOztZQUUxQyxJQUFJLGFBQWEsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUN2QixNQUFNLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQWdCLFdBQVcsRUFBRSxLQUFLOztvQkFDekQsTUFBTSxLQUFLLEdBQUcsV0FBVyxDQUFDLEdBQUcsQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7b0JBQzVDLE1BQU0sS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBZ0IsZUFBZTs7NEJBQy9ELElBQUksZUFBZSxJQUFJLFFBQVEsRUFBRTtnQ0FDL0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsR0FBRyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dDQUNsRCxhQUFhLEdBQUcsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0NBQzVCLE9BQU87NkJBQ1I7d0JBQ0gsQ0FBQztxQkFBQSxDQUFDLENBQUM7Z0JBQ0wsQ0FBQzthQUFBLENBQUMsQ0FBQztZQUNILE9BQU8sYUFBYSxDQUFDO1FBQ3ZCLENBQUM7S0FBQTtDQUNGO0FBMURELGdEQTBEQyJ9