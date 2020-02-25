package stepDefinitions;

import common.WebAPI;
import homepage.HomepageWebElement;
import io.cucumber.java.en.*;

public class practice extends HomepageWebElement {

    @Given("Open Practice: Lets Kode it with chrome browser")
    public void open_Practice_Lets_Kode_it_with_chrome_browser() {
        getLocalDriver("mac", "chrome");
        driver.get("https://learn.letskodeit.com/p/practice.com");

    }

    @When("Click on Open Window Tab under Switch Window Example")
    public void click_on_Open_Window_Tab_under_Switch_Window_Example() throws InterruptedException {
        clickOnElement(xPathPracticeSwitchWindowTab);
        newWindows();
        sleepFor(2);
    }
    @Then("Transfer to new Window")
    public void transfer_to_new_Window() throws InterruptedException {
        newWindows();
        sleepFor(2);
    }


    @Then("Click on Webdriver Tab from new Window")
    public void click_on_Webdriver_Tab_from_new_Window() {
        clickOnElement(xPathPracticeSwitchWindowSelectFromNewWindow);

    }

    @Then("Close the browser")
    public void close_the_browser() {
        driver.close();

    }


    @When("Click on Open Tab under Switch Tab Example")
    public void click_on_Open_Tab_under_Switch_Tab_Example() {
        clickOnElement(xPathPracticeOpenNewTab);
    }

    @Then("Transfer to new Tab")
    public void transfer_to_new_Tab() {
        handleNewTab(driver);
    }


    @Then("Click on something from new Tab")
    public void click_on_something_from_new_Tab() {
        clickOnElement(xPathPracticeFromTabSelectSomething);
    }



    @When("Click on Alert Comfirm button under Switch Alert Example")
    public void click_on_Alert_Comfirm_button_under_Switch_Alert_Example() throws InterruptedException {
        clickOnElement(xPathPracticeAlertConfirmButton);
        sleepFor(2);

    }

    @Then("Click on Ok to accept from Alert popup")
    public void click_on_Ok_to_accept_from_Alert_popup() {
        okAlert();
    }


    @Then("Click on cancel to dismiss from Alert popup")
    public void click_on_cancel_to_dismiss_from_Alert_popup() {
        cancelAlert();
    }



    @When("Click on the Web Table from Web Table Example Tab")
    public void click_on_the_Web_Table_from_Web_Table_Example_Tab() throws InterruptedException {
        sleepFor(2);
        scrollUpDown(2500);
    }

    @Then("Get all text from the Table and print them in the console")
    public void get_all_text_from_the_Table_and_print_them_in_the_console() throws InterruptedException {
        getListOfWebElementsByXpath(xPathPracticeWebElemetTable);
        sleepFor(2);
    }



    @When("Click on the DropDown bar")
    public void click_on_the_DropDown_bar() throws InterruptedException {
        sleepFor(2);
        selectFromDropByValue(webElemetSelectButton, "Benz");

    }

    @Then("Select Benz from DropDown")
    public void select_Benz_from_DropDown() throws InterruptedException {
        sleepFor(3);
    }



    @When("Click on the Multiple select from DropDown bar")
    public void click_on_the_Multiple_select_from_DropDown_bar() throws InterruptedException {
        sleepFor(2);

    }

    @Then("Select Apple and Orange from DropDown")
    public void select_Apple_and_Orange_from_DropDown() throws InterruptedException {
        selectFromMultipleDrop(webElemetSelectMultiButton, "apple", "orange");
        sleepFor(3);
    }

}

