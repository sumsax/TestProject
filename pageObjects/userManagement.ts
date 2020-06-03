import { ElementFinder,element,by, ElementArrayFinder, browser } from "protractor";

import fs from 'fs';

const fs1 = require('fs');
const objectFIle = fs1.readFileSync('./objectRepo/objectRepository.json');
const objectjson = JSON.parse(objectFIle);

var objectLocator = objectjson.firstname;

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
       let userinthelst=0;
          await this.userList.each(function(elementtest, index) {
               
          elementtest.getText().then(async function (text) {
            userinthelst++;
            
              if(text==userLastName){
                console.log("Count when user met"+userinthelst);
                await element(by.xpath("//table[@table-title='Smart Table example']/tbody/tr[" + userinthelst + "]/td[11]//i[@class='icon icon-remove']")).click();              
              }            
          });
        });

      }

      async verifydeleteduser(userLastName:string){
        let userinthelst=0;
           await this.userList.each(function(elementtest, index) {
                
           elementtest.getText().then(async function (text) {
             userinthelst++;
             
               if(text==userLastName){
                 console.log("User Not Deleted");
               }
               else{
                console.log("User Deleted Successfully");
               }            
           });
         });
 
       }
}


