const {test} =  require('../fixture/fixture.js')

test('Verify that the user is able to create a Project', async ({ Login,CreateProject }) => {

    await Login.gotoLogin()
    await Login.loginBtnClick('1t.aamer@gmail.com', '!Test123*')


    await CreateProject.createProject()
    
})