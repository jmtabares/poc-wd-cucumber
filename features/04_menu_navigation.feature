Feature: Test the menu navigation
  As a user
  I want to see menu navigation So that user sees a different department
  Background: Background name
    Given the user goes to the webshop
  Scenario: Continue as a guest
    Given the user selects country "China" with id "CN"
    Then the user selects language "en"
    And  the user  sees "China"
    Then the user goes to "women" shop
    And the user sees the home page for "women"

  Scenario: Department Switch to Women shop
    Then  the user goes to "women" shop
    And   the user sees the home page for "women"
    Then  the user goes to all "new arrivals"
    And   the user sees products on PLP
    Then  the user adds available product to bag

  Scenario: Department Switch to Men shop
    Then  the user goes to "men" shop
    Then  the user sees the home page for "men"
    Then  the user goes to all "new arrivals"
    And   the user sees products on PLP
    Then  the user adds available product to bag

  Scenario: Department Switch to kids shop
    Then  the user goes to "kids" shop
    And   the user sees the home page for "kids"
