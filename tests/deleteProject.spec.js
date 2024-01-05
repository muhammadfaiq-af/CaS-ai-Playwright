const { test, expect } = require('../fixture/fixture.js')


test('Verify that the user is able to delete a project', async ({ page, Delete, Login}) => {

    await Login.gotoLogin()
    await Login.loginBtnClick('1t.aamer@gmail.com', '!Test123*')

    await Delete.deleteProject()
})