Feature: Test the Size Guide
  As a user
  I want to test size guide modal So that user sees size details
  Background:
    Given the user goes to the webshop
  Scenario: User should see Size Guide
    Given the user searchs for a "jacket"
    And  the user sees products on PLP
    When the user goes to available product PDP
    Then  the user sees Size Guide
    And the user closes Size Guide

