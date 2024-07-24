const puppeteer = require('puppeteer');

describe('Extract information with hooks', () => {
	let browser;
	let page;

	beforeEach(async () => {
		browser = await puppeteer.launch({
			headless: false,
			defaultViewport: null,
		});

		page = await browser.newPage();
		await page.goto('https://platzi.com', { waitUntil: 'networkidle2' });
	}, 20000);

	afterEach(async () => {
		await browser.close();
	}, 20000);

	it('extract the info about an element', async () => {
		await page.waitForSelector(
			'#Header-v2 > nav.Nav-header.Nav-header-mobileCtas > div.Logo > div > a > div > figure > img'
		);
	}, 30000);
});
