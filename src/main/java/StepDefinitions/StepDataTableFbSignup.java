package StepDefinitions;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.Select;

import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class StepDataTableFbSignup {

	WebDriver driver;

	@Given("^browser window is Opened$")
	public void browser_window_is_Opened() {

		System.setProperty("webdriver.chrome.driver", "C:\\Upender\\browserdrivers\\ChromeDriver\\chromedriver.exe");

		driver = new ChromeDriver();

		driver.manage().window().maximize();

	}

	@When("^user launches Facebook URL$")
	public void user_launches_Facebook_URL() {

		driver.get("https://www.facebook.com/");
		System.out.println(driver.getTitle());

	}

	@When("^user enteres firstname and surname and mobilenumber and date and month and year$")
	public void user_enteres_firstname_and_surname_and_mobilenumber_and_date_and_month_and_year(DataTable details) {

		List<List<String>> signupdata = details.raw();

		driver.findElement(By.xpath("//input[@name='firstname']")).sendKeys(signupdata.get(0).get(0));
		driver.findElement(By.xpath("//input[@name='lastname']")).sendKeys(signupdata.get(0).get(1));
		driver.findElement(By.id("u_0_r")).sendKeys(signupdata.get(0).get(2));
		Select datesel = new Select(driver.findElement(By.id("day")));
		datesel.selectByValue(signupdata.get(0).get(3));
		Select monthsel = new Select(driver.findElement(By.id("month")));
		monthsel.selectByVisibleText(signupdata.get(0).get(4));
		Select yearsel = new Select(driver.findElement(By.id("year")));
		yearsel.selectByValue(signupdata.get(0).get(5));

	}

	@When("^user clicks singup button$")
	public void user_clicks_singup_button() {
		// Write code here that turns the phrase above into concrete actions

		driver.findElement(By.id("u_0_13")).click();

	}

	@Then("^User gets warning message$")
	public void user_gets_warning_message() {
		// Write code here that turns the phrase above into concrete actions

		System.out.println(driver.getTitle());
		driver.quit();
	}
}
