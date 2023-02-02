Feature: Today target

  Scenario Outline: See target for today <Today>
    Given I on home page
    And I have created 'Paper Cranes' target for 18 of 'paper cranes' during Next 5 Days at '2023-01-01'
    When Today is <Today>
    And I found 'Paper Cranes' target card on dashboard
    Then I should see target for today as <Target>
    Examples:
      | Today        | Target |
      | '2023-01-01' | 4      |
      | '2023-01-02' | 5      |
      | '2023-01-03' | 6      |
      | '2023-01-04' | 9      |
      | '2023-01-05' | 18     |
