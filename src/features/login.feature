
@login_details
Feature: login functionality

    Scenario: verify login feature with valid details

        Given user launches website
        When user clicks on signup link
        And Enter email "test74@gmail.com"
        And enter password "Test@1234"
        And user clicks on login button
        Then user should logged in succesfully
   
   
@invalid_login_details

    Scenario Outline: verify login feature with invalid details

        Given user launches website
        When user clicks on signup link
        And Enter email "<email>"
        And enter password "<password>"
        And user clicks on login button
        Then user should able to see the error message
        
        Examples:
            | email | password | 
            | 1111  | sssss  | 