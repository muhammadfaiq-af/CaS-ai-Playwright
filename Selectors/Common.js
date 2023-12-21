exports.LoginPage =
class Login {

    constructor(page)
    {

        this.page = page;
        this.emailfield = '#email'
        this.passwordfield = '#password'
        this.loginBtn = '[type="submit"]'
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
}