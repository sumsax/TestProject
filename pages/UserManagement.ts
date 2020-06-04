import { ElementFinder,element,by, ElementArrayFinder, browser } from "protractor";

import fs from 'fs';

const fs1 = require('fs');
const objectFIle = fs1.readFileSync('./object_Repo/objectRepository.json');
const objectjson = JSON.parse(objectFIle);

var objectLocator = objectjson.firstname;



//class to delete and verify user deletion
export class usermanagement{
       userList:ElementArrayFinder;
       crossokicon:ElementFinder;
      
        constructor()
        {               
            this.userList=element.all(by.xpath(objectjson.userlist));  
            this.crossokicon=element(by.xpath(objectjson.okdeleteuser));         
        }


       //deleting user as per given name 
       async deleteuser(userLastName:string){
       let userinthelst=0;
          await this.userList.each(function(elementtest, index) {
               
          elementtest.getText().then(async function (text) {
            userinthelst++;
            
              if(text==userLastName){
               
                await element(by.xpath("//table[@table-title='Smart Table example']/tbody/tr[" + userinthelst + "]/td[11]//i[@class='icon icon-remove']")).click();              
              }            
          });
        });

      }


      //verify deleted user should not be present in any of the row
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


