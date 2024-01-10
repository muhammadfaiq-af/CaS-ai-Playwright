const {test} =  require('../fixture/fixture.js')
const testdata = JSON.parse(JSON.stringify(require("../testData.json")))

test('Verify that the user is able to login with valid credentials', async ({ Login, LoginVerificationTest}) => {

    await Login.gotoLogin()
    await Login.loginBtnClick(testdata.emailData, testdata.passwordData)

    await LoginVerificationTest.validLogin()

})

test('Verify that the user is not able to login with invalid credentials', async ({ Login, LoginVerificationTest }) => {

    await Login.gotoLogin()
    await Login.loginBtnClick(testdata.invalidEmailData, testdata.inavlidPasswordData)

    await LoginVerificationTest.invalidLogin()

})

test('Verify that the user is able to logout from the website', async ({ Login, LoginVerificationTest }) => {

    await Login.gotoLogin()
    await Login.loginBtnClick(testdata.emailData, testdata.passwordData)

    await LoginVerificationTest.logout()

})