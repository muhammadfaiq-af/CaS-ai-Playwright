const {test} = require('../fixture/fixture.js');
const testdata = JSON.parse(JSON.stringify(require("../testData.json")))

// First we user require
// Then we done stringify whihc will convert javascript date into JSON Date 
// Then we use Parse which will convert json data into object

test ('Verify that the user is able to make changes to the Dashboard', async ({Dashboard,Login}) => {

    await Login.gotoLogin()
    await Login.loginBtnClick(testdata.emailData, testdata.passwordData)

    await Dashboard.dashboard()

});