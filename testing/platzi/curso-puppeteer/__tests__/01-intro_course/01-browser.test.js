const puppeteer = require('puppeteer');

describe('First puppeteer test', () => {
	test('should open and close the browser', async () => {
		const browser = await puppeteer.launch({
			defaultViewport: null,
		});

		const page = await browser.newPage();
		await page.goto('https://github.com');
		await page.waitForSelector('img');

		await page.reload();
		await page.waitForSelector('img');

		await page.goto('https://platzi.com');
		await page.waitForSelector('img');

		await page.goBack();
		await page.goForward();

		const page2 = await browser.newPage();
		await page2.goto('https://google.com');

		await browser.close();
	}, 20000);
});
