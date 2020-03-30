package StepDefinitions;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class StepLoginFunctionality {

	WebDriver driver;

	@Given("^browser window is opened$")
	public void browserWindowIsOpened() {

		System.setProperty("webdriver.chrome.driver", "C:\\Upender\\browserdrivers\\ChromeDriver\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().window().maximize();

	}

	@And("^user launch Naukri link$")
	public void UserLaunchNaukriLink() {

		driver.get("https://www.naukri.com/");

		if (driver.getCurrentUrl().isEmpty()) {

			System.out.println("URL is not launched");
		}

	}

	@And("^user is on home page$")
	public void UserIsOnHomePage() {

		String title = driver.getTitle();

		System.out.println(title);

	}

	@And("^user clicks Login Button$")

	public void UserClicksLoginButton() {

		driver.findElement(By.id("login_Layer")).click();

	}

	@When("^user enters username and password$")
	public void user_enters_username_and_password() {

		driver.findElement(By.id("eLoginNew")).sendKeys("Upender.ireddy@gmail.com");

		driver.findElement(By.id("pLogin")).sendKeys("Naukri@2012");

	}

	@When("^user clicks login button$")
	public void user_clicks_login_button() {

		driver.findElement(By.xpath("//button[@value='Login']")).click();
	}

	@Then("^user is logged into application succesfully$")
	public void user_is_logged_into_application_succesfully() {

		if (driver.findElement(By.xpath("//input[@type='text']")).isDisplayed()) {

			System.out.println("Logged in sucessfully");
		}

	}

}
