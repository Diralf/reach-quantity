Feature: Today target

  Scenario: See target for today
    Given Today is "2023-01-01"
    When I found just created "Paper Cranes" target for 50 of "paper cranes" during Next 10 Days
    Then I should see target for today as 5

