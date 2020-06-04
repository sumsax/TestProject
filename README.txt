CONTENTS OF THIS FILE
---------------------

 * Introduction
 * Feature of Framework
 * Requirement
 * Installation/Framework Setup
 * Test Execution
 * Test Reporting


INTRODUCTION
------------
The Project is to display automation capability using Tool Protractor , BDD (Cucumber), typescript.

 * Add User and verify User: Class AddUserPage as POM
   http://www.way2automation.com/angularjs-protractor/webtables/

 * Delete Specific User and verify it in table: Class UserManagementPage as POM
   http://www.way2automation.com/angularjs-protractor/webtables/

Framework Features
------------
 * Parametrized Object Repository and Test Data based on Json
 * Page Object Model 
 * Protractor and Selenium locators
 * Exception Handling
 * Embedded screenshot in cucumber report

REQUIREMENTS
------------
This module requires the following component should be installed before running the test:
 * Node Js with NPM
 * Chrome Version => 80

Installation/Framework Setup
------------
 
 * Mac - Navigate to Root Directory of Project and perform - npm run setup
         if webdriver error displayed ................... - sudo node ./node_modules/.bin/webdriver-manager update

 * Mac - If any dependencies left ,perform  - sudo npm audit fix --force

 * Windows - Navigate to Root Directory of Project and perform -  npm run setup  
             if webdriver error displayed ............... - node ./node_modules/.bin/webdriver-manager update

 * Windows - If any depencies left , perform -  npm audit fix --force

Test Execution 
------------
 * Navigate to Root Directory of Project and perform - npm test
   OR
 * Open Terminal in Visual Studio and perform - npm test

Test Reporting 
------------
 * After test execution, test report will be generated under ./reports folder