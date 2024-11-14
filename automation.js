import { launch } from 'puppeteer';

(async () => {
    // Setup Puppeteer 
    const browser = await launch(); // For easy debugging use options of: {slowMo: 100, headless: false}
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

    // Fourth step: Click the submit button
    await page.click('.primary.button');

    // Fifth step: Ensure the thank you page has been reached
    await page.waitForNavigation({ waitUntil: 'networkidle0' }); // Wait for the redirect to finish

    // Compare the <h1> title of the reached page to the expected text
    const expectedText = "Thank You!";
    const actualText = await page.$eval('h1', element => element.textContent.trim());

    const thankYouDiv = await page.$('.thank-you'); // Also check that a div with the class of 'thank-you' is present

    if (thankYouDiv && actualText === expectedText) {
        console.log("Successfully reached the thank you page!");
    } else {
        console.log("Failed to reach the thank you page...");
    }

    // Take a screenshot of the reached page
    await page.screenshot({path: 'screenshot-after-click.png'});

    // Last step: Cleaning up 
    await browser.close();
})();