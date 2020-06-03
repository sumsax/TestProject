import { ElementFinder,element,by, ElementArrayFinder, browser } from "protractor";

import fs from 'fs';

const fs1 = require('fs');
const objectFIle = fs1.readFileSync('./objectRepo/objectRepository.json');
const objectjson = JSON.parse(objectFIle);

var objectLocator = objectjson.firstname;
console.log("Reading Locator 111111111111111111 : " + objectLocator);

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
        role:ElementArrayFinder;
        customer:ElementFinder;
        save:ElementFinder;
        arrEle:ElementArrayFinder

        constructor()
        {

            this.addUserLink=element(by.xpath(objectjson.adduser));
            this.search=element(by.css("objectjson.firstname"));
            this.firstName=element(by.css(objectjson.firstname));
            this.lasName=element(by.css(objectjson.lastname));
            this.userName=element(by.css(objectjson.userName));
            this.password=element(by.css(objectjson.password));
            this.mobile=element(by.css(objectjson.mobilenumber));
            this.email=element(by.css(objectjson.email));
            this.save=element(by.xpath(objectjson.savebutton));
          //  this.role=element(by.options("c.Value as c.Text for c in column.options"));
           // this.role=element.all(by.css());
            this.customer=element(by.css("input[type='radio']"));   

        }


        async deleteuser(userLastName:string){
          await this.role.each(function(elementtest, index) {
         
          elementtest.getText().then(async function (text) {
              if(text==userLastName){
                 await element(by.xpath("//table[@table-title='Smart Table example']/tbody/tr[{userinthelst}]/td[11]//i[@class='icon icon-remove']")).click();              
              }
              
          });
        });

      }
        
         selectDropdownbyNum = function ( element, optionNum ) {
            if (optionNum){
              var options = element.all(by.tagName('option'))   
                .then(function(options){
                  options[optionNum].click();
                });
            }
          };
 


}


