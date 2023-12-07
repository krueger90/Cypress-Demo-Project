Feature: Register new user on the book store

Background:
    Given I navigate to the SUT

Scenario: Register user
    And I navigate to the Book Store application
    When I click on the Login button
    And I fill in all the required details
    Then the user is registered

