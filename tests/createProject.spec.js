const { test, expect } = require('@playwright/test')

import { LoginPage } from '../Selectors/Common'
import { CreateProject } from '../Selectors/CreatingProjectPage.js'


test('Verify that the user is able to create a Project', async ({ page }) => {

    const login = new LoginPage(page)
    const createProject1 = new CreateProject(page)

    await login.gotoLogin()
    await login.loginBtnClick('1t.aamer@gmail.com', '!Test123*')

    await createProject1.createProject()
    await expect(page.locator(inQueueTextVerification)).toContainText(' In Queue ')
})