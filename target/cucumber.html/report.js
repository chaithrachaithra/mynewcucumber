$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Feature/parameter.feature");
formatter.feature({
  "line": 1,
  "name": "Login Action",
  "description": "",
  "id": "login-action",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 2,
  "name": "susseccfully Login with Valid Credentialsd",
  "description": "",
  "id": "login-action;susseccfully-login-with-valid-credentialsd",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "the  login page is opened",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "user click on signin link",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "message displayed Login Successfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 9,
  "name": "",
  "description": "",
  "id": "login-action;susseccfully-login-with-valid-credentialsd;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 10,
      "id": "login-action;susseccfully-login-with-valid-credentialsd;;1"
    },
    {
      "cells": [
        "lalitha",
        "Password123"
      ],
      "line": 11,
      "id": "login-action;susseccfully-login-with-valid-credentialsd;;2"
    },
    {
      "cells": [
        "admin",
        "Password456"
      ],
      "line": 12,
      "id": "login-action;susseccfully-login-with-valid-credentialsd;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 11,
  "name": "susseccfully Login with Valid Credentialsd",
  "description": "",
  "id": "login-action;susseccfully-login-with-valid-credentialsd;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "the  login page is opened",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "user click on signin link",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "user enters \"lalitha\" and \"Password123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "message displayed Login Successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "parameterisation.the_login_page_is_opened()"
});
formatter.result({
  "duration": 8964643300,
  "status": "passed"
});
formatter.match({
  "location": "parameterisation.user_click_on_signin_link()"
});
formatter.result({
  "duration": 2665836000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "lalitha",
      "offset": 13
    },
    {
      "val": "Password123",
      "offset": 27
    }
  ],
  "location": "parameterisation.user_enters_and(String,String)"
});
formatter.result({
  "duration": 20650568200,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[@id\u003d\"header\"]/div[1]/div/div/div[2]/div/ul/a\"}\n  (Session info: chrome\u003d77.0.3865.90)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027BDC6-DX-6C2CNK2\u0027, ip: \u0027192.168.140.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_181\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 77.0.3865.90, chrome: {chromedriverVersion: 76.0.3809.126 (d80a294506b4..., userDataDir: C:\\Users\\TRAINI~1.16\\AppDat...}, goog:chromeOptions: {debuggerAddress: localhost:56346}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 2a18660e1da56e8d8ce2ab711ff6b7a1\n*** Element info: {Using\u003dxpath, value\u003d//*[@id\u003d\"header\"]/div[1]/div/div/div[2]/div/ul/a}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat stepdef.parameterisation.user_enters_and(parameterisation.java:37)\r\n\tat ✽.And user enters \"lalitha\" and \"Password123\"(Feature/parameter.feature:5)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "parameterisation.message_displayed_Login_Successfully()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 12,
  "name": "susseccfully Login with Valid Credentialsd",
  "description": "",
  "id": "login-action;susseccfully-login-with-valid-credentialsd;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "the  login page is opened",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "user click on signin link",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "user enters \"admin\" and \"Password456\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "message displayed Login Successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "parameterisation.the_login_page_is_opened()"
});
formatter.result({
  "duration": 4237975500,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: cannot determine loading status\nfrom disconnected: received Inspector.detached event\n  (Session info: chrome\u003d77.0.3865.90)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027BDC6-DX-6C2CNK2\u0027, ip: \u0027192.168.140.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_181\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 77.0.3865.90, chrome: {chromedriverVersion: 76.0.3809.126 (d80a294506b4..., userDataDir: C:\\Users\\TRAINI~1.16\\AppDat...}, goog:chromeOptions: {debuggerAddress: localhost:56376}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: c34e33522240c4af812fe240f54539aa\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\r\n\tat stepdef.parameterisation.the_login_page_is_opened(parameterisation.java:19)\r\n\tat ✽.Given the  login page is opened(Feature/parameter.feature:3)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "parameterisation.user_click_on_signin_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 13
    },
    {
      "val": "Password456",
      "offset": 25
    }
  ],
  "location": "parameterisation.user_enters_and(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "parameterisation.message_displayed_Login_Successfully()"
});
formatter.result({
  "status": "skipped"
});
});