const puppeteer = require('puppeteer');

describe('Emulate devices', () => {
	let page;
	let browser;

	beforeAll(async () => {
		browser = await puppeteer.launch({
			headless: false,
		});

		const context = await browser.createIncognitoBrowserContext();
		page = await context.newPage();

		await page.goto('https://platzi.com');
	});

	afterAll(async () => {
		await browser.close();
	});

	test('emulate movil device', async () => {
		await page.emulate({
			name: 'My device',
			viewport: {
				width: 375,
				height: 667,
				deviceScaleFactor: 2,
				isMobile: true,
				hasTouch: true,
				isLandscape: false,
			},
			userAgent:
				'Mozilla/5.0 (Linux; Android 10; SAMSUNG SM-J600G) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/10.1 Chrome/71.0.3578.99 Mobile Safari/537.36',
		});
	}, 20000);

	test('emulate horizontal movil device', async () => {
		await page.setViewport({
			width: 1200,
			height: 800,
		});
	}, 20000);

	test('emulate tablet device', async () => {
		const tablet = puppeteer.KnownDevices['iPad Pro'];
		await page.emulate(tablet);
	}, 20000);

	test('emulate samsung M13 device', async () => {
		await page.emulate({
			name: 'Samsung M13',
			viewport: {
				width: 720,
				height: 1600,
				deviceScaleFactor: 2,
				isMobile: true,
				hasTouch: true,
				isLandscape: false,
			},
			userAgent:
				'Mozilla/5.0 (Linux; Android 10; SAMSUNG SM-J600G) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/10.1 Chrome/71.0.3578.99 Mobile Safari/537.36',
		});
	}, 20000);
});
