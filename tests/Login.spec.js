const { test, expect} = require('@playwright/test')

import selectors from "../Selectors/LoginPageSel"

// const selectors = require("../Selectors/LoginPageSel")

test ('Verify that the user is able to login with valid credentials', async ({page}) => {

    await page.goto("https://staging.contentatscale.ai/login")

    await page.fill(selectors.email, '1t.aamer@gmail.com')
    await page.fill(selectors.password,'!Test123*')
    await page.click(selectors.loginButton)

    const header =  page.locator(selectors.h1);
    //await expect(header).toContainText('Welcome back, Taimur Aamer!')

    await expect(header).toHaveText(/.* Taimur Aamer!/)
    await expect(page.locator(selectors.welcomeAssertion)).toContainText('Welcome back')

})

test ('Verify that the user is not able to login with invalid credentials', async ({page}) => {

    await page.goto("https://staging.contentatscale.ai/login")

    await page.fill(selectors.email, '1t.aamer@gmail.comm')
    await page.fill(selectors.password,'!Test123*1')
    await page.click(selectors.loginButton)

    const strong = page.locator(selectors.validationAssert)
    await expect(strong).toHaveText(/.*These credentials do not match our records./)

})

test ('Verify that the user is able to logout from the website', async ({page}) => {

    await page.goto("https://staging.contentatscale.ai/login")

    await page.fill(selectors.email, '1t.aamer@gmail.com')
    await page.fill(selectors.password,'!Test123*')
    await page.click(selectors.loginButton)

    await page.click(selectors.userIcon)
    await page.click(selectors.logoutButton)

    await expect(page.locator(selectors.welcomeBackAssert)).toHaveText(/.* Welcome Back!/)
    
    await page.waitForTimeout(5000)
})