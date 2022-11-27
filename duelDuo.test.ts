
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://ec2-18-246-44-216.us-west-2.compute.amazonaws.com/')
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
    await driver.findElement(By.id('draw')).click()

    await driver.sleep(3000)

    const bots = await driver.findElement(By.id('choices'))

    const displayed = await bots.isDisplayed()

    expect(displayed).toBe(true)

    await driver.sleep(3000)
})

test('bot is added to due when add to duo button is clicked', async () => {
    await driver.findElement(By.id('draw')).click()
    await driver.sleep(3000)
    
    await driver.findElement(By.xpath('//*[@id="choices"]/div[1]/button')).click()
    await driver.sleep(3000)

    const duo = await driver.findElement(By.xpath('//*[@id="player-duo"]'))

    const displayed = await duo.isDisplayed()

    expect(displayed).toBe(true)
    await driver.sleep(3000)

})
