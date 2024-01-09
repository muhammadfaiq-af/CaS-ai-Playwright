const { test } = require('../fixture/fixture.js')
const testdata = JSON.parse(JSON.stringify(require("../testData.json")))


test('Verify that the user is able to fetch content from the URL', async ({Login,AI}) => {

    await Login.gotoLogin()
    await Login.loginBtnClick(testdata.emailData, testdata.passwordData)
    await AI.getRandomURL()
    await AI.contentFromURL()

})

test('Verify that the user is able to scan content of Chatgpt', async ({Login,AI}) => {

    await Login.gotoLogin()
    await Login.loginBtnClick(testdata.emailData, testdata.passwordData)
    await AI.contentFromChatGpt()

})
