import { ElementFinder,element,by, ElementArrayFinder, browser } from "protractor";
import fs from 'fs';

const fileReader = require('fs');
const data = fileReader.readFileSync('./testData/data.json');
const testData = JSON.parse(data);

const orJsonFile = fileReader.readFileSync('./object_repo/object_repository.json');
const orJsonObject = JSON.parse(orJsonFile);

/**
 * Class for Add User page and its supported functionality
 */
export class AddUserPage {
  
      private firstName:ElementFinder;
      private lasName:ElementFinder;
      private userName:ElementFinder;
      private password:ElementFinder;
      private mobile:ElementFinder;
      private email:ElementFinder;
      private role:ElementFinder;
      private customer:ElementArrayFinder;
      private save:ElementFinder;

      constructor() {
        this.firstName = element(by.css(orJsonObject.firstname));
        this.lasName = element(by.css(orJsonObject.lastname));
        this.userName = element(by.css(orJsonObject.userName));
        this.password = element(by.css(orJsonObject.password));
        this.mobile = element(by.css(orJsonObject.mobilenumber));
        this.email = element(by.css(orJsonObject.email));
        this.save = element(by.xpath(orJsonObject.savebutton));
        this.role = element(by.cssContainingText(orJsonObject.role, testData.role));
        this.customer = element.all(by.repeater(orJsonObject.customer));          
      }

      /**
       * Add user with given test data
       */
      async addUser() {
        await this.firstName.sendKeys(testData.firstName);
        await this.lasName.sendKeys(testData.lastName);
        await this.userName.sendKeys(testData.username);
        await this.password.sendKeys(testData.password);
        await this.email.sendKeys(testData.email);
        await this.mobile.sendKeys(testData.mobileNumber);
        await this.customer.get(0).click(); 
        await this.role.click();
        await this.save.click();
      }
}