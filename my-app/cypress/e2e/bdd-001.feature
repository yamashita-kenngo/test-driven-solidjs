Feature: local test
  Scenario: local test
    When I visit localhost:3000
    Then I should see 'Hello Solidjs'