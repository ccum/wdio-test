Feature: Check title from google

Scenario: Get the title of webpage
  Given I go to the website
  Then I expect the title of the page


  # Given I go to the website "http://www.google.com"
  # Then I expect the title of the page "Google"