Feature: Target overview

  Scenario: Looking to Paper Cranes target on dashboard
    Given I have created "Paper Cranes" target for 100 of "paper cranes" during Current Quarter
    And I on home page
    When I found "Paper Cranes" target
    Then I should see long property "Name" with value "Paper Cranes"
    And I should see long property "Target" with value "100 paper cranes"
    And I should see long property "For" with value "Current Quarter"

