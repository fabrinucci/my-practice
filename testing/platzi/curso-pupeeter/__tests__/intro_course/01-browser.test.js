const puppeteer = require('puppeteer');

describe('First puppeteer test', () => {
	it('should open and close the browser', async () => {
		const browser = await puppeteer.launch({
			headless: true,
			defaultViewport: null,
		});

		const page = await browser.newPage();
		await page.goto('https://github.com');
		await page.waitForSelector('img');

		await page.reload();
		await page.waitForSelector('img');

		await page.goto('https://platzi.com');
		await page.waitForSelector(
			'#Header-v2 > nav > div.Logo > div > a > div > figure:nth-child(1) > img'
		);

		await page.goBack();
		await page.goForward();

		const page2 = await browser.newPage();
		await page2.goto('https://google.com');

		await browser.close();
	}, 35000);
});
