package Runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features ="Feature//parameter.feature",glue= {"stepdef"},plugin= {"html:target/cucumber.html"},tags = {"@SmokeTest", "~@End2End"})

public class runner1 {

}
