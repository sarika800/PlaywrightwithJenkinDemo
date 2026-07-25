Feature: signup functionality
    @valid_Details
    Scenario: verify signup feature with valid details
        Given user launches website
        When user clicks on signup link
        And user clicks on dont have account hyperlink
        And Enter name "testuser74"
        And Enter email "test74@gmail.com"
        And enter password "Test@1234"
        And enter confirm password "Test@1234"
        And user clicks on signup button
        Then verify  account created succesfully

    @invalid_Details

    Scenario: verify signup feature with invalid(duplicate email) details
        Given user launches website
        When user clicks on signup link
        And user clicks on dont have account hyperlink
        And Enter name "test101"
        And Enter email "test1012@gmail.com"
        And enter password "Test@1234"
        And enter confirm password "Test@1234"
        And user clicks on signup button
        Then verify user get text as "Another user is already registered using this email address."

    @blank_details

    Scenario: verify signup feature with blank details
        Given user launches website
        When user clicks on signup link
        And user clicks on dont have account hyperlink
        And Enter name ""
        And Enter email ""
        And enter password ""
        And enter confirm password ""
        And user clicks on signup button
        # Then verify user able to see "Please fill out this field"
      Then user should see validation error for required fields