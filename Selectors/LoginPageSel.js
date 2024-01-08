
const { expect } = require('@playwright/test')
export class LoginVerificationTest {

  constructor(page) {

    this.page = page;

    this.h1 = '.filter-area.mb-5',
      this.welcomeAssertion = '[class="filter-area mb-5"] h1',
      this.validationAssert = '#email ~ span strong',
      this.userIcon = '[id="userAction"]',
      this.logoutButton = '[class="bx bx-power-off me-2"]',
      this.welcomeBackAssert = '[class="field-area login-area"]'

  }

  async validLogin() {

    const header = this.page.locator(this.h1);
    await expect(header).toHaveText(/.* Taimur Aamer!/)
    await expect(this.page.locator(this.welcomeAssertion)).toContainText('Welcome back')
  }

  async invalidLogin() {

    const strong = this.page.locator(this.validationAssert)
    await expect(strong).toContainText(/.*These credentials do not match our records./)
  }

  async logout() {

    await this.page.click(this.userIcon)
    await this.page.click(this.logoutButton)

    await expect(this.page.locator(this.welcomeBackAssert)).toHaveText(/.* Welcome Back!/)
    await this.page.waitForTimeout(5000)
  }


}

