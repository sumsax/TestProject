import { ElementFinder, element, by, ElementArrayFinder, browser } from "protractor";

import fs from 'fs';

const fileReader = require('fs');
const orJsonFile = fileReader.readFileSync('./object_repo/object_repository.json');
const orJsonObject = JSON.parse(orJsonFile);

/**
 * Class for User Management page and its supported functionality
 */
export class UserManagementPage {
  private _addUserLink: ElementFinder;
  private search:ElementFinder;
  private userList: ElementArrayFinder;
  private deleteConfirmOk: ElementFinder;
  private arrEle:ElementArrayFinder
  private searchuserbox:ElementFinder
  private fistUser:ElementFinder
  private addeduserList:ElementArrayFinder;

  /**
   *  cnstructor to initiaize the element
   */
  constructor() {
    this.addUserLink = element(by.xpath(orJsonObject.adduser));
    this.searchuserbox = element(by.model(orJsonObject.searchbox));
    this.userList = element.all(by.xpath(orJsonObject.userlist));
    this.deleteConfirmOk = element(by.xpath(orJsonObject.okdeleteuser));
    this.fistUser = element(by.xpath(orJsonObject.firstuser)); 
    this.addeduserList=element.all(by.xpath(orJsonObject.addeduserlist)); 
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
  async deleteuser(userName: string){
    let userPosInList = 0;
    await this.userList.each((currentUser, index) => {
      currentUser.getText().then(async function (displayUserName) {
        userPosInList++;
        if (displayUserName == userName) {
          await element(by.xpath("//table[@table-title='Smart Table example']/tbody/tr[" + userPosInList + "]/td[11]//i[@class='icon icon-remove']")).click();
          await this.deleteConfirmOk.click();
        }
      });
    });
  }

   /**
   * verify given user exsts on web-table
   * @param userName 
   */
  async isUserExist(userName:string) {
    
    let userPosInList = 0;
    let userFound = false;
        await this.addeduserList.each(function(currentUser, index) {              
            currentUser.getText().then(async function (displayUserName) {
            userPosInList++;       
            if(displayUserName == userName){
              console.log("User Found at Row : " + userPosInList);
              userFound = true;
              return;
            }                        
        });
      });
      return userFound;
    }
}