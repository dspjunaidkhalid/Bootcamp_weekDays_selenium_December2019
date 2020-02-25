Feature: Check if the Home page of Practice: Lets Kode it works

  Background:
    Given Open Practice: Lets Kode it with chrome browser

  Scenario: Click on Open Window Tab and see it we can transfer to new window
    When Click on Open Window Tab under Switch Window Example
    Then Transfer to new Window
    Then  Click on Webdriver Tab from new Window
    And Close the browser

  Scenario: Click on Switch Tab and see it we can transfer to new window
    When Click on Open Tab under Switch Tab Example
    Then Transfer to new Tab
    Then  Click on something from new Tab
    And Close the browser

  Scenario: Click on Alert Handling and see if we can accept the alert.
    When Click on Alert Comfirm button under Switch Alert Example
    Then  Click on Ok to accept from Alert popup
    And Close the browser

  Scenario: Click on Alert Handling and see if we can cancel the alert.
    When Click on Alert Comfirm button under Switch Alert Example
    Then  Click on cancel to dismiss from Alert popup
    And Close the browser

  Scenario: Click on the Web Table and see if we can verify the text of table
    When  Click on the Web Table from Web Table Example Tab
    Then  Get all text from the Table and print them in the console
    And Close the browser

  Scenario: Check if the Select from dropdown works
    When Click on the DropDown bar
    Then Select Benz from DropDown
    And Close the browser

  Scenario: Check if the Multiple Select from dropdown works
    When Click on the Multiple select from DropDown bar
    Then Select Apple and Orange from DropDown
    And Close the browser
