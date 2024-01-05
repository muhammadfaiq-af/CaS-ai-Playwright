const { test } = require('../fixture/fixture.js')
const {expect} =require('@playwright/test')


test('Verify that the user is able to fetch content from the URL', async ({Login,AI}) => {

    await Login.gotoLogin()
    await Login.loginBtnClick('1t.aamer@gmail.com', '!Test123*')
    await AI.getRandomURL()
    await AI.contentFromURL()

})

test('Verify that the user is able to scan content of Chatgpt', async ({Login,AI}) => {

    await Login.gotoLogin()
    await Login.loginBtnClick('1t.aamer@gmail.com', '!Test123*')
    await AI.contentFromChatGpt()

})
