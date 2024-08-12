const puppeteer = require('puppeteer');

describe('First test', () => {
	it('should open the browser', async () => {
		const browser = await puppeteer.launch();

		const page = await browser.newPage();
		await page.goto('https://github.com');

		await page.waitForSelector('img');
		await page.reload();
		await page.waitForSelector('img');

		// navigate to another site
		await page.goto('https://platzi.com/');
		await page.waitForSelector('img');

		await page.goBack();
		await page.goForward();

		// open another page in another tab
		const page2 = await browser.newPage();
		await page2.goto('https://google.com');

		await browser.close();
	}, 20000);
});
