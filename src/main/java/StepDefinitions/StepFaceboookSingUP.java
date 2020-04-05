/*package StepDefinitions;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.Select;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class StepFaceboookSingUP {

	WebDriver driver;

	@Given("^browser window is Opened$")
	public void browser_window_is_Opened() {

		System.setProperty("webdriver.chrome.driver", "C:\\Upender\\browserdrivers\\ChromeDriver\\chromedriver.exe");

		driver = new ChromeDriver();

		driver.manage().window().maximize();
		
		driver.manage().deleteAllCookies();

	}

	@When("^user launches Facebook URL$")
	public void user_launches_Facebook_URL() {

		driver.get("https://www.facebook.com/");
		System.out.println(driver.getTitle());

	}

	@When("^user enteres \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_enteres_and_and_and_and_and(String firstname, String surname, String mobilenumber, String date,
			String month, String year) {

		driver.findElement(By.xpath("//input[@name='firstname']")).sendKeys(firstname);
		driver.findElement(By.xpath("//input[@name='lastname']")).sendKeys(surname);
		driver.findElement(By.id("u_0_r")).sendKeys(mobilenumber);
		Select datesel = new Select(driver.findElement(By.id("day")));
		datesel.selectByValue(date);
		Select monthsel = new Select(driver.findElement(By.id("month")));
		monthsel.selectByVisibleText(month);
		Select yearsel = new Select(driver.findElement(By.id("year")));
		yearsel.selectByValue(year);

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
*/