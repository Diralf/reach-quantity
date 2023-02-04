Feature: Set reached quantity for today

  Scenario: See default value of reached quantity
    Given Today '2023-01-01' I see 'Paper Cranes' target for 18 of 'paper cranes' during Next 5 Days create at '2023-01-01'
    Then I should see today reached quantity as 0

  Scenario Outline: Type reached quantity using number field
    Given Today '2023-01-01' I see 'Paper Cranes' target for 18 of 'paper cranes' during Next 5 Days create at '2023-01-01'
    When I specify reached today quantity to <Reached>
    Then I should see today reached quantity as <Reached>
    Examples:
      | Reached |
      | 1       |
      | 4       |
      | 6       |
