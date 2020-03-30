package StepDefinitions;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
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

}
