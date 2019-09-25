Feature: Login Feature
Scenario: user enter username and password
Given the login page is opened
When user enter lalitha as username
And user enter password123 as password
Then user will finds a testmeapp homepage
And user click on signout to exit the app