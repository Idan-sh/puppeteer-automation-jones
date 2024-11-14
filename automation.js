const puppeteer = require('puppeteer');

(async () => {
    // Setup Puppeteer 
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // First step: Open the form site
    await page.goto('https://testsite.getjones.com/ExampleForm/');

    // Second step: Fill the form
    await page.type('#name', 'Idan Shalom');
    await page.type('#email', 'idan.sh2@icloud.com');
    await page.type('#phone', '0523451811');
    await page.type('#company', 'idan.sh Incorporated');

    // Bonus step: Change the number of employees
    await page.select('#employees', '51-500');

    // Third step: Open the form site
    await page.screenshot({path: 'screenshot.png'});

    // Cleaning up 
    await browser.close();
})();