

const {expect} = require('@playwright/test')

export class CreateProject {

    constructor(page) {

        this.page = page;
        this.email = '#email',
            this.password = '#password',
            this.loginButton = '[type="submit"]',
            this.projectNavBar = "//a[contains(.,'Projects')]",
            this.openProjectForm = '#open_create_project_form',
            this.projectName = '#project-name',
            this.projectUrl = '#project-url',
            this.projectContext = '#project-context',
            this.monthlyPost = '#monthly-post-count',
            this.targetAudience = '#target-audience',
            this.toneOfVoice = '#tone-of-voice',
            this.wordsCount = '#words_count',
            this.createProjectButton = "//button[@type='submit']",
            this.writePostBtn = "//button[text()[normalize-space()='Write Post']]",
            this.nextBtn = "div.right-btn >button.cs-secondary-btn.next-content",
            this.postKeyword = '#new-keyword',
            this.wordCountPost = '#new-keyword-word-count',
            this.contextPost = '#new-keyword-context',
            this.writePostBtn1 = "(//button[@class='cs-secondary-btn'])[1]",
            this.createPostBtnPopup = "//button[text()='Yes, create post!']",
            this.inQueueTextVerification = 'span.tag.in-queue',
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


    async createProject() {
        const randomDate = Date.now()
        const randomName = `testProject${randomDate}`

        await this.page.locator(this.projectNavBar).click()
        await this.page.waitForTimeout(4000)
        await this.page.click(this.openProjectForm)
        await this.page.waitForSelector(this.projectName)
        await this.page.fill(this.projectName, randomName)
        await this.page.fill(this.projectUrl, `${await this.getRandomURL()}`)
        await this.page.fill(this.projectContext, "Test")
        let validationMessage = await this.page.locator('div.toast-message').textContent()

        const successMessage = 'URL is valid'

        if (validationMessage.includes("You already have a project assigned to this URL."))
         {
            for (let i = 0; i < this.URL.length; i++)
             {
            await this.page.fill(this.projectUrl, `${await this.getRandomURL()}`)
            await this.page.fill(this.projectContext, "Test")
            await this.page.waitForSelector('div.toast-message')

            
            if (await validationMessage.includes(successMessage))
            {
                break
            }
            
        }
        
    }   
        await this.page.fill(this.monthlyPost, "12")
        await this.page.fill(this.targetAudience, "Software Engineer")

        await this.page.selectOption(this.toneOfVoice, "Persuasive")
        await this.page.selectOption(this.wordsCount, "1,251 to 2,000 words")
        await this.page.waitForTimeout(6000)
        await this.page.click(this.createProjectButton)
        await this.page.waitForTimeout(10000)

        // Creating post in the project

        // await page.setViewportSize({width: 1600, height: 576})

        await this.page.waitForLoadState('domcontentloaded')
        await this.page.waitForSelector(this.writePostBtn)
        await this.page.click(this.writePostBtn)
        await this.page.waitForLoadState('networkidle')
        await this.page.waitForSelector(this.nextBtn)
        await this.page.click(this.nextBtn)
        await this.page.fill(this.postKeyword, "Test")
        await this.page.selectOption(this.wordCountPost, '1,251 to 2,000 words')
        await this.page.fill(this.contextPost, "Software Testing")

        await this.page.click(this.writePostBtn1)
        await this.page.waitForLoadState('networkidle')

        await this.page.click(this.createPostBtnPopup)

        await this.page.waitForTimeout(6000)
        await expect(this.page.locator(inQueueTextVerification)).toContainText(' In Queue ')
    }
}