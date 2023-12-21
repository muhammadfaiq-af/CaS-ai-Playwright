const {test, expect} = require('@playwright/test')

const createPostSelectors = require('../Selectors/CreatePostPage')

const {email, password, loginButton, projectNavBar} = createPostSelectors


test("Verify that the user is able to create Post in the Project", async ({page}) => {

    await page.goto("/login")
    await page.fill(email, '1t.aamer@gmail.com')
    await page.fill(password,'!Test123*')
    await page.click(loginButton)

    await page.locator(projectNavBar).click()
    await page.waitForTimeout(3000)

    await page.click(randomName)

})