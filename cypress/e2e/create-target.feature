Feature: Create target

  Scenario: navigation to create target page
    When I visit home page
    And I go to create target page
    Then I should see 'Create Target' page

  Scenario: create target to make 100 paper cranes during current quarter
    When I start target create process
    And I specify the name 'Paper Cranes' for target
    And I specify target 100 of 'paper cranes'
    And I specify date range for Current Quarter
    And I submit the target
    Then I should see the target 'Paper Cranes' on dashboard
