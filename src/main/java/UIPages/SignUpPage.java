package UIPages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.ui.Select;

public class SignUpPage {

	WebDriver driver;

	public SignUpPage(WebDriver driver) {

		this.driver = driver;
	}

	// Using normal approach or without page factory
	// here By is a class and xpath is a static method

	/*
	 * By Firstname = By.xpath("//input[@name='firstname']");
	 * 
	 * By Surname = By.xpath("//input[@name='lastname']");
	 * 
	 * By Mobilenumber = By.id("u_0_r");
	 * 
	 * By Date = By.id("day");
	 * 
	 * By Month = By.id("month");
	 * 
	 * By Year = By.id("year");
	 * 
	 * By SingupButton = By.id("u_0_13");
	 */

	// Using Page Factory

	// @FindBy is an annotation

	/*
	 * @FindBy(xpath = "//input[@name='firstname']") WebElement Firstname;
	 * 
	 * @FindBy(xpath = "//input[@name='lastname']") WebElement Surname;
	 * 
	 * @FindBy(id = "u_0_r") WebElement Mobilenumber;
	 * 
	 * @FindBy(id = "day") WebElement Day;
	 * 
	 * @FindBy(id = "month") WebElement Month;
	 * 
	 * @FindBy(id = "year") WebElement year;
	 * 
	 * @FindBy(id = "u_0_13") WebElement SignupButton;
	 */

	// here How is a class and xpath is a static variable and using is another
	// variable

	@FindBy(how = How.XPATH, using = "//input[@name='firstname']")
	WebElement Firstname;

	@FindBy(how = How.XPATH, using = "//input[@name='lastname']")
	WebElement Surname;

	@FindBy(how = How.ID, using = "u_0_r")

	WebElement Mobilenumber;

	@FindBy(how = How.ID, using = "day")
	WebElement Day;

	@FindBy(how = How.ID, using = "month")

	WebElement Month;

	@FindBy(how = How.ID, using = "year")

	WebElement Year;

	@FindBy(how = How.ID, using = "u_0_13")

	WebElement SingupButton;

	public void typeFirstname(String firstname) {

		Firstname.sendKeys(firstname);
	}

	public void typeSurname(String surname) {

		Surname.sendKeys(surname);

	}

	public void typeMobileNumber(String mobilenumber) {

		Mobilenumber.sendKeys(mobilenumber);
	}

	public void selectDay(String day) {

		Select seldate = new Select(Day);

		seldate.selectByValue(day);

	}

	public void selectMonth(String month) {

		Select selmonth = new Select(Month);

		selmonth.selectByVisibleText(month);

	}

	public void SelectYear(String year) {

		Select selyear = new Select(Year);

		selyear.selectByValue(year);

	}

	public void clickSignupButton() {

		SingupButton.click();
	}
}
