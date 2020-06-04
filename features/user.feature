@Sanity
Feature: As an Automation Engineer I want to verify user creation and deletion functionality

     Background: User navigated to application home page
          Given User landed on user management page

     Scenario: Add a user and validate the user has been added to the table
          When Add new User with all the details on Add User Form
          Then Verify user added successfully on web table

     Scenario: Delete user User Name: novak and validate user has been deleted
          When Delete specified user i.e. "novak" from table
          Then Verify user "novak" deleted successfully