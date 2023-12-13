Feature: Various user actions on the ecommerce site

Background:
    Given I navigate to the SUT

Scenario: Register user
    When I navigate to the "Register Account" page
    And I fill in all the required details
    And Agree to the Privacy Policy
    And I click on the "Continue" button
    Then the user is registered
    When I click on the "Continue" button
    Then I am redirected to the account page


# The existing address was added manually when the test account was created
Scenario Outline: Login user and place order
    When I navigate to the "Login" page
    And I fill in the login details
    And I login
    Then I am redirected to the account page
    When I clear the cart 
    And I search for "HTC" products
    And Add a product to cart with Buy Now
    Then I am redirected to the checkout page
    When I fill in the required checkout details and use an "<address>" address
    And I click on the "Continue" button
    And Verify if the order is correct
    And I confirm the order                                                       
    Then The order is placed
    
    Examples:
    |address|
    |existing|
    |new|
