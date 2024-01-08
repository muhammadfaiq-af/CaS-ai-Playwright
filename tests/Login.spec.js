const {test} =  require('../fixture/fixture.js')

test('Verify that the user is able to login with valid credentials', async ({ Login, LoginVerificationTest }) => {

    await Login.gotoLogin()
    await Login.loginBtnClick('1t.aamer@gmail.com', '!Test123*')

    await LoginVerificationTest.validLogin()

})

test('Verify that the user is not able to login with invalid credentials', async ({ Login, LoginVerificationTest }) => {

    await Login.gotoLogin()
    await Login.loginBtnClick('1t.aamer@gmail.comm', '!Test1237*')

    await LoginVerificationTest.invalidLogin()

})

test('Verify that the user is able to logout from the website', async ({ Login, LoginVerificationTest }) => {

    await Login.gotoLogin()
    await Login.loginBtnClick('1t.aamer@gmail.com', '!Test123*')

    await LoginVerificationTest.logout()

})