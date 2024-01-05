


export class Delete {

        constructor(page) {
            this.page = page
            this.projectNames = 'td div  strong',
                this.settingBtn = '#m-setting-tab',
                this.deleteProjectBtn = '#delete-project',
                this.deleteProjectBtnPopup = "//button[text()='Yes, delete it!']"
        }

        async deleteProject() {

            await this.page.click("//a[contains(.,'Projects')]")
            const listOfProjects = '.listing-project table tbody tr'
            while (true) {
                const count = await this.page.locator(listOfProjects).count();
                if (count === 0) {
                    console.log("All matching projects deleted.");
                    break;
                }
                let foundMatchingProject = false;
                for (let i = count - 1; i >= 0; i--) {
                    const getName = await this.page
                        .locator(listOfProjects)
                        .nth(i)
                        .locator("td div strong")
                        .textContent();
                    if (getName.includes("testProject")) {
                        foundMatchingProject = true;
                        await this.page.locator(listOfProjects).nth(i).locator(this.projectNames).click();
                        await this.page.waitForLoadState('networkidle');
                        await this.page.click(this.settingBtn);
                        await this.page.click(this.deleteProjectBtn);
                        await this.page.waitForTimeout(1000);
                        await this.page.click(this.deleteProjectBtnPopup);
                        await this.page.waitForSelector(listOfProjects, { state: "visible" });
                        break;
                    }
                }
                if (!foundMatchingProject) {
                    console.log("No matching project found")
                    break;
                }
            }
        }
    }