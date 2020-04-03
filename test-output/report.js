$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("H:/Automation Code/CucumberPractice/src/main/java/Features/Hooks.feature");
formatter.feature({
  "line": 1,
  "name": "Use of Hooks",
  "description": "",
  "id": "use-of-hooks",
  "keyword": "Feature"
});
formatter.before({
  "duration": 330700,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Verify Hooks",
  "description": "",
  "id": "use-of-hooks;verify-hooks",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "brower is opened",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "URL is launched",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "search for Cheese",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "search for Gmail",
  "keyword": "Then "
});
formatter.match({
  "location": "StepHooks.browser_Is_Opened()"
});
formatter.result({
  "duration": 8708315400,
  "status": "passed"
});
formatter.match({
  "location": "StepHooks.URL_Is_Launched()"
});
formatter.result({
  "duration": 3536987800,
  "status": "passed"
});
formatter.match({
  "location": "StepHooks.search_For_Cheese()"
});
formatter.result({
  "duration": 333696000,
  "status": "passed"
});
formatter.match({
  "location": "StepHooks.search_For_Gmail()"
});
formatter.result({
  "duration": 112068000,
  "status": "passed"
});
formatter.after({
  "duration": 110300,
  "status": "passed"
});
});