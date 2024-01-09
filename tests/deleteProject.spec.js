const { test, expect } = require('../fixture/fixture.js')
const testdata = JSON.parse(JSON.stringify(require("../testData.json")))

test('Verify that the user is able to delete a project', async ({ page, Delete, Login}) => {

    await Login.gotoLogin()
    await Login.loginBtnClick(testdata.emailData, testdata.passwordData)

    await Delete.deleteProject()
})