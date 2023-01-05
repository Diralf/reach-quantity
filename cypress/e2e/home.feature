Feature: Home page
  Scenario: visit the home page
    When user visit home page
    Then user should see navbar
    And use should see 'Create New Target' page
