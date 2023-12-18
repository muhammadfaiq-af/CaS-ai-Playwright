const
{
    test, expect
}=require('@playwright/test');
const { title } = require('process');

test("Verify that the user is able to access visit the login page",async ({page}) => {

   await page.goto('/login')
   const pageTitle = await page.title()
   console.log("Page title is ", pageTitle);
   
   //Assertions
   expect(page).toHaveTitle("Content At Scale");
   await expect(page).toHaveURL("/login");
   await page.screenshot({path: 'Images/login.png'});
   

})
