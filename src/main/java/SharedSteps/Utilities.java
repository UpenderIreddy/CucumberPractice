package SharedSteps;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Properties;

import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class Utilities {

	static WebDriver driver;
	static File f;
	static FileInputStream fis;
	static Properties prop;


	public static void browserOpen(String browser) {

		if (browser.equalsIgnoreCase("Chrome")) {

			System.setProperty("webdriver.chrome.driver",
					"C:\\Upender\\browserdrivers\\ChromeDriver\\chromedriver.exe");

			driver = new ChromeDriver();

			driver.manage().window().maximize();

			driver.manage().deleteAllCookies();

		}

	}

	public static void readProperties() {

		f = new File("H:\\Automation Code\\CucumberPractice\\src\\main\\java\\TestData\\Config.properties");

		try {
			fis = new FileInputStream(f);

		} catch (FileNotFoundException e) {

			System.out.println(e);
		}

		prop = new Properties();

		try {
			prop.load(fis);
		} catch (Exception e) {

			e.toString();
		}

	}

	public static void launchURL() {

		driver.get(prop.getProperty("URL"));
	}

	public static void ReadExcel() throws IOException {

		f = new File("H:\\Automation Code\\CucumberPractice\\src\\main\\java\\TestData\\AppData.xlsx");

		fis = new FileInputStream(f);
		XSSFWorkbook wb = new XSSFWorkbook(fis);
		XSSFSheet sheet =wb.getSheetAt(0);

	}

}
