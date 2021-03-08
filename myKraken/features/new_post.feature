Feature: Create new post

  @user1 @web
  Scenario: As a user I want to create a new post to add content to the site
    Given I navigate to page "http://localhost:2368/ghost/"
    When I enter "<USER>" into input field having id "ember8"
    When I enter "<PASSWORD>" into input field having id "ember10"
    When I click on element having id "ember12"
    When I click on element having css selector "a.gh-nav-new-post"
    When I enter "$name_1" into input field having css selector "textarea.gh-editor-title"
    When I enter "$name_2" into input field having css selector "div.koenig-editor__editor"
    When I click on element having css selector "div.gh-publishmenu-trigger"
    When I click on element having css selector "button.gh-publishmenu-button"
    Then I should see text "Published"
    
