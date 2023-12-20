const {test, expect} = require('@playwright/test')

const createProjectSelectors = require('../Selectors/CreatingProjectPage.js')

const {email, password, loginButton, openProjectForm, projectName, projectUrl, projectContext, monthlyPost, targetAudience, toneOfVoice, wordsCount, createProjectButton, projectNavBar} = createProjectSelectors 

const randomDate = Date.now()
const randomName = `testProject${randomDate}`

test ('Verify that the user is able to create a Project', async ({page}) => {

    await page.goto("/login")
    await page.fill(email, '1t.aamer@gmail.com')
    await page.fill(password,'!Test123*')
    await page.click(loginButton)

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
    await page.waitForTimeout(4000)
    await page.click(createProjectButton)
    await page.pause(3000)
})