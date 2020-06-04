import { ElementFinder, element, by, ElementArrayFinder, browser } from "protractor";

import fs from 'fs';
import { debug } from "util";

const fileReader = require('fs');
const orJsonFile = fileReader.readFileSync('./object_repo/object_repository.json');
const orJsonObject = JSON.parse(orJsonFile);

/**
 * Class for User Management page and its supported functionality
 */
export class UserManagementPage {
  private _addUserLink: ElementFinder;
  private userList: ElementArrayFinder;
  private deleteConfirmation: ElementFinder;

  /**
   *  cnstructor to initiaize the element
   */
  constructor() {
    this.addUserLink = element(by.xpath(orJsonObject.adduser));
    this.userList = element.all(by.repeater(orJsonObject.userlist));
    this.deleteConfirmation = element(by.xpath(orJsonObject.deleteConfirmation));
  }

  public get addUserLink(): ElementFinder {
    return this._addUserLink;
  }
  public set addUserLink(value: ElementFinder) {
    this._addUserLink = value;
  }

  async clickOnAddUser() {
    await this._addUserLink.click();
  }

  /**
   * deleting user as per given user name 
   * @param userName 
   */
  async deleteUser(userName: string) {
    await this.getUserRecordPosition(userName).then(async (pos) => {
      await this.userList.get(pos - 1).element(by.className("icon icon-remove")).click().then(async () => {
        await this.deleteConfirmation.click().then(() => {
          console.log("User deleted: " + userName);
        });
      });
    });
  }

  /**
  * get the current user position on web-table
  * @param userName 
  */
  async getUserRecordPosition(userName: string) {

    let userPosInList = -1;
    await this.userList.each(async function (currentUser, index) {
      const cells = currentUser.all(by.css("td"));
      await cells.get(2).getText().then(async function (displayUserName) {
        if (displayUserName == userName) {
          console.log("User Found at Row : " + (index + 1));
          userPosInList = (index + 1);
          return;
        }
      });
    });
    return userPosInList;
  }
}