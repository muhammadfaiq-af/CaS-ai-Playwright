const {test, expect} = require('@playwright/test')

const aiDetectorSelector = require('../Selectors/aiDetectorPage.js')
import {LoginPage} from '../Selectors/Common' 
const {aiDectectoBtn, urlField, fetchUrlBtn, scanContentBtn, probability, chatGptContent} = aiDetectorSelector
test ('Verify that the user is able to fetch content from the URL', async ({page}) => {

    const login = new LoginPage(page)
    await login.gotoLogin()
    await login.loginBtnClick('1t.aamer@gmail.com', '!Test123*')

    await page.click(aiDectectoBtn)
    await page.waitForTimeout(3000)
    await page.fill(urlField, `${await login.getRandomURL()}`)
    await page.waitForLoadState('networkidle')
    await page.click(fetchUrlBtn)
    await page.waitForTimeout(3000)
    await page.click(scanContentBtn)

    await page.waitForTimeout(14000)


    const passAsHuman = 'Passes as Human! '
    const readsLikeAi = 'Reads like AI! '

    await page.waitForSelector(probability)
    const pass1 = await page.locator(probability).textContent();
    console.log(pass1);


    if (await pass1 === passAsHuman) {
        const pass = await page.locator(probability);
        await expect(await pass).toHaveText(passAsHuman);
    } else {
        const pass = await page.locator(probability);
        await expect(await pass).toHaveText(readsLikeAi);
    }

       


})

test.only ('Verify that the user is able to scan content of Chatgpt', async ({page}) => {


    const login = new LoginPage(page)
    await login.gotoLogin()
    await login.loginBtnClick('1t.aamer@gmail.com', '!Test123*')
    await page.click(aiDectectoBtn)
    await page.waitForTimeout(3000)
    await page.fill('div.fr-element.fr-view', chatGptContent)
    await page.click(scanContentBtn)
    await page.waitForLoadState('networkidle')
    const AI = await page.locator(probability)
    await expect(await AI).toHaveText('Reads like AI! ')

    await page.pause(3000)

})