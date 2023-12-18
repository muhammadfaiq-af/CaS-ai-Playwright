const { test, expect} = require('@playwright/test')

const dashboardSelectors = require('../Selectors/DashboardPageSel')
const {email, password, loginButton} = dashboardSelectors

test('Verify that the user can access the Dashboard and observe the Details of Posts', async ({page}) => {

    await page.goto("/login")

    await page.fill(email, '1t.aamer@gmail.com')
    await page.fill(password,'!Test123*')
    await page.click(loginButton)

});