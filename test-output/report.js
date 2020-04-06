$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("H:/Automation Code/CucumberPractice/src/main/java/Features/POMFacebookSingup.feature");
formatter.feature({
  "line": 1,
  "name": "Verify Facebook signup using POM",
  "description": "",
  "id": "verify-facebook-signup-using-pom",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Provide Signup details for Facebook",
  "description": "",
  "id": "verify-facebook-signup-using-pom;provide-signup-details-for-facebook",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "browser window is Opened",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user launches Facebook URL",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enteres \"\u003cfirstname\u003e\" and \"\u003csurname\u003e\" and \"\u003cmobilenumber\u003e\" and \"\u003cdate\u003e\" and \"\u003cmonth\u003e\" and \"\u003cyear\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user clicks singup button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User gets warning message",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "verify-facebook-signup-using-pom;provide-signup-details-for-facebook;",
  "rows": [
    {
      "cells": [
        "firstname",
        "",
        "surname",
        "",
        "mobilenumber",
        "",
        "date",
        "",
        "month",
        "",
        "year"
      ],
      "line": 12,
      "id": "verify-facebook-signup-using-pom;provide-signup-details-for-facebook;;1"
    },
    {
      "cells": [
        "test123",
        "",
        "test1",
        "",
        "0123456789",
        "",
        "2",
        "",
        "Apr",
        "",
        "2020"
      ],
      "line": 13,
      "id": "verify-facebook-signup-using-pom;provide-signup-details-for-facebook;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 758800,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Provide Signup details for Facebook",
  "description": "",
  "id": "verify-facebook-signup-using-pom;provide-signup-details-for-facebook;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "browser window is Opened",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user launches Facebook URL",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enteres \"test123\" and \"test1\" and \"0123456789\" and \"2\" and \"Apr\" and \"2020\"",
  "matchedColumns": [
    0,
    2,
    4,
    6,
    8,
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user clicks singup button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User gets warning message",
  "keyword": "Then "
});
formatter.match({
  "location": "StepPOMFacebookSignUP.browser_window_is_Opened()"
});
formatter.result({
  "duration": 17098485500,
  "status": "passed"
});
formatter.match({
  "location": "StepPOMFacebookSignUP.user_launches_Facebook_URL()"
});
formatter.result({
  "duration": 6316596700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test123",
      "offset": 14
    },
    {
      "val": "test1",
      "offset": 28
    },
    {
      "val": "0123456789",
      "offset": 40
    },
    {
      "val": "2",
      "offset": 57
    },
    {
      "val": "Apr",
      "offset": 65
    },
    {
      "val": "2020",
      "offset": 75
    }
  ],
  "location": "StepPOMFacebookSignUP.user_enteres_and_and_and_and_and(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 5393200,
  "error_message": "java.lang.NullPointerException\r\n\tat UIPages.SignUpPage.typeFirstname(SignUpPage.java:91)\r\n\tat StepDefinitions.StepPOMFacebookSignUP.user_enteres_and_and_and_and_and(StepPOMFacebookSignUP.java:54)\r\n\tat ✽.And user enteres \"test123\" and \"test1\" and \"0123456789\" and \"2\" and \"Apr\" and \"2020\"(H:/Automation Code/CucumberPractice/src/main/java/Features/POMFacebookSingup.feature:7)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "StepPOMFacebookSignUP.user_clicks_singup_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepPOMFacebookSignUP.user_gets_warning_message()"
});
formatter.result({
  "status": "skipped"
});
});