const {test, expect} = require('@playwright/test')

import {LoginPage} from '../Selectors/Common' 

const deleteProjectSelectors = require('../Selectors/deleteProjectPage.js')

const {} = deleteProjectSelectors 

test('Verify that the user is able to delete a project', async ({page}) => {

    const loginPage = new LoginPage(page)

    const keywordDelete = "testProject"
    await loginPage.gotoLogin()
    await loginPage.loginBtnClick('1t.aamer@gmail.com', '!Test123*')

    await page.click("//a[contains(.,'Projects')]")
    const listOfProjects = '.listing-project table tbody tr'

    const count = await page.locator(listOfProjects).count()

    for(let i = 0; i < count; i++) {

        const getName = await page.locator(listOfProjects).nth(i).locator('td div  strong').textContent()

        if(getName.includes('testProject'))
        {
            await page.locator(listOfProjects).nth(i).locator('td div  strong').click()
            await page.waitForLoadState('networkidle')
            await page.click('#m-setting-tab')
            await page.click('#delete-project')
            await page.waitForTimeout(1000)
            await page.click("//button[text()='Yes, delete it!']")

            break;
        }
    }

    await page.pause(3000)
})