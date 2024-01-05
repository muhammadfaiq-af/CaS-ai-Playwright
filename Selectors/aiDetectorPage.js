const { LoginPage } = require("./Common")

import { expect } from '@playwright/test'

export class AI  { 

    constructor(page) {
        this.page = page;
        this.aiDectectoBtn = '[id="Group_4768"]',
            this.urlField = '[id="fetch_url_input"]',
            this.fetchUrlBtn = '[id="fetch_url_button"]',
            this.scanContentBtn = '[id="check_ai_button"]',
            this.probability = 'h3#score_message >> span',
    
            this.chatGptContent = 'Graphic design is the art and practice of visually communicating ideas, information, or messages through the thoughtful arrangement of images, typography, and color. It involves creating visually appealing and effective designs for various mediums such as print, digital, and social media. Graphic designers utilize their creative skills and technical expertise to convey a message or evoke a specific response, ensuring that the visual elements harmonize with the intended purpose. Whether designing logos, posters, websites, or branding materials, graphic designers play a crucial role in shaping the visual identity and communication strategies of businesses, organizations, and individuals.',
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

    async getRandomURL(){

        const randomIndex = Math.floor(Math.random() * this.URL.length)
        return this.URL[randomIndex]
    
    }
    async contentFromURL() {

        await this.page.click(this.aiDectectoBtn)
        await this.page.waitForTimeout(3000)
        await this.page.fill(this.urlField, `${await this.getRandomURL()}`)
        await this.page.waitForLoadState('networkidle')
        await this.page.click(this.fetchUrlBtn)
        await this.page.waitForTimeout(3000)
        await this.page.click(this.scanContentBtn)

        await this.page.waitForTimeout(14000)

        const passAsHuman = 'Passes as Human! '
        const readsLikeAi = 'Reads like AI! '

        await this.page.waitForSelector(this.probability)
        const pass1 = await this.page.locator(this.probability).textContent();
        console.log(pass1);


        if (await pass1 === passAsHuman) {
            const pass = await this.page.locator(this.probability);
            await expect(await pass).toHaveText(passAsHuman);
        }
        else {
            const pass = await this.page.locator(this.probability);
            await expect(await pass).toHaveText(readsLikeAi);
        }
    }

    async contentFromChatGpt() {

        await this.page.click(this.aiDectectoBtn)
        await this.page.waitForTimeout(3000)
        await this.page.fill('div.fr-element.fr-view', this.chatGptContent)
        await this.page.click(this.scanContentBtn)
        await this.page.waitForLoadState('networkidle')
        const Ai = await this.page.locator(this.probability)
        await expect(await Ai).toHaveText('Reads like AI! ')
    }
}
