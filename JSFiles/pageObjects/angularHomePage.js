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
        this.addUserLink = protractor_1.element(protractor_1.by.linkText(" Add User"));
        this.search = protractor_1.element(protractor_1.by.css("input[type='search']"));
        this.firstName = protractor_1.element(protractor_1.by.css("angular.io"));
        this.lasName = protractor_1.element(protractor_1.by.css("input[type='search']"));
        this.userName = protractor_1.element(protractor_1.by.css("angular.io"));
        this.password = protractor_1.element(protractor_1.by.css("input[type='search']"));
        this.mobile = protractor_1.element(protractor_1.by.css("angular.io"));
        this.email = protractor_1.element(protractor_1.by.css("input[type='search']"));
        this.role = protractor_1.element(protractor_1.by.options("c.Value as c.Text for c in column.options"));
        this.customer = protractor_1.element(protractor_1.by.css("input[type='search']"));
    }
}
exports.angularHomePage = angularHomePage;
var selectDropdownbyNum = function (element, optionNum) {
    if (optionNum) {
        var options = element.all(protractor_1.by.tagName('option'))
            .then(function (options) {
            options[optionNum].click();
        });
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhckhvbWVQYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vcGFnZU9iamVjdHMvYW5ndWxhckhvbWVQYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsMkNBQW1GO0FBRW5GLHVCQUF1QjtBQUV2Qiw2QkFBNkI7QUFDN0IsNkVBQTZFO0FBQzdFLDZDQUE2QztBQUM3Qyx3REFBd0Q7QUFDeEQsNENBQTRDO0FBQzVDLHdFQUF3RTtBQUV4RSxNQUFhLGVBQWU7SUFjcEI7UUFHSSxJQUFJLENBQUMsV0FBVyxHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxNQUFNLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLHNCQUFzQixDQUFDLENBQUMsQ0FBQztRQUNwRCxJQUFJLENBQUMsU0FBUyxHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO1FBQzdDLElBQUksQ0FBQyxPQUFPLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLHNCQUFzQixDQUFDLENBQUMsQ0FBQztRQUNyRCxJQUFJLENBQUMsUUFBUSxHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO1FBQzVDLElBQUksQ0FBQyxRQUFRLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLHNCQUFzQixDQUFDLENBQUMsQ0FBQztRQUN0RCxJQUFJLENBQUMsTUFBTSxHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO1FBQzFDLElBQUksQ0FBQyxLQUFLLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLHNCQUFzQixDQUFDLENBQUMsQ0FBQztRQUNuRCxJQUFJLENBQUMsSUFBSSxHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLE9BQU8sQ0FBQywyQ0FBMkMsQ0FBQyxDQUFDLENBQUM7UUFDM0UsSUFBSSxDQUFDLFFBQVEsR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxDQUFDO0lBRTFELENBQUM7Q0FLUjtBQWpDRCwwQ0FpQ0M7QUFFRCxJQUFJLG1CQUFtQixHQUFHLFVBQVcsT0FBTyxFQUFFLFNBQVM7SUFDbkQsSUFBSSxTQUFTLEVBQUM7UUFDWixJQUFJLE9BQU8sR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQUUsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDNUMsSUFBSSxDQUFDLFVBQVMsT0FBTztZQUNwQixPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDN0IsQ0FBQyxDQUFDLENBQUM7S0FDTjtBQUNMLENBQUMsQ0FBQyJ9