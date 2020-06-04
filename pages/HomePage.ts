import { ElementFinder,element,by, ElementArrayFinder, browser } from "protractor";
import fs from 'fs';
import chai from "chai";

var expect = chai.expect;
const filereader = require('fs');
const objectFile = filereader.readFileSync('./object_Repo/objectRepository.json');

const objectJson = JSON.parse(objectFile);
const data = filereader.readFileSync('./testData/data.json');
const testData = JSON.parse(data);


//Class to initial add user and verify added user functionality
export class HomePage {
  
        addUserLink:ElementFinder;
        search:ElementFinder;
        firstName:ElementFinder;
        lasName:ElementFinder;
        userName:ElementFinder;
        password:ElementFinder;
        mobile:ElementFinder;
        email:ElementFinder;
        role:ElementFinder;
        customer:ElementArrayFinder;
        save:ElementFinder;
        arrEle:ElementArrayFinder
        searchuserbox:ElementFinder
        fistUser:ElementFinder
        addeduserList:ElementArrayFinder;

        constructor() {

            this.addUserLink = element(by.xpath(objectJson.adduser));
            this.firstName = element(by.css(objectJson.firstname));
            this.searchuserbox = element(by.model(objectJson.searchbox));
            this.lasName = element(by.css(objectJson.lastname));
            this.userName = element(by.css(objectJson.userName));
            this.password = element(by.css(objectJson.password));
            this.mobile = element(by.css(objectJson.mobilenumber));
            this.email = element(by.css(objectJson.email));
            this.save = element(by.xpath(objectJson.savebutton));
            this.role = element(by.cssContainingText(objectJson.role,testData.role));
            this.customer = element.all(by.repeater(objectJson.customer));          
            this.fistUser = element(by.xpath(objectJson.firstuser)); 
            this.addeduserList=element.all(by.xpath(objectJson.addeduserlist)); 

        }

      //verify added user in any of the row
      async verifyaddeduser(userLastName:string){
        let userinthelst=0;
           await this.addeduserList.each(function(elementtest, index) {              
               elementtest.getText().then(async function (text) {
               userinthelst++;           
               if(text==userLastName){
                 console.log("User Found in Row : " + userinthelst);
                 return true;
               }                        
           });
         });
       }
}


