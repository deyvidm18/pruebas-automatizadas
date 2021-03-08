Feature: View Labs

  @user1 @web
  Scenario: As a user I want to see the site to see the experimental features
    Given I navigate to page "http://localhost:2368/ghost/"
    When I enter "<USER>" into input field having id "ember8"
    When I enter "<PASSWORD>" into input field having id "ember10"
    When I click on element having id "ember12"
    When I navigate to page "http://localhost:2368/ghost/#/settings/labs"
    When I wait
    Then I should see text "Labs"