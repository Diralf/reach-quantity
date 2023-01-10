Feature: Target overview

  Background:
    Given I have created "Paper Cranes" target for 50 of "paper cranes" during Next 10 Days
    When I visit dashboard page
    And I found "Paper Cranes" target card on dashboard

  Scenario: Looking for Paper Cranes common target on dashboard
    Then I should see small property "Name" with value "Paper Cranes" on the card
    And I should see small property "Target" with value "50 paper cranes" on the card
    And I should see small property "For" with value Next 10 Days on the card

  Scenario: Looking for Paper Cranes today's target
    Then I should see today target with label "Today's target"
    And I should see today target value 5

  Scenario: Looking for Paper Cranes target for next 5 days
    Then I should see target 5 for <day>
      | day   |
      | Day 1 |
      | Day 2 |
      | Day 3 |
      | Day 4 |
      | Day 5 |
