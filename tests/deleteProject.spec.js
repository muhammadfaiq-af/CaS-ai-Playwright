const { test, expect } = require('@playwright/test')

import { LoginPage } from '../Selectors/Common'

const deleteProjectSelectors = require('../Selectors/deleteProjectPage.js')

const { projectNames, deleteProjectBtn, deleteProjectBtnPopup, settingBtn } = deleteProjectSelectors

test('Verify that the user is able to delete a project', async ({ page }) => {

    const loginPage = new LoginPage(page)

    const keywordDelete = "testProject"
    await loginPage.gotoLogin()
    await loginPage.loginBtnClick('1t.aamer@gmail.com', '!Test123*')

    await page.click("//a[contains(.,'Projects')]")
    const listOfProjects = '.listing-project table tbody tr'

    let count = await page.locator(listOfProjects).count()

    for (let i = 0; i < count+1; i++) {

        await page.waitForTimeout(7000)
        count = await page.locator(listOfProjects).count();
        const getName = await page.locator(listOfProjects).nth(i).locator('td div  strong').textContent()

        if (getName.includes('testProject')) {
            await page.locator(listOfProjects).nth(i).locator(projectNames).click()
            await page.waitForTimeout(4000)
            await page.click(settingBtn)
            await page.click(deleteProjectBtn)
            await page.waitForTimeout(1000)
            await page.click(deleteProjectBtnPopup)
            continue;
    }}
    


})