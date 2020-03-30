Feature: Naukri login Functionality

Scenario: Verify Naukri login succesfully

Given browser window is opened
And user launch Naukri link
And user is on home page
And user clicks Login Button
When user enters username and password
When user clicks login button
Then user is logged into application succesfully
 