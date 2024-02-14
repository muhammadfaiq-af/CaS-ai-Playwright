
import { test as baseTest } from "@playwright/test"
import { AI } from '../Selectors/aiDetectorPage';
import { Delete } from '../Selectors/deleteProjectPage';
import { Login } from '../Selectors/Common';
import { CreateProject } from "../Selectors/CreatingProjectPage";
import {LoginVerificationTest} from "../Selectors/LoginPageSel";
import {Dashboard} from "../Selectors/DashboardPageSel";

exports.test = baseTest.extend({
    AI: async ({ page }, use) => {
        await use(new AI(page))
    },
    Login: async ({ page }, use) => {
        await use(new Login(page))
    },

    Delete: async ({ page }, use) => {
        await use(new Delete(page))
    },
    CreateProject: async ({ page }, use) => {

        await use(new CreateProject(page))
    },

    LoginVerificationTest: async ({ page }, use) => {
        await use (new LoginVerificationTest(page))
    },
    Dashboard: async ({ page }, use) => {
        await use (new Dashboard(page))

    }
})