package homepage;

import org.openqa.selenium.chrome.ChromeDriver;
import webelements.WebElement;

public class Homepage extends WebElement {
    public static void setBrowser(){
        System.setProperty("webdriver.chrome.driver","BrowserDriver/mac/chromedriver");
        driver=new ChromeDriver();
        driver.navigate().to("https://www.google.com/");
        driver.manage().window().maximize();
    }
}

