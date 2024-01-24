# Content at Scale (CaS) Automation Docmentation

## Overview 

This is a tool that uses AI to write content. It discusses the challenges of scaling content creation, and it can produce high-quality, original content that reads like it was written by a human. It can also be used to create content in multiple languages. Content at Scale is cheaper than hiring human writers, and it can save time. Overall, Content at Scale is a powerful tool that can help businesses create more content and reach a wider audience.


## Project Setup and Execution

1. Retrieve a repository from my GitHub by cloning it https://github.com/muhammadfaiq-af/CaS-ai-PlaywrightConnect your Github account 

2. Launch VS Code and navigate to the cloned repository. In the terminal, execute the command npm i to install the project dependencies.

3. Next, install Playwright by running the command npm init playwright@latest This will install the latest version of Playwright.

4. Once installed, execute the command npx playwright test to run all tests in headless mode, where the UI is not visible and the tests run in the terminal.

5. To run tests in headed mode, where the UI is visible, use the command npx playwright test --headed

6. If you wish to run a specific file, such as "Login.spec.js" in your project, use the command npx playwright test Login.spec.js to run the file in headless mode. For headed mode, simply add --headed to the command.

## Playwright Reports

1. After Running the tests we can generate different reports for it 

2. We have different types of reports in Playwright

Dot, HTML, Line, junit, JSON in which HTML report is by default playwright-generated

we can generate html report by using this command after the execution of tests npx playwright show-report

3. For other reports, we can generate them with 2 methods one is with the playwright.config file and others on the terminal 

    a. For the first method, we need to add those reports (Line, dot, and HTML) in the Playwright. config file, the report will be visible in the terminal only

    b. For JSON and junit reports we have to create separate files for them or we can create a folder and specify in the playwright .config file, that both reports should be created there 

## The second method is to execute these reports in the terminal, we can execute them by using this command 

`npx playwright test --reporter json or npx playwright test --reporter=json` 

`npx playwright test --reporter dot or npx playwright test --reporter=dot`

`npx playwright test --reporter list or npx playwright test --reporter=list`

`npx playwright test --reporter line or npx playwright test --reporter=line`

Now Playwright has provided us with external Reports as well by which we can generate reports for our use, and if we want to show to the clients the external reports are very helpful for us, So one is a very common and popular report called “Allure Report“, we have others as well but for now I am just mentioning Allure because it is very commonly used reports 

## So For Generating the Allure Report First of all we have to set the env variable in our PC.

1. Down and install Java Development Kit (JDK) on your PC 

2. Go to the start Search “Edit the system environment“ and click on it

3. In the advance tab click on the “Environment Variables“ then click on the “New“ Button to give the name in the system variables section “JAVA_HOME“ and in the Variable value give the path where you have downloaded JDK and click ok

4. After that double click on the path add “%JAVA_HOME%\bin“ and click OK

Now the env variable has been set to get back to the VS Code and for Allure reports, we have to install the Allure report in the playwright 

## Here are the steps to set and execute the Allure report

1. `npm i -D experimental-allure-playwright`

2. `npm i -D allure-commandline`

3. To generate the report, `npx allure generate ./allure-report --clean`  in which “allure-results“ is the folder you can give other names as well 

4. To Open the report, `npx allure open ./allure-report`


## Methodologies

   [Editor]: <https://code.visualstudio.com/>
   [node.js]: <http://nodejs.org>
   [Git Bash]: <https://git-scm.com/downloads/>
   [javascript]: <https://www.javascript.com/>
   [Playwrihgt]: <https://playwright.dev/>
   [Allure Report]: <https://allurereport.org/>

