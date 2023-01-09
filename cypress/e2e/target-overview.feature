Feature: Target overview

  Background:
    Given I have created "Paper Cranes" target for 100 of "paper cranes" during Next 10 Days
    And I on home page
    When I found "Paper Cranes" target

  Scenario: Looking for Paper Cranes common target on dashboard
    Then I should see small property "Name" with value "Paper Cranes"
    And I should see small property "Target" with value "100 paper cranes"
    And I should see small property "For" with value "Current Quarter"

  Scenario: Looking for Paper Cranes today's target
    Then I should see today target with label "Today's target"
    And I should see today target value 1 +-1 (target 100 / ~90 days)

  Scenario: Looking for Paper Cranes target for next 5 days
    Then I should see target 1 +-1 for <day>
      | day   |
      | Day 1 |
      | Day 2 |
      | Day 3 |
      | Day 4 |
      | Day 5 |
