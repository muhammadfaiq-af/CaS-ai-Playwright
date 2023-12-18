const {test, expect} = require('@playwright/test')

const createProjectSelectors = require('../Selectors/DashboardPageSel')
const {email, password, loginButton} = createProjectSelectors 

const randomDate = Date.now()
const randomName = `testProject${randomDate}`

test ('Verify that the user is able ro create a Project', async ({page}) => {

    await page.goto("/login")
    await page.fill(email, '1t.aamer@gmail.com')
    await page.fill(password,'!Test123*')
    await page.click(loginButton)

    await page.click("//a[contains(.,'Projects')]")
    await page.click('[id="open_create_project_form"]')
    await page.locator('[id="project-name"]').type(randomName)
    await page.locator('[id="project-url"]').type
})