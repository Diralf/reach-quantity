Feature: Target overview

  Background:
    Given Today '2023-01-01' I see 'Paper Cranes' target for 50 of 'paper cranes' during Next 10 Days create at '2023-01-01'

  Scenario: Looking for Paper Cranes common target on dashboard
    Then I should see small property 'Name' with value 'Paper Cranes' on the card
    And I should see small property 'Target' with value '50 paper cranes' on the card
    And I should see small property 'For' with value 'Next 10 Days' on the card

  Scenario: Looking for Paper Cranes today's target
    Then I should see today target with label 'Today target'
    And I should see today target value 5

  Scenario: Looking for Paper Cranes target for next 5 days
    Then I should see target for day
      | day   | target |
      | Day 1 | 5      |
      | Day 2 | 5      |
      | Day 3 | 5      |
      | Day 4 | 5      |
      | Day 5 | 5      |
