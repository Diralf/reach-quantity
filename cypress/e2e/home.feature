Feature: Home page
  Scenario: visit the home page
    When I visit home page
    Then I should see navbar
    And I should see 'Dashboard' page
