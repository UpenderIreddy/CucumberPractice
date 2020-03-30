package MyRunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)

@CucumberOptions(

features =" C:\\Upender\\Cucumber\\CucumberPractice\\src\\main\\java\\Features\\Login.Feature"
,glue={"StepDefinitions"}


)



public class TestRunner {

}
