const {test, expect} = require('@playwright/test')
import {LoginPage} from '../Selectors/Common' 

const randomDate = Date.now()
const randomName = `testProject${randomDate}`

const createProjectSelectors = require('../Selectors/CreatingProjectPage.js')

const {openProjectForm, projectName, projectUrl, projectContext, monthlyPost, targetAudience, toneOfVoice, wordsCount, createProjectButton, projectNavBar} = createProjectSelectors 


test ('Verify that the user is able to create a Project', async ({page}) => {

    const login = new LoginPage(page)

    await login.gotoLogin()
    await login.loginBtnClick('1t.aamer@gmail.com', '!Test123*')


    await page.locator(projectNavBar).click()
    await page.waitForTimeout(4000)
    await page.click(openProjectForm)
    await page.fill(projectName, randomName)
    await page.fill(projectUrl, "https://getintopc.com/")
    await page.fill(projectContext, "Test")
    await page.fill(monthlyPost, "12")
    await page.fill(targetAudience, "Software Engineer")
    
    await page.selectOption(toneOfVoice, "Persuasive")
    await page.selectOption(wordsCount, "1,251 to 2,000 words")
    await page.waitForTimeout(6000)
    await page.click(createProjectButton)
    // await page.pause(3000)

    // Creating post in the project
    // await page.waitForTimeout(4000)
    await page.click('.project-content-btn .cs-secondary-btn')
    await page.click("//button[text()='Next']")
    await page.fill('#new-keyword', "Test")
    await page.selectOption('#new-keyword-word-count', '1,251 to 2,000 words')
    await page.fill('#new-keyword-context', "Software Testing")
    await page.click("(//button[@class='cs-secondary-btn'])[1]")



    await page.pause(3000)

})