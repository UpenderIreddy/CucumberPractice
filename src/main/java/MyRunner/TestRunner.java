package MyRunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)

@CucumberOptions(

//path of the feature file
features = "H:\\Automation Code\\CucumberPractice\\src\\main\\java\\Features\\POMFacebookSingup.feature"
//Path of the Step definition file
,glue={"StepDefinitions"}

// is used to generate different types reporting styles
,plugin = {"pretty","html:test-output","json:Json-output/cucumber.json","junit:junit-output/cucumber.xml"}

// check all the steps of the feature file implemented and allow the code execution and report it as fail if any of the 

// steps of feature file not implemented
,strict =true

// Is used to generate the console output in the readable format
,monochrome = true

// Is used to check all the steps of the feature file implemented on the step definition file, it wont execute the code.
,dryRun =false
//,tags ={"@RegressionTest"}

)



public class TestRunner {

}
