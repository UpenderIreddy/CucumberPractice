$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Upender/Cucumber/CucumberPractice/src/main/java/Features/Login.Feature");
formatter.feature({
  "line": 1,
  "name": "Naukri login Functionality",
  "description": "",
  "id": "naukri-login-functionality",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Verify Naukri login succesfully",
  "description": "",
  "id": "naukri-login-functionality;verify-naukri-login-succesfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "browser window is opened",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user launch Naukri link",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user is on home page",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user clicks Login Button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user enters username and password",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "user clicks login button",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "user is logged into application succesfully",
  "keyword": "Then "
});
formatter.match({
  "location": "StepLoginFunctionality.browserWindowIsOpened()"
});
formatter.result({
  "duration": 13947061000,
  "status": "passed"
});
formatter.match({
  "location": "StepLoginFunctionality.UserLaunchNaukriLink()"
});
formatter.result({
  "duration": 11834745000,
  "status": "passed"
});
formatter.match({
  "location": "StepLoginFunctionality.UserIsOnHomePage()"
});
formatter.result({
  "duration": 7985600,
  "status": "passed"
});
formatter.match({
  "location": "StepLoginFunctionality.UserClicksLoginButton()"
});
formatter.result({
  "duration": 620489200,
  "status": "passed"
});
formatter.match({
  "location": "StepLoginFunctionality.user_enters_username_and_password()"
});
formatter.result({
  "duration": 2632786500,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"id\",\"selector\":\"eLoginNew\"}\n  (Session info: chrome\u003d80.0.3987.149)\n  (Driver info: chromedriver\u003d2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb),platform\u003dWindows NT 10.0.18362 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-VEBCP6I\u0027, ip: \u0027192.168.1.9\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_131\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.38.552522 (437e6fbedfa876..., userDataDir: C:\\Users\\lenovo\\AppData\\Loc...}, cssSelectorsEnabled: true, databaseEnabled: false, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 80.0.3987.149, webStorageEnabled: true}\nSession ID: b179dd0e72323dc2b1d7ecf69a7119de\n*** Element info: {Using\u003did, value\u003deLoginNew}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat StepDefinitions.StepLoginFunctionality.user_enters_username_and_password(StepLoginFunctionality.java:58)\r\n\tat ✽.When user enters username and password(C:/Upender/Cucumber/CucumberPractice/src/main/java/Features/Login.Feature:9)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "StepLoginFunctionality.user_clicks_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});