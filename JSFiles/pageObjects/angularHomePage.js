"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
// import fs from 'fs';
// const fs1 = require('fs');
// const objectFIle = fs1.readFileSync('./objectRepo/objectRepository.json');
// const objectjson = JSON.parse(objectFIle);
// //var envVal = environmentDetail["env"]["envDetail"];
// var objectLocator = objectjson.firstname;
// console.log("Reading Locator 111111111111111111 : " + objectLocator);
class angularHomePage {
    constructor() {
        this.addUserLink = protractor_1.element(protractor_1.by.xpath(".//button[text()=' Add User']"));
        this.search = protractor_1.element(protractor_1.by.css("input[type='search']"));
        this.firstName = protractor_1.element(protractor_1.by.css("input[name='FirstName']"));
        this.lasName = protractor_1.element(protractor_1.by.css("input[name='LastName']"));
        this.userName = protractor_1.element(protractor_1.by.css("input[name='UserName']"));
        this.password = protractor_1.element(protractor_1.by.css("input[name='Password']"));
        this.mobile = protractor_1.element(protractor_1.by.css("input[name='Mobilephone']"));
        this.email = protractor_1.element(protractor_1.by.css("input[name='Email']"));
        this.save = protractor_1.element(protractor_1.by.xpath("//button[text()='Save']"));
        this.role = protractor_1.element(protractor_1.by.options("c.Value as c.Text for c in column.options"));
        this.customer = protractor_1.element(protractor_1.by.css("input[type='radio']"));
    }
}
exports.angularHomePage = angularHomePage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhckhvbWVQYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vcGFnZU9iamVjdHMvYW5ndWxhckhvbWVQYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsMkNBQW1GO0FBRW5GLHVCQUF1QjtBQUV2Qiw2QkFBNkI7QUFDN0IsNkVBQTZFO0FBQzdFLDZDQUE2QztBQUM3Qyx3REFBd0Q7QUFDeEQsNENBQTRDO0FBQzVDLHdFQUF3RTtBQUV4RSxNQUFhLGVBQWU7SUFlcEI7UUFHSSxJQUFJLENBQUMsV0FBVyxHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQywrQkFBK0IsQ0FBQyxDQUFDLENBQUM7UUFDcEUsSUFBSSxDQUFDLE1BQU0sR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxDQUFDO1FBQ3BELElBQUksQ0FBQyxTQUFTLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLHlCQUF5QixDQUFDLENBQUMsQ0FBQztRQUMxRCxJQUFJLENBQUMsT0FBTyxHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDLENBQUM7UUFDdkQsSUFBSSxDQUFDLFFBQVEsR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxDQUFDO1FBQ3hELElBQUksQ0FBQyxRQUFRLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLHdCQUF3QixDQUFDLENBQUMsQ0FBQztRQUN4RCxJQUFJLENBQUMsTUFBTSxHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDLENBQUM7UUFDekQsSUFBSSxDQUFDLEtBQUssR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDO1FBQ2xELElBQUksQ0FBQyxJQUFJLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLHlCQUF5QixDQUFDLENBQUMsQ0FBQztRQUN2RCxJQUFJLENBQUMsSUFBSSxHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLE9BQU8sQ0FBQywyQ0FBMkMsQ0FBQyxDQUFDLENBQUM7UUFDM0UsSUFBSSxDQUFDLFFBQVEsR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDO0lBRXpELENBQUM7Q0FLUjtBQW5DRCwwQ0FtQ0MifQ==