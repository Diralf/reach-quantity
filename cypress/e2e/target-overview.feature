Feature: Target overview

  Background:
    Given I have created "Paper Cranes" target for 100 of "paper cranes" during Current Quarter
    And I on home page
    When I found "Paper Cranes" target

  Scenario: Looking to Paper Cranes common target on dashboard
    Then I should see small property "Name" with value "Paper Cranes"
    And I should see small property "Target" with value "100 paper cranes"
    And I should see small property "For" with value "Current Quarter"

  Scenario: Looking to Paper Cranes today's target
    Given Today is First Day Of Period
    Then I should see today target with label "Today's target"
    And I should see today target 1 +-1 (target 100 / ~90 days)

