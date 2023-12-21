const { test, expect} = require('@playwright/test')
import { LoginPage } from '../Selectors/Common'

const dashboardSelectors = require('../Selectors/DashboardPageSel')
const {dropdown} = dashboardSelectors

test ('Verify that the user is able to make changes to the Dashboard', async ({page}) => {

    const login = new LoginPage(page)

    await login.gotoLogin()

    await login.loginBtnClick('1t.aamer@gmail.com', '!Test123*')

    await page.locator(dropdown).selectOption({label :'Personal'})
    await page.locator(dropdown).selectOption({label :'Team'})
    await page.pause(5000)

});