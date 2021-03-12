const { Builder , By , Key , util } = require('selenium-webdriver');
async function example() {
    // let driver = await new Builder().forBrowser('firefox').build();
    // await driver.get('http://localhost:8081/about');
    // // await driver.get('http://www.google.com');
    let x = await new Builder().forBrowser('chrome').build();
    await x.get('https://cryptic-castle-55044.herokuapp.com/contact');
    // await driver.findElement(By.name('q')).sendKeys('Home', Key.RETURN);
}
example();