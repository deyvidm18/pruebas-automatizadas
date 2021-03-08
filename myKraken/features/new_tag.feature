Feature: Create new tag

  @user1 @web
  Scenario: As a user I want to create a new tag to classify content
    Given I navigate to page "http://localhost:2368/ghost/"
    When I enter "<USER>" into input field having id "ember8"
    When I enter "<PASSWORD>" into input field having id "ember10"
    When I click on element having id "ember12"
    When I navigate to page "http://localhost:2368/ghost/#/tags"
    When I click on element having css selector "a.gh-btn-green"
    When I enter "$name_1" into input field having id "tag-name"
    When I enter "$name_2" into input field having id "tag-description"
    When I enter "800080" into input field having name "accent-color" 
    When I click on element having css selector "button.gh-btn-blue"
    Then I should see text "Saved"