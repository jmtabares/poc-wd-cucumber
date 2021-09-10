Feature: Test the guest checkout
  As a user
  I want to checkout as a guest So that guests can buy products
  Background:
    Given the user goes to the webshop
    Then  the user goes to "women" shop
  Scenario: Guest adds shoes to bag
    Given  the user goes to all "shoes"
    When   the user sees products on PLP
    Then  the user adds available product to bag
  Scenario: Guest adds clothes to bag
    Given  the user goes to all "clothing"
    When   the user sees products on PLP
    Then  the user adds available product to bag

#  @Checkout @Magento
#  Scenario: Checkout as a guest
#    And   the user goes to the shopping bag
#    When  the user proceeds to checkout as guest
#    Then  the user sees checkout page