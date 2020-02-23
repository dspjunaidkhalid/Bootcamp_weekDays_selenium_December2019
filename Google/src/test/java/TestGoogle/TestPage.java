package TestGoogle;

import databases.ConnectToSqlDB;
import homepage.Homepage;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.testng.annotations.Test;
import utility.DataReader;

import java.io.IOException;

public class TestPage extends Homepage {


   @Test
    public static void searchFromDatabase() throws Exception {
        setBrowser();
        //System.out.println(ConnectToSqlDB.readDataBase("shuvro","search").get(0));
        for (int i = 0; i< ConnectToSqlDB.readDataBase("junaid","search").size(); i++) {
            driver.findElement(By.xpath(searchBox)).sendKeys(ConnectToSqlDB.readDataBase("junaid","search").get(i), Keys.ENTER);
            sleepFor(2);
            navigateBack();
            sleepFor(2);
        }


    }

@Test
    public static void searchFromTable() throws IOException, InterruptedException {
//public static void main(String[] args) throws IOException {


        setBrowser();
        //System.out.println(ConnectToSqlDB.readDataBase("shuvro","search").get(0));
        String[] [] file = DataReader.fileReader1("/Users/junaidkhalid/IdeaProjects/Bootcamp_weekDays_selenium_December2019/Generic/src/main/java/fileReader/FileReader.xls",0) ;
        for (int i = 0; i< file.length; i++) {
            System.out.println(file[i] [0] +" ");
            driver.findElement(By.xpath(searchBox)).sendKeys(file[i] [0], Keys.ENTER);
            sleepFor(2);
            navigateBack();
            sleepFor(2);

        }


    }

}
