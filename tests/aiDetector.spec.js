const {test, expect} = require('@playwright/test')

const aiDetectorSelector = require('../Selectors/aiDetectorPage.js')
import {LoginPage} from '../Selectors/Common' 
const {aiDectectoBtn, urlField, fetchUrlBtn, scanContentBtn, passHuman, readsAi, probability} = aiDetectorSelector

test ('Verify that the user is able to fetch content from the URL', async ({page}) => {

    const login = new LoginPage(page)
    await login.gotoLogin()
    await login.loginBtnClick('1t.aamer@gmail.com', '!Test123*')

    await page.click(aiDectectoBtn)
    await page.waitForTimeout(3000)
    await page.fill(urlField, `${await login.getRandomURL()}`)
    await page.waitForTimeout(3000)
    await page.click(fetchUrlBtn)
    await page.waitForTimeout(3000)
    await page.click(scanContentBtn)

    await page.waitForTimeout(14000)


    const passAsHuman = 'Passes as Human! '
    const readsLikeAi = 'Reads like AI! '

    await page.waitForSelector('h3#score_message >> span')
    const pass1 = await page.locator('h3#score_message >> span').textContent();
    console.log(pass1);


    if (await pass1 === passAsHuman) {
        const pass = await page.locator('h3#score_message >> span');
        await expect(await pass).toHaveText(passAsHuman);
    } else {
        const pass = await page.locator('h3#score_message >> span');
        await expect(await pass).toHaveText(readsLikeAi);
    }

        await page.pause(3000)


})