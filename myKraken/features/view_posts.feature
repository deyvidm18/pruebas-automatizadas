Feature: View Posts

  @user1 @web
  Scenario: As a user I want to see the list of posts to see their status.
    Given I navigate to page "http://localhost:2368/ghost/"
    When I enter "<USER>" into input field having id "ember8"
    When I enter "<PASSWORD>" into input field having id "ember10"
    When I click on element having id "ember12"
    When I navigate to page "http://localhost:2368/ghost/#/posts?type=published"
    Then I should see text "TITLE"
    Then I should see text "SENDS"
    Then I should see text "OPEN"
    Then I should see text "STATUS"