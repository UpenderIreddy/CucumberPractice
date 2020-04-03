$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Upender/Cucumber/CucumberPractice/src/main/java/Features/Tagging.feature");
formatter.feature({
  "line": 1,
  "name": "Verify Tagging Functionality",
  "description": "",
  "id": "verify-tagging-functionality",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "browser",
  "description": "",
  "id": "verify-tagging-functionality;browser",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@SmokeTest"
    },
    {
      "line": 3,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "browser is opened",
  "keyword": "Given "
});
formatter.match({
  "location": "StepTagging.browser_is_opened()"
});
formatter.result({
  "duration": 143759500,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Add email adress",
  "description": "",
  "id": "verify-tagging-functionality;add-email-adress",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 19,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "email address added",
  "keyword": "Given "
});
formatter.match({
  "location": "StepTagging.email_address_added()"
});
formatter.result({
  "duration": 252000,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "add phone number",
  "description": "",
  "id": "verify-tagging-functionality;add-phone-number",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 23,
      "name": "@EndToEndTest"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "phone number added",
  "keyword": "Given "
});
formatter.match({
  "location": "StepTagging.phone_number_added()"
});
formatter.result({
  "duration": 251100,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "Add address",
  "description": "",
  "id": "verify-tagging-functionality;add-address",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 27,
      "name": "@SmokeTest"
    },
    {
      "line": 27,
      "name": "@RegressionTest"
    },
    {
      "line": 27,
      "name": "@EndToEndTest"
    },
    {
      "line": 27,
      "name": "@SanityTest"
    }
  ]
});
formatter.step({
  "line": 29,
  "name": "Addredd address",
  "keyword": "Given "
});
formatter.match({
  "location": "StepTagging.addredd_address()"
});
formatter.result({
  "duration": 282500,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "Add Gender",
  "description": "",
  "id": "verify-tagging-functionality;add-gender",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 31,
      "name": "@SanityTest"
    }
  ]
});
formatter.step({
  "line": 33,
  "name": "added gender",
  "keyword": "Given "
});
formatter.match({
  "location": "StepTagging.added_gender()"
});
formatter.result({
  "duration": 282500,
  "status": "passed"
});
});