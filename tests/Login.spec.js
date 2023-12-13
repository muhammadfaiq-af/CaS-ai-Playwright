const { test, expect} = require('@playwright/test')

import locators from "../Selectors/LoginPageSel"

// const selectors = require("../Selectors/LoginPageSel")

test ('Verify that the user is able to login with valid credentials', async ({page}) => {

    await page.goto("https://staging.contentatscale.ai/login")

    await page.fill(locators.email, '1t.aamer@gmail.com')
    await page.fill(locators.password,'!Test123*')
    await page.click(locators.loginButton)

    const header=  page.locator('.filter-area.mb-5');
    //await expect(header).toContainText('Welcome back, Taimur Aamer!')
    await expect(header).toHaveText(/.* Taimur Aamer!/)
    await expect(page.locator('[class="filter-area mb-5"] h1')).toContainText('Welcome back')

}

)