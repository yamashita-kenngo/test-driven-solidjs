Feature: markdown render test
Scenario: H1 render test
  Given I have a markdown text
  When I render the markdown text
  Then I should see the H1 tag and H1 text


