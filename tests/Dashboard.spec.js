const {test} = require('../fixture/fixture.js');

test ('Verify that the user is able to make changes to the Dashboard', async ({Dashboard,Login}) => {

    await Login.gotoLogin()
    await Login.loginBtnClick('1t.aamer@gmail.com', '!Test123*')

    await Dashboard.dashboard()

});