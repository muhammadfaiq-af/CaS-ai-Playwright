const {test, expect} = require('@playwright/test')
import {LoginPage} from '../Selectors/Common' 
const createProjectSelectors = require('../Selectors/CreatingProjectPage.js')

const {email, password, loginButton, openProjectForm, projectName, projectUrl, projectContext, monthlyPost, targetAudience, toneOfVoice, wordsCount, createProjectButton, projectNavBar} = createProjectSelectors 

const randomDate = Date.now()
const randomName = `testProject${randomDate}`

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
    await page.pause(3000)
})