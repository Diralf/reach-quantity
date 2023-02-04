Feature: Today target

  Scenario Outline: See target <Target> for today <Today>
    Given Today <Today> I see 'Paper Cranes' target for 18 of 'paper cranes' during Next 5 Days create at '2023-01-01'
    Then I should see target for today as <Target>
    Examples:
      | Today        | Target |
      | '2023-01-01' | 4      |
      | '2023-01-02' | 5      |
      | '2023-01-03' | 6      |
      | '2023-01-04' | 9      |
      | '2023-01-05' | 18     |

  Scenario: See target 5 for today '2023-02-03T12:25'
    Given Today '2023-02-03T12:25' I see 'Paper Cranes' target for 50 of 'paper cranes' during Next 10 Days create at '2023-02-03'
    Then I should see target for today as 5
