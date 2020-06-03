import { ElementFinder,element,by, ElementArrayFinder, browser } from "protractor";
import fs from 'fs';
import chai from "chai";


let expect = chai.expect;

const filereader = require('fs');
const objectFile = filereader.readFileSync('./objectRepo/objectRepository.json');
//Caps j 
const objectJson = JSON.parse(objectFile);

const data = filereader.readFileSync('./testData/data.json');
const testData = JSON.parse(data);

var objectLocator = objectJson.firstname;

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

        }

      async verifyAddedUser(firstname:string){

            try{
              
              await this.searchuserbox.sendKeys(firstname);  
             // await browser.sleep(20000);      
              await expect(this.fistUser.getText()).toEqual(firstname);
            }catch(err){
              //console.log(err);
            }

      }
}


