Feature: Login to the admin panel

  @user1 @web
  Scenario: As a user I want to login to the admin panel to see the manage and settings menu
    Given I navigate to page "http://localhost:2368/ghost/"
    When I enter "<USER>" into input field having id "ember8"
    When I enter "<PASSWORD>" into input field having id "ember10"
    When I click on element having id "ember12"
    When I should see text "Manage"
    Then I should see text "Settings"