Feature: Invite new people to staff

  @user1 @web
  Scenario: As a user I want to invite a new people to the staff to manage the site
    Given I navigate to page "http://localhost:2368/ghost/"
    When I enter "<USER>" into input field having id "ember8"
    When I enter "<PASSWORD>" into input field having id "ember10"
    When I click on element having id "ember12"
    When I navigate to page "http://localhost:2368/ghost/#/staff"
    When I click on element having css selector "button.gh-btn-green"
    When I enter "$email_1" into input field having name "email"
    When I click on element having css selector ".modal-footer>button.gh-btn-green"
    Then I should see text "Saved"