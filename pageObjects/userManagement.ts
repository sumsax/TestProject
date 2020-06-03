import { ElementFinder,element,by, ElementArrayFinder, browser } from "protractor";

import fs from 'fs';

const fs1 = require('fs');
const objectFIle = fs1.readFileSync('./objectRepo/objectRepository.json');
const objectjson = JSON.parse(objectFIle);
var userinthelst=0;
var objectLocator = objectjson.firstname;
console.log("Reading Locator 111111111111111111 : " + objectLocator);

export class usermanagement
{
       userList:ElementArrayFinder;
       crossokicon:ElementFinder;
      
        constructor()
        {               
            this.userList=element.all(by.xpath(objectjson.userlist));  
            this.crossokicon=element(by.xpath(objectjson.okdeleteuser));         
        }

       async deleteuser(userLastName:string){
          await this.userList.each(function(elementtest, index) {
          userinthelst++;
          console.log("User Number to be deleted 333333333" + userinthelst);
          elementtest.getText().then(async function (text) {
            console.log("44444444444444444444" + userLastName);
              if(text==userLastName){
                console.log("555555555555555" + userLastName);
                 await element(by.xpath("//table[@table-title='Smart Table example']/tbody/tr[" + userinthelst + "]/td[11]//i[@class='icon icon-remove']")).click();              
              }
              
          });
        });

      }
}


