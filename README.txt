CONTENTS OF THIS FILE
---------------------

 * Introduction
 * Feature of Framework
 * Requirement
 * Installation
 * Execution
 * 


 INTRODUCTION
------------

The Project is to display automation capability of Candidate in Automation Test using Tool Protractor , BDD (Cucumber), typescript.

 * Add User and verify User : Class HomePage as POM
   http://www.way2automation.com/angularjs-protractor/webtables/

 * Delete Specific User Based on Text Provided and verify it in table:CLass UserManagement as POM
   http://www.way2automation.com/angularjs-protractor/webtables/



 Framework Features
------------

Framework Capability:

 * Parametrised Object Repo and Test Data Repo based on Json
 * Page Object Model 
 * Cucumber Reports 
 * Exception Handling
 * On Failure Embedded screensot in cucumber report
 * Protractor and Selenium both locators used

 REQUIREMENTS
------------

This module requires the following modules:

 * Node Js Installed 
 * Visual Studio code
 * Chrome Version => 80

 NSTALLATION
------------
 
 * Mac - Navigate to Root Directry of Project and perform - npm install && webdriver-manager update
         if webdriver error displayed ................... - sudo node ./node_modules/.bin/webdriver-manager update

 * Mac - If any depencies left , peroform - sudo npm audit fix --force

 * Windows - Navigate to Root Directry of Project and perform -  npm install && webdriver-manager update  
             if webdriver error displayed ................... - node ./node_modules/.bin/webdriver-manager update

 * Windows - If any depencies left , peroform -  npm audit fix --force


  Execution 
------------
 
 * Open Terminal in Visual Studio and perform - npm test




