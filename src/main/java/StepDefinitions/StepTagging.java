package StepDefinitions;

import cucumber.api.java.en.Given;

public class StepTagging {
	
	@Given("^browser is opened$")
	public void browser_is_opened() {
		
		System.out.println("SmokeTest and RegressionTest");
	}

	@Given("^launchedn URL$")
	public void launchedn_URL()  {
	 
		System.out.println("SmokeTest and EndToEndTest");
	}

	@Given("^firstname added$")
	public void firstname_added()  {
		
		System.out.println("SmokeTest");
	   
	}

	@Given("^lastname added$")
	public void lastname_added()  {
		
		System.out.println("SmokeTest and SanityTest");
	   
	}

	@Given("^email address added$")
	public void email_address_added()  {
		
		System.out.println("RegressionTest");
	  
	}

	@Given("^phone number added$")
	public void phone_number_added()  {
		
		System.out.println("EndToEndTest");
	 
	}

	@Given("^Addredd address$")
	public void addredd_address() {
		
		System.out.println("SmokeTest and RegressionTest and Sanitytest and EndToEndTest");
	   
	}

	@Given("^added gender$")
	public void added_gender(){
		
		System.out.println("SanityTest");
	    
	}

	@Given("^clicked singup$")
	public void clicked_singup()  {
		
		System.out.println("SmokeTest");
		
	
	   
	}


}
