import { ElementFinder,element,by, ElementArrayFinder, browser } from "protractor";
import fs from 'fs';
import chai from "chai";



let expect = chai.expect;

//Description with proper name
const fs1 = require('fs');
const objectFIle = fs1.readFileSync('./objectRepo/objectRepository.json');
//Caps j 
const objectjson = JSON.parse(objectFIle);

const data = fs1.readFileSync('./testData/data.json');
const testData = JSON.parse(data);

var objectLocator = objectjson.firstname;


export class angularHomePage {
  
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

            this.addUserLink = element(by.xpath(objectjson.adduser));
            this.firstName = element(by.css(objectjson.firstname));
            this.searchuserbox = element(by.model(objectjson.searchbox));
            this.lasName = element(by.css(objectjson.lastname));
            this.userName = element(by.css(objectjson.userName));
            this.password = element(by.css(objectjson.password));
            this.mobile = element(by.css(objectjson.mobilenumber));
            this.email = element(by.css(objectjson.email));
            this.save = element(by.xpath(objectjson.savebutton));
            this.role = element(by.cssContainingText(objectjson.role,testData.role));
            this.customer = element.all(by.repeater(objectjson.customer));          
            this.fistUser = element(by.xpath(objectjson.firstuser)); 

        }

      async verifyAddedUser(firstname:string){

            try{
              await this.searchuserbox.sendKeys(firstname);        
              await expect(this.fistUser.getText()).toEqual(firstname);
            }catch(err){
              console.log(err);
            }

      }
}


