@only
Feature: Test the Preferences of a user
  As a user
  I want to be able to change language and country

  #Scenario: User can change country
  #  Given the user goes to the webshop

  Scenario Outline: User can change country and language
    Given the user goes to the webshop
    When the user selects country "<country>" with id "<id>"
    Then the user selects language "<language>"
    And  the user  sees "<translatedCountry>"
    Then the user  sees the gate page

    Examples:
      | country        | language | translatedCountry | id |
      | united kingdom | en       | United Kingdom    | GB |
      | germany        | de       | Deutschland       | DE |
#    | Spanien        | Español  | España            |
