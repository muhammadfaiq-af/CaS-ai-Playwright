const { test, expect } = require('@playwright/test')

import { DeleteProject } from '../Selectors/deleteProjectPage.js'
import { LoginPage } from '../Selectors/Common.js'



test('Verify that the user is able to delete a project', async ({ page }) => {

    const deleteProject = new DeleteProject(page)
    const loginPage = new LoginPage(page)

    await loginPage.gotoLogin()
    await loginPage.loginBtnClick('1t.aamer@gmail.com', '!Test123*')

    await deleteProject.deleteProject()
})