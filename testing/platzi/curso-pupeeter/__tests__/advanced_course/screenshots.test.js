const puppeteer = require('puppeteer');

describe('Screenshots', () => {
	let browser;
	let page;

	beforeEach(async () => {
		browser = await puppeteer.launch({
			headless: false,
		});

		const context = await browser.createIncognitoBrowserContext();
		page = await context.newPage();
		await page.goto('https://google.com', { waitUntil: 'networkidle0' });
	}, 20000);

	afterEach(async () => {
		await browser.close();
	}, 20000);

	it('screenshot of a full viewport', async () => {
		await page.screenshot({
			path: 'assets/fwScreen.png',
			fullPage: true,
		});
	}, 30000);

	it('screenshot of a phone full viewport', async () => {
		const phone = puppeteer.KnownDevices['Galaxy S8'];
		await page.emulate(phone);

		await page.screenshot({
			path: 'assets/phoneScreen.png',
			fullPage: true,
		});
	}, 30000);

	it('screenshot of a specific location', async () => {
		await page.screenshot({
			path: 'assets/locationScreen.png',
			clip: {
				x: 0,
				y: 0,
				width: 600,
				height: 600,
			},
		});
	}, 30000);

	it('screenshot of a transparent background', async () => {
		await page.evaluate(() => (document.body.style.background = 'transparent'));

		await page.screenshot({
			path: 'assets/transparentScreen.png',
			omitBackground: true,
		});
	}, 30000);

	it('screenshot of a single element', async () => {
		const element = await page.waitForSelector(
			'body > div.L3eUgb > div.o3j99.ikrT4e.om7nvf > form > div:nth-child(1) > div.A8SBwf > div.RNNXgb'
		);

		await element.screenshot({
			path: 'assets/singleElementScreen.png',
			omitBackground: true,
		});
	}, 30000);
});
