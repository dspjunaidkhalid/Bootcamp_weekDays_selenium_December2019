$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:feature/practice.feature");
formatter.feature({
  "name": "Check if the Home page of Practice: Lets Kode it works",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "Open Practice: Lets Kode it with chrome browser",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.practice.open_Practice_Lets_Kode_it_with_chrome_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Click on Open Window Tab and see it we can transfer to new window",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "Click on Open Window Tab under Switch Window Example",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.practice.click_on_Open_Window_Tab_under_Switch_Window_Example()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Transfer to new Window",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.practice.transfer_to_new_Window()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Webdriver Tab from new Window",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.practice.click_on_Webdriver_Tab_from_new_Window()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"/html/body/div/div/div/div[2]/div[1]/div/div[1]/a/div/div[1]/img\"}\n  (Session info: chrome\u003d80.0.3987.122)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Junaids-MacBook-Pro.local\u0027, ip: \u00272604:2000:1303:129:0:6b49:40d1:f4a1%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15.3\u0027, java.version: \u002713.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 80.0.3987.122, chrome: {chromedriverVersion: 80.0.3987.106 (f68069574609..., userDataDir: /var/folders/zg/bfjvvnls631...}, goog:chromeOptions: {debuggerAddress: localhost:53924}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 86f7d1048b0e857f35d2d9baa0b103b6\n*** Element info: {Using\u003dxpath, value\u003d/html/body/div/div/div/div[2]/div[1]/div/div[1]/a/div/div[1]/img}\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat common.WebAPI.clickOnElement(WebAPI.java:201)\n\tat stepDefinitions.practice.click_on_Webdriver_Tab_from_new_Window(practice.java:31)\n\tat ✽.Click on Webdriver Tab from new Window(file:///Users/junaidkhalid/IdeaProjects/Bootcamp_weekDays_selenium_December2019/Practice_lets_kode_it/feature/practice.feature:9)\n",
  "status": "failed"
});
formatter.step({
  "name": "Close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.practice.close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "Open Practice: Lets Kode it with chrome browser",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.practice.open_Practice_Lets_Kode_it_with_chrome_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Click on Switch Tab and see it we can transfer to new window",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "Click on Open Tab under Switch Tab Example",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.practice.click_on_Open_Tab_under_Switch_Tab_Example()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Transfer to new Tab",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.practice.transfer_to_new_Tab()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on something from new Tab",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.practice.click_on_something_from_new_Tab()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.practice.close_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "Open Practice: Lets Kode it with chrome browser",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.practice.open_Practice_Lets_Kode_it_with_chrome_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Click on Alert Handling and see if we can accept the alert.",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "Click on Alert Comfirm button under Switch Alert Example",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.practice.click_on_Alert_Comfirm_button_under_Switch_Alert_Example()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Ok to accept from Alert popup",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.practice.click_on_Ok_to_accept_from_Alert_popup()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.practice.close_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "Open Practice: Lets Kode it with chrome browser",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.practice.open_Practice_Lets_Kode_it_with_chrome_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Click on Alert Handling and see if we can cancel the alert.",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "Click on Alert Comfirm button under Switch Alert Example",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.practice.click_on_Alert_Comfirm_button_under_Switch_Alert_Example()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on cancel to dismiss from Alert popup",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.practice.click_on_cancel_to_dismiss_from_Alert_popup()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.practice.close_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "Open Practice: Lets Kode it with chrome browser",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.practice.open_Practice_Lets_Kode_it_with_chrome_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Click on the Web Table and see if we can verify the text of table",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "Click on the Web Table from Web Table Example Tab",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.practice.click_on_the_Web_Table_from_Web_Table_Example_Tab()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Get all text from the Table and print them in the console",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.practice.get_all_text_from_the_Table_and_print_them_in_the_console()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.practice.close_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "Open Practice: Lets Kode it with chrome browser",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.practice.open_Practice_Lets_Kode_it_with_chrome_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Check if the Select from dropdown works",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "Click on the DropDown bar",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.practice.click_on_the_DropDown_bar()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: Cannot locate option with value: Benz\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Junaids-MacBook-Pro.local\u0027, ip: \u00272604:2000:1303:129:0:6b49:40d1:f4a1%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15.3\u0027, java.version: \u002713.0.1\u0027\nDriver info: driver.version: unknown\n\tat org.openqa.selenium.support.ui.Select.findOptionsByValue(Select.java:283)\n\tat org.openqa.selenium.support.ui.Select.selectByValue(Select.java:186)\n\tat common.WebAPI.selectFromDropByValue(WebAPI.java:742)\n\tat stepDefinitions.practice.click_on_the_DropDown_bar(practice.java:97)\n\tat ✽.Click on the DropDown bar(file:///Users/junaidkhalid/IdeaProjects/Bootcamp_weekDays_selenium_December2019/Practice_lets_kode_it/feature/practice.feature:34)\n",
  "status": "failed"
});
formatter.step({
  "name": "Select Benz from DropDown",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.practice.select_Benz_from_DropDown()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.practice.close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "Open Practice: Lets Kode it with chrome browser",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.practice.open_Practice_Lets_Kode_it_with_chrome_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Check if the Multiple Select from dropdown works",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "Click on the Multiple select from DropDown bar",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.practice.click_on_the_Multiple_select_from_DropDown_bar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Select Apple and Orange from DropDown",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.practice.select_Apple_and_Orange_from_DropDown()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.practice.close_the_browser()"
});
formatter.result({
  "status": "passed"
});
});