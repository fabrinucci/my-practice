const puppeteer = require('puppeteer');

describe('Geolocation', () => {
	let browser;
	let page;

	beforeEach(async () => {
		browser = await puppeteer.launch({
			headless: false,
		});

		page = await browser.newPage();
		await page.goto('https://google.com', {
			waitUntil: 'networkidle0',
		});
	}, 20000);

	afterEach(async () => {
		await browser.close();
	}, 20000);

	test('Change geolocation', async () => {
		const context = await browser.defaultBrowserContext();
		await context.overridePermissions('https://chercher.tech/practice/geo-location.html', [
			'geolocation',
		]);

		await page.setGeolocation({ latitude: 70, longitude: 28 });
		await page.goto('https://chercher.tech/practice/geo-location.html');
		await new Promise((r) => setTimeout(r, 5000));

		await page.setGeolocation({ latitude: -20, longitude: 50 });
		await page.reload();
		await new Promise((r) => setTimeout(r, 5000));
	}, 30000);
});
