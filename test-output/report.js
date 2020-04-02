$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Upender/Cucumber/CucumberPractice/src/main/java/Features/DataTableFBsignup.feature");
formatter.feature({
  "line": 1,
  "name": "FB signup using Datatable",
  "description": "",
  "id": "fb-signup-using-datatable",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Verify Facebook singup",
  "description": "",
  "id": "fb-signup-using-datatable;verify-facebook-singup",
  "type": "scenario",
  "keyword": "Scenario"
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
  "name": "user enteres firstname and surname and mobilenumber and date and month and year",
  "rows": [
    {
      "cells": [
        "test",
        "test1",
        "01234567989",
        "2",
        "Apr",
        "2020"
      ],
      "line": 8
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user clicks singup button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User gets warning message",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDataTableFbSignup.browser_window_is_Opened()"
});
formatter.result({
  "duration": 7155283900,
  "status": "passed"
});
formatter.match({
  "location": "StepDataTableFbSignup.user_launches_Facebook_URL()"
});
formatter.result({
  "duration": 12476769400,
  "status": "passed"
});
formatter.match({
  "location": "StepDataTableFbSignup.user_enteres_firstname_and_surname_and_mobilenumber_and_date_and_month_and_year(DataTable)"
});
formatter.result({
  "duration": 862427300,
  "status": "passed"
});
formatter.match({
  "location": "StepDataTableFbSignup.user_clicks_singup_button()"
});
formatter.result({
  "duration": 159215000,
  "status": "passed"
});
formatter.match({
  "location": "StepDataTableFbSignup.user_gets_warning_message()"
});
formatter.result({
  "duration": 903227800,
  "status": "passed"
});
});