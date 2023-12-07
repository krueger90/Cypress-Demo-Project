Feature: Register new user on the ecommerce site

Background:
    Given I navigate to the SUT

Scenario: Register user
    When I navigate to the "Register Account" page
    And I fill in all the required details
    And Agree to the Privacy Policy
    # And I click on the "Continue" button
    # Then the user is registered
    # When I click on the "Continue" button
    # Then The user is redirected to the account page

