Feature: Show exact dates

  Scenario Outline: Symbolic period <Period> is selected at <Created On>
    Given I have created 'Paper Cranes' target for 50 of 'paper cranes' during <Period> at <Created On>
    When I found 'Paper Cranes' target card on dashboard
    Then I should see period <Period> on the card
    Then I should see exact dates <Exact Dates> on the card
    Examples:
      | Period          | Created On   | Exact Dates               |
      | Current Quarter | '2023-01-01' | '2023-01-01 - 2023-03-31' |
      | Current Quarter | '2023-02-14' | '2023-01-01 - 2023-03-31' |
      | Current Quarter | '2023-03-31' | '2023-01-01 - 2023-03-31' |
      | Current Quarter | '2023-04-19' | '2023-04-01 - 2023-06-30' |
      | Current Quarter | '2023-08-10' | '2023-07-01 - 2023-09-30' |
      | Current Quarter | '2023-11-05' | '2023-10-01 - 2023-12-31' |
      | Next 5 Days     | '2023-01-01' | '2023-01-01 - 2023-01-05' |
      | Next 10 Days    | '2023-01-01' | '2023-01-01 - 2023-01-10' |
