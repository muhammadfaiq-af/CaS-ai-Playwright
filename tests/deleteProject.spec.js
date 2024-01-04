const { test, expect } = require('@playwright/test')

import { LoginPage } from '../Selectors/Common'

let count;
const deleteProjectSelectors = require('../Selectors/deleteProjectPage.js')

const { projectNames, deleteProjectBtn, deleteProjectBtnPopup, settingBtn } = deleteProjectSelectors

test('Verify that the user is able to delete a project', async ({ page }) => {

    const loginPage = new LoginPage(page)

    await loginPage.gotoLogin()
    await loginPage.loginBtnClick('1t.aamer@gmail.com', '!Test123*')

    await page.click("//a[contains(.,'Projects')]")
    const listOfProjects = '.listing-project table tbody tr'

    while (true) {
        const count = await page.locator(listOfProjects).count();
        if (count === 0) {
          console.log("All matching projects deleted.");
          break;
        }
        let foundMatchingProject = false;
        for (let i = count - 1; i >= 0; i--) {
          const getName = await page
            .locator(listOfProjects)
            .nth(i)
            .locator("td div strong")
            .textContent();
          if (getName.includes("testProject")) {
            foundMatchingProject = true;
            await page.locator(listOfProjects).nth(i).locator(projectNames).click();
            await page.waitForTimeout(4000);
            await page.click(settingBtn);
            await page.click(deleteProjectBtn);
            await page.waitForTimeout(1000);
            await page.click(deleteProjectBtnPopup);
            await page.waitForSelector(listOfProjects, { state: "visible" });
            break;
          }
        }
        if (!foundMatchingProject) {
          break;
        }
      }
})