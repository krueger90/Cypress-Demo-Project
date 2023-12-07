Feature: Register new user on the book store

Background:
    Given I navigate to the SUT

Scenario: Register user
    When I navigate to the Book Store application
    And I click on the Login button
    And I fill in all the required details
    Then the user is registered

