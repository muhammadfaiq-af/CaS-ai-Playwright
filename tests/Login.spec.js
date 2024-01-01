const { test, expect} = require('@playwright/test')

import { LoginPage } from '../Selectors/Common'


const loginSelectors = require("../Selectors/LoginPageSel")
const {welcomeAssertion, validationAssert, userIcon, logoutButton, welcomeBackAssert, h1} = loginSelectors

// test.beforeEach(async ({browser}) => { 

//     page = await browser.newPage()
//     const login = new LoginPage(page)
//     await login.gotoLogin()
//     await login.loginBtnClick('1t.aamer@gmail.com', '!Test123*')

// })

test ('Verify that the user is able to login with valid credentials', async ({page}) => {

    const login = new LoginPage(page)

    await login.gotoLogin()
    await login.loginBtnClick('1t.aamer@gmail.com', '!Test123*')

    const header =  page.locator(h1);
    //await expect(header).toContainText('Welcome back, Taimur Aamer!')

    await expect(header).toHaveText(/.* Taimur Aamer!/)
    
    await expect(page.locator(welcomeAssertion)).toContainText('Welcome back')

})

test ('Verify that the user is not able to login with invalid credentials', async ({page}) => {

    const login = new LoginPage(page)
    await login.gotoLogin()
    await login.loginBtnClick('1t.aamer@gmail.comm', '!Test1232*')

    const strong = page.locator(validationAssert)
    await expect(strong).toContainText(/.*These credentials do not match our records./)

})

test ('Verify that the user is able to logout from the website', async ({page}) => {

    const login = new LoginPage(page)
    await login.gotoLogin()
    await login.loginBtnClick('1t.aamer@gmail.com', '!Test123*')

    await page.click(userIcon)
    await page.click(logoutButton)

    await expect(page.locator(welcomeBackAssert)).toHaveText(/.* Welcome Back!/)
    await page.waitForTimeout(5000)
})