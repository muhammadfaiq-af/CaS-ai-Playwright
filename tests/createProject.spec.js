const {test} =  require('../fixture/fixture.js')
const testdata = JSON.parse(JSON.stringify(require("../testData.json")))

test('Verify that the user is able to create a Project', async ({ Login,CreateProject }) => {

    await Login.gotoLogin()
    await Login.loginBtnClick(testdata.emailData, testdata.passwordData)


    await CreateProject.createProject()
    
})      