import { ElementFinder, element, by, ElementArrayFinder, browser } from "protractor";

import fs from 'fs';

const fileReader = require('fs');
const orJsonFile = fileReader.readFileSync('./object_repo/object_repository.json');
const orJsonObject = JSON.parse(orJsonFile);

/**
 * Class for User Management page and its supported functionality
 */
export class UserManagementPage {
  private addUserLink:ElementFinder;
  private search:ElementFinder;
  private userList: ElementArrayFinder;
  private crossokicon: ElementFinder;
  private arrEle:ElementArrayFinder
  private searchuserbox:ElementFinder
  private fistUser:ElementFinder
  private addeduserList:ElementArrayFinder;

  constructor() {
    this.addUserLink = element(by.xpath(orJsonObject.adduser));
    this.searchuserbox = element(by.model(orJsonObject.searchbox));
    this.userList = element.all(by.xpath(orJsonObject.userlist));
    this.crossokicon = element(by.xpath(orJsonObject.okdeleteuser));
    this.fistUser = element(by.xpath(orJsonObject.firstuser)); 
    this.addeduserList=element.all(by.xpath(orJsonObject.addeduserlist)); 
  }

  async clickOnAddUser() {
    await this.addUserLink.click();
  }

  async getAddUserLink() {
    return this.addUserLink;
  }

  /**
   * deleting user as per given user name 
   * @param userName 
   */
  async deleteuser(userName: string){
    let userinthelst = 0;
    await this.userList.each((elementtest, index) => {

      elementtest.getText().then(async function (text) {
        userinthelst++;
        if (text == userName) {

          await element(by.xpath("//table[@table-title='Smart Table example']/tbody/tr[" + userinthelst + "]/td[11]//i[@class='icon icon-remove']")).click();
        }
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
  async verifyAddedUser(userName:string){
    let userPosInList = 0;
        await this.addeduserList.each(function(currentUser, index) {              
            currentUser.getText().then(async function (displayUserName) {
            userPosInList++;           
            if(displayUserName == userName){
              console.log("User Found at Row : " + userPosInList);
              return true;
            }                        
        });
      });
    }
}


