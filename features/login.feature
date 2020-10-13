Feature: Login?
  When someone wants to access the System services

  Scenario: Username is Joshua
    Given I log in as "Joshua"
    When I try to login
    Then I should be told "logged in"

  Scenario: Username is Mike
    Given I log in as "Mike"
    When I try to login
    Then I should be told "Failed login"

  Scenario: Any username and password
    Given I log in as "any name"
    When I try to login
    Then I should be told "Failed login"