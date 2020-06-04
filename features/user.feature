@addUser
Feature: As an Automation Engineer I want to verify user creation and deletion functionality

        Background: User navigated to application home page
            Given Admin user landed on user management page


        Scenario: User Enters all details in User Form and save it
             When User Enter all the details in Add User Form
             Then User verify successfully added user in user management table

        Scenario: As an Automation Engineer I want to delete a user
             When User delete specified user from table
             Then User verify user deleted successfully

       