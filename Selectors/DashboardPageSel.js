
const {expect} = require('@playwright/test')

export class Dashboard {

    constructor(page) {

        this.page = page,
        this.dropdown= '[id="change_team"]'
}

async dashboard ()  {

    await this.page.locator(this.dropdown).selectOption({label :'Personal'})
    await this.page.locator(this.dropdown).selectOption({label :'Team'})
}


}

