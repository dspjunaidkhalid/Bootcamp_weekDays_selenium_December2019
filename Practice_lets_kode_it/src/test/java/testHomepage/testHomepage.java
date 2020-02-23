package testHomepage;

import homepage.Homepage;
import org.openqa.selenium.support.PageFactory;
import org.testng.annotations.Test;

public class testHomepage extends Homepage {

    static Homepage homepage;


    //PageFactory
    public void getInItElements() {
        homepage = PageFactory.initElements(driver, Homepage.class);
    }


    //This is for practice:lets code it
    @Test
    public void testNewWindowOpen() throws InterruptedException {
        getInItElements();
        clickOnElement(xPathPracticeSwitchWindowTab);
        sleepFor(2);
        newWindows();
    }

    @Test
    public void testNewTabOpen() {
        getInItElements();
        clickOnElement(xPathPracticeOpenNewTab);
        handleNewTab(driver);
        clickOnElement(xPathPracticeFromTabSelectSomething);
    }

    @Test
    public void testAlertHandlingAccept() throws InterruptedException {
        getInItElements();
        clickOnElement(xPathPracticeAlertConfirmButton);
        sleepFor(2);
        okAlert();
    }

    @Test
    public void testAlertHandlingDismiss() throws InterruptedException {
        getInItElements();
        clickOnElement(xPathPracticeAlertConfirmButton);
        sleepFor(2);
        cancelAlert();
    }

    @Test
    public void getTable() throws InterruptedException {
        getInItElements();
        sleepFor(2);
        scrollUpDown(2500);
        getListOfWebElementsByXpath(xPathPracticeWebElemetTable);
        sleepFor(2);

    }

}
