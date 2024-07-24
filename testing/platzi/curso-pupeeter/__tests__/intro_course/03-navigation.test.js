const puppeteer = require('puppeteer');

describe('First test', () => {
	it('should open the browser', async () => {
		const browser = await puppeteer.launch({
			headless: false,
			slowMo: 1000,
			devtools: false,
			defaultViewport: null,
		});

		const page = await browser.newPage();
		await page.goto('url');
		// await page.waitForTimeout(2000)
		await page.waitForSelector('img');
		await page.reload();
		await page.waitForSelector('img');

		// navigate to another site		await page.goto('https://platzi.com/');
		await page.waitForSelector(
			'#home-public > div > div.BaseLayout > header > nav > div.Logo > div > a > div > figure:nth-child(1) > img'
		);

		await page.goBack();
		await page.goForward();

		// open another page in another tab
		const page2 = await browser.newPage();
		await page2.goto('url');
		await page2.waitForTimeout(2000);

		await browser.close();
	}, 20000);
});
