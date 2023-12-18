const { test, expect} = require('@playwright/test')

const dashboardSelectors = require('../Selectors/DashboardPageSel')
const {email, password, loginButton, dropdown} = dashboardSelectors

test ('Verify that the user is able to make changes to the Dashboard', async ({page}) => {

    await page.goto("/login")
    await page.fill(email, '1t.aamer@gmail.com')
    await page.fill(password,'!Test123*')
    await page.click(loginButton)

    await page.locator(dropdown).selectOption({label :'Personal'})
    await page.locator(dropdown).selectOption({label :'Team'})
    await page.pause(5000)

});