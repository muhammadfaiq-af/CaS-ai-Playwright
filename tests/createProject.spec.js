const {test, expect} = require('@playwright/test')
import {LoginPage} from '../Selectors/Common' 

const randomDate = Date.now()
const randomName = `testProject${randomDate}`

const createProjectSelectors = require('../Selectors/CreatingProjectPage.js')

const {openProjectForm, projectName, projectUrl, projectContext, monthlyPost, targetAudience, toneOfVoice, wordsCount, createProjectButton, projectNavBar,writePostBtn, nextBtn,postKeyword, wordCountPost, contextPost, writePostBtn1, createPostBtnPopup, inQueueTextVerification} = createProjectSelectors 

test ('Verify that the user is able to create a Project', async ({page}) => {

    const login = new LoginPage(page)

    await login.gotoLogin()
    await login.loginBtnClick('1t.aamer@gmail.com', '!Test123*')


    await page.locator(projectNavBar).click()
    await page.waitForTimeout(4000)
    await page.click(openProjectForm)
    await page.fill(projectName, randomName)
    await page.fill(projectUrl, `${await login.getRandomURL()}`)
    await page.fill(projectContext, "Test")
    await page.fill(monthlyPost, "12")
    await page.fill(targetAudience, "Software Engineer")
    
    await page.selectOption(toneOfVoice, "Persuasive")
    await page.selectOption(wordsCount, "1,251 to 2,000 words")
    await page.waitForTimeout(6000)
    await page.click(createProjectButton)
    await page.waitForTimeout(3000)

    // Creating post in the project

    await page.setViewportSize({width: 1600, height: 576})

    await page.click(writePostBtn, {force: true})
    await page.click(nextBtn, {force: true})
    await page.fill(postKeyword, "Test")
    await page.selectOption(wordCountPost, '1,251 to 2,000 words')
    await page.fill(contextPost, "Software Testing")

    await page.click(writePostBtn1)
    await page.waitForTimeout(3000)

    await page.click(createPostBtnPopup)

    await page.waitForTimeout(15000)
    await expect(page.locator(inQueueTextVerification)).toContainText(' In Queue ')


    await page.pause(3000)

})