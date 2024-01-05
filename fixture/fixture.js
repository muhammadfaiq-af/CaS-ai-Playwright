
import {test as baseTest} from "@playwright/test"
import {AI} from '../Selectors/aiDetectorPage';
import {Delete} from '../Selectors/deleteProjectPage';
import { Login } from '../Selectors/Common';

exports.test = baseTest.extend({
    AI: async ({page}, use)=>{
        await use(new AI(page))
    },
    Login: async ({page}, use)=>{
        await use(new Login(page))
    },

    Delete: async ({page}, use) => {
        await use(new Delete(page))
    }
  
})