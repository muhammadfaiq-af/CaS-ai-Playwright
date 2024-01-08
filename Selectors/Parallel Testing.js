import {test,chromium,firefox} from '@playwright/test'
// let page
// test.beforeAll(async () => {
   
// })
  
test('Verify that the user is able to login with valid credentials', async () => {

    const browser= await firefox.launch()
    const browser2= await chromium.launch()
    const page=await browser.newPage()
    const page2=await browser2.newPage()
    await page.goto('https://www.google.com/')
    await page2.goto('https://www.facebook.com')
})
// test('Verify that the user is able to login with Invalid credentials', async () => {

    
// })