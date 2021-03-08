Feature: Change the site description

  @user1 @web
  Scenario: As a user I want to change the description to update the web site
    Given I navigate to page "http://localhost:2368/ghost/"
    When I enter "<USER>" into input field having id "ember8"
    When I enter "<PASSWORD>" into input field having id "ember10"
    When I click on element having id "ember12"
    When I navigate to page "http://localhost:2368/ghost/#/settings/general"
    When I click on element having css selector ".gh-setting-first .gh-setting-action"
    When I click on element having css selector "div.description-container>input.gh-input"
    When I clear input field having css selector "div.description-container>input.gh-input"
    When I enter "$name_1" into input field having css selector "div.description-container>input.gh-input"
    When I click on element having css selector ".view-actions>.gh-btn-blue"
    When I wait
    Then I should see text "Saved"