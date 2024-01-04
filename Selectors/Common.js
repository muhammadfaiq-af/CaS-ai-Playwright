exports.LoginPage =
class Login {

    constructor(page)
    {

        this.page = page;
        this.emailfield = '#email'
        this.passwordfield = '#password'
        this.loginBtn = '[type="submit"]'
        this.URL = ['https://www.w3schools.com/',
                    'https://contentatscale.ai/', 
                    'https://www.atlassian.com/software/jira',
                    'https://www.ubisoft.com/en-us/',
                    'https://www.dc.com/',
                    'https://www.wikipedia.org/',
                    'https://slack.com/',
                    'https://www.daraz.pk/',
                    'https://www.marvel.com/movies',
                    'https://slack.com/',
                    'https://hbi.org/'
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