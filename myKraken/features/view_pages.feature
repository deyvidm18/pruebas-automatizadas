Feature: View Pages

  @user1 @web
  Scenario: As a user I want to see the list of pages to see their status.
    Given I navigate to page "http://localhost:2368/ghost/"
    When I enter "<USER>" into input field having id "ember8"
    When I enter "<PASSWORD>" into input field having id "ember10"
    When I click on element having id "ember12"
    When I navigate to page "http://localhost:2368/ghost/#/pages"
    Then I should see text "PAGES"
    Then I should see text "TITLE"
    Then I should see text "STATUS"