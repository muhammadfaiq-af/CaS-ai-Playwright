const {test, expect} = require('@playwright/test')

const createPostSelectors = require('../Selectors/CreatePostPage')
const  randomName = require('./createProject.spec.js');

import { LoginPage } from '../Selectors/Common'

const {email, password, loginButton, projectNavBar} = createPostSelectors


test("Verify that the user is able to create Post in the Project", async ({page}) => {

    const login = new LoginPage(page)

    
    await page.goto("/login")
    await page.fill(email, '1t.aamer@gmail.com')
    await page.fill(password,'!Test123*')
    await page.click(loginButton)

    await page.locator(projectNavBar).click()
    await page.waitForTimeout(3000)

    const projectClick = page.locator(`//tr//div[@class="position-relative listing-name" and contains(., "${randomName}")]`)
    console.log(projectClick);
    await page.click(projectClick)


})