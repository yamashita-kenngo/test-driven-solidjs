Feature: markdown render test
Scenario: H1 render test
  Given I have a markdown text
  When I render the markdown text
  Then I should see the H1 tag and H1 text
Scenario: p render test
  Given I have a markdown text
  When I render the markdown text
  Then I should see the p tag and p text
Scenario: a render test
  Given I have a markdown text
  When I render the markdown text
  Then I should see the a tag and a text
Scenario: ul render test
  Given I have a markdown text
  When I render the markdown text
  Then I should see the ul tag and ul text
Scenario: li render test
  Given I have a markdown text
  When I render the markdown text
  Then I should see the li tag and li text


