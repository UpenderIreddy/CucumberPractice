package StepDefinitions;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class StepHooks {

	WebDriver driver;
	
	//Global hooks
	@Before
	public void setUp(){
		
		System.out.println("Starting the chrome browser");
		
	}
	//Global hooks
	@After
	public void tearDown(){
		
		System.out.println("Closing the browser");
	}

	@Given("^brower is opened$")
	public void browser_Is_Opened() {

		System.setProperty("webdriver.chrome.driver", "C:\\Upender\\browserdrivers\\ChromeDriver\\chromedriver.exe");

		driver = new ChromeDriver();

		driver.manage().window().maximize();

	}
	
	@Then("^URL is launched$")
	public void URL_Is_Launched(){
		
		driver.get("https://www.google.com/");
	}
	
	@Then("^search for Cheese$")
	public void  search_For_Cheese(){
		
		driver.findElement(By.xpath("//input[@title='Search']")).sendKeys("Cheese");
		driver.findElement(By.xpath("//input[@title='Search']")).clear();
		

		
		
	}
	
	@Then("^search for Gmail$")
	public void  search_For_Gmail(){
		
		
		
		driver.findElement(By.xpath("//input[@title='Search']")).sendKeys("Gmail");
		
		
	}
	
}
