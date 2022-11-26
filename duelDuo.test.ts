
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:4000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test ('bots are displayed when draw button is clicked', async () => {
    await driver.findElement(By.xpath('/html/body/button[2]')).click()

    const bots = await driver.findElement(By.xpath('/html/body/section[1]/div'))

    const displayed = await bots.isDisplayed()

    expect(displayed).toBeTruthy()

    await driver.sleep(3000)
})