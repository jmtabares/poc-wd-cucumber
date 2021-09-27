Feature: Test the keyword search and filter
  As a user
  I want to search with keyword So that user sees selected products
  Background: Background name
    Given the user goes to the webshop
    Then  the user goes to "women" shop
    Then  the user goes to all "new arrivals"
    And   the user sees products on PLP

  Scenario: Search by keyword
    Given the user sees products on PLP
    And   the user filters by medium size
    When  the user sees products on PLP
    And   the user sees medium size jackets
    Then  the user clear filters

  Scenario: Filter products with category
    Given the user filter by category "Bridal"
    When  the user sees products on PLP
    Then  the user clear filters

  Scenario: Filter products with designer
    Given the user filter by designer "Acne Studios"
    When  the user sees products on PLP
    Then  the user clear filters

  Scenario: Filter products with color
    Given the user filter by color "black"
    And   the user sees products on PLP
    Then  the user clear filters

  Scenario: Filter products with pattern
    Given the user filter by pattern "animal-print"
    When  the user sees products on PLP
    Then  the user clear filters

  Scenario: Sort product with price
    Given  the user sort products "price_asc"
    Then  the user sees products on PLP

  Scenario: Filter products with FTA
    Given the user selects country "Canada" with id "CA"
    Then the user selects language "en"
    And  the user  sees "<translatedCountry>"
    When the user filter products with FTA
    Then  the user sees products on PLP
