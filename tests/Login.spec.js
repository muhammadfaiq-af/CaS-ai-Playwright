const { test, expect} = require('@playwright/test')

// import selectors from "../Selectors/LoginPageSel"

   const loginSelectors = require("../Selectors/LoginPageSel")
   const {email, password, loginButton, welcomeAssertion, validationAssert, userIcon, logoutButton, welcomeBackAssert, h1} = loginSelectors


   test ('Verify that the user is able to login with valid credentials', async ({page}) => {

    await page.goto("/login")

    await page.fill(email, '1t.aamer@gmail.com')
    await page.fill(password,'!Test123*')
    await page.click(loginButton)

    const header =  page.locator(h1);
    //await expect(header).toContainText('Welcome back, Taimur Aamer!')

    await expect(header).toHaveText(/.* Taimur Aamer!/)
    await expect(page.locator(welcomeAssertion)).toContainText('Welcome back')

})

test ('Verify that the user is not able to login with invalid credentials', async ({page}) => {

    await page.goto("/login")

    await page.fill(email, '1t.aamer@gmail.comm')
    await page.fill(password,'!Test123*1')
    await page.click(loginButton)

    const strong = page.locator(validationAssert)
    await expect(strong).toContainText(/.*These credentials do not match our records./)

})

test ('Verify that the user is able to logout from the website', async ({page}) => {

    await page.goto("/login")

    await page.fill(email, '1t.aamer@gmail.com')
    await page.fill(password,'!Test123*')
    await page.click(loginButton)

    await page.click(userIcon)
    await page.click(logoutButton)

    await expect(page.locator(welcomeBackAssert)).toHaveText(/.* Welcome Back!/)
    
    await page.waitForTimeout(5000)
})