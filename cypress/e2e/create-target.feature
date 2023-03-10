Feature: Create target

  Background:
    Given I on home page

  Scenario: navigation to create target page
    When I go to create target page
    Then I should see 'Create Target' page

  Scenario Outline: create <name> target to make <quantity> <measurement> during <period>
    When I start target create process
    And I specify the name <name> for target
    And I specify target <quantity> of <measurement>
    And I specify period for <period>
    And I submit the target
    Then I should see the target <name> on dashboard
    Examples:
      | name           | quantity | measurement    | period          |
      | 'Paper Cranes' | 100      | 'paper cranes' | Current Quarter |
      | 'Blue Birds'   | 25       | 'blue birds'   | Next 10 Days    |
