Feature: Onliner login

  Scenario Outline: As a user, I can log into the secure area for <username>

    Given I navigate to the https://www.onliner.by/ page
    When I click on "Home Page > Header > Enter Button" webElement
    And I login with <username> and <password>
    Then I should see a flash message saying <message>

    Examples:
      | username | password             | message                        |
      | tomsmith | SuperSecretPassword! | Неверный логин или пароль |
      # | foobar   | barfoo               | Неверный логин или пароль      |
