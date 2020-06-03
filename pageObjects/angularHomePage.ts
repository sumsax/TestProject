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
        save:ElementFinder;
        arrEle:ElementArrayFinder

        constructor()
        {

            this.addUserLink=element(by.xpath(".//button[text()=' Add User']"));
            this.search=element(by.css("input[type='search']"));
            this.firstName=element(by.css("input[name='FirstName']"));
            this.lasName=element(by.css("input[name='LastName']"));
            this.userName=element(by.css("input[name='UserName']"));
            this.password=element(by.css("input[name='Password']"));
            this.mobile=element(by.css("input[name='Mobilephone']"));
            this.email=element(by.css("input[name='Email']"));
            this.save=element(by.xpath("//button[text()='Save']"));
            this.role=element(by.options("c.Value as c.Text for c in column.options"));
            this.customer=element(by.css("input[type='radio']"));   

        }

 


}
