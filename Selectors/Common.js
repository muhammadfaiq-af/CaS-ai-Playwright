exports.LoginPage =
class Login {

    constructor(page)
    {

        this.page = page;
        this.emailfield = '#email'
        this.passwordfield = '#password'
        this.loginBtn = '[type="submit"]'
        this.URL = ['https://www.surveymonkey.com/welcome/sem/',
                    'https://www.microsoft.com/en-us/', 
                    'https://asana.com/',
                    'https://www.concur.com/',
                    'https://mailchimp.com/',
                    'https://www.shopify.com/',
                    'https://slack.com/',
                    'https://www.adobe.com/',
                    'https://www.snowflake.com/',
                    'https://contentatscale.ai/',
                    'https://www.imdb.com/',
                    'https://www.primevideo.com/',
                    'https://www.icc-cricket.com/',
                    'https://bard.google.com/',
                    'https://www.atlassian.com/',
                    'https://asana.com/',
                    'https://www.wrike.com/',
                    'https://www.ubisoft.com/en-us/',
                    'https://wwe.2k.com',
                    'https://clickup.com/',
                    'https://trello.com/',
                    'https://www.datadoghq.com/',
                    'https://www.browserstack.com/'
]
    }

    async gotoLogin()
    {
        await this.page.goto('/login')
    }

    async loginBtnClick(email, password)
    {
        
        await this.page.locator(this.emailfield).fill(email)
        await this.page.locator(this.passwordfield).fill(password)
        await this.page.locator(this.loginBtn).click()
        
    }

    async getRandomURL(){

        const randomIndex = Math.floor(Math.random() * this.URL.length)
        return this.URL[randomIndex]
    
    }
    
}