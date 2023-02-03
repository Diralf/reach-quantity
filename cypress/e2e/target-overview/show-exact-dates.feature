Feature: Show exact dates

  Scenario Outline: Symbolic period <Period> is selected at <Created On>
    And I have created 'Paper Cranes' target for 50 of 'paper cranes' during <Period> at <Created On>
    When Today is <Created On>
    And I found 'Paper Cranes' target card on dashboard
    Then I should see period <Period> on the card
    And I should see exact dates <Exact Dates> on the card
    Examples:
      | Period          | Created On   | Exact Dates               |
      | Current Quarter | '2023-02-14' | '2023-01-01 - 2023-03-31' |
      | Next 5 Days     | '2023-01-01' | '2023-01-01 - 2023-01-05' |
      | Next 10 Days    | '2023-01-01' | '2023-01-01 - 2023-01-10' |
