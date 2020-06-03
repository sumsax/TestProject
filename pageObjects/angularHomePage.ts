import { ElementFinder,element,by, ElementArrayFinder, browser } from "protractor";

// import fs from 'fs';

// const fs1 = require('fs');
// const objectFIle = fs1.readFileSync('./objectRepo/objectRepository.json');
// const objectjson = JSON.parse(objectFIle);
// //var envVal = environmentDetail["env"]["envDetail"];
// var objectLocator = objectjson.firstname;
// console.log("Reading Locator 111111111111111111 : " + objectLocator);

export class angularHomePage
{
        addUserLink:ElementFinder;
        search:ElementFinder;
        firstName:ElementFinder;
        lasName:ElementFinder;
        userName:ElementFinder;
        password:ElementFinder;
        mobile:ElementFinder;
        email:ElementFinder;
        role:ElementFinder;
        customer:ElementFinder;
        arrEle:ElementArrayFinder

        constructor()
        {

            this.addUserLink=element(by.linkText(" Add User"));
            this.search=element(by.css("input[type='search']"));
            this.firstName=element(by.css("angular.io"));
            this.lasName=element(by.css("input[type='search']"));
            this.userName=element(by.css("angular.io"));
            this.password=element(by.css("input[type='search']"));
            this.mobile=element(by.css("angular.io"));
            this.email=element(by.css("input[type='search']"));
            this.role=element(by.options("c.Value as c.Text for c in column.options"));
            this.customer=element(by.css("input[type='search']"));   

        }

 


}

var selectDropdownbyNum = function ( element, optionNum ) {
    if (optionNum){
      var options = element.all(by.tagName('option'))   
        .then(function(options){
          options[optionNum].click();
        });
    }
};