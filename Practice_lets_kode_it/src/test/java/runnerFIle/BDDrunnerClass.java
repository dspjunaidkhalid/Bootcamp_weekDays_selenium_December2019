package runnerFIle;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(features = "/Users/junaidkhalid/IdeaProjects/Bootcamp_weekDays_selenium_December2019/Practice_lets_kode_it/feature",
        glue = "stepDefinitions",
        dryRun = false,
        monochrome = true,
        plugin = {"pretty", "html:test-output"})

public class BDDrunnerClass {
}
