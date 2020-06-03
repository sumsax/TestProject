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
      
        constructor()
        {               
            this.userList=element.all(by.xpat(objectjson.userlist));           
        }

       async deleteuser(userLastName:string){
          await this.userList.each(function(elementtest, index) {
          userinthelst++;
          elementtest.getText().then(async function (text) {
              if(text==userLastName){
                 await element(by.xpath("//table[@table-title='Smart Table example']/tbody/tr[{userinthelst}]/td[11]//i[@class='icon icon-remove']")).click();              
              }
              
          });
        });

      }
}


