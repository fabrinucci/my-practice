const puppeteer = require('puppeteer');

describe('First test', () => {
	it('Should open and close the browser', async () => {
		const browser = await puppeteer.launch({
			slowMo: 0,
			devtools: false,
			defaultViewport: {
				width: 2100,
				height: 1080,
			},
			args: ['--window-size=1920,1080'],
			defaultViewport: null,
		});
		const page = await browser.newPage();
		await page.goto('https://www.google.com');
		await browser.close();
	}, 20000);
});
