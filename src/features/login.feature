
@login_details
Feature: login functionality

    Scenario: verify login feature with valid details

        Given user launches website
        When user clicks on signup link
        And Enter email "test74@gmail.com"
        And enter password "Test@1234"
        And user clicks on login button
        Then user should logged in succesfully
   