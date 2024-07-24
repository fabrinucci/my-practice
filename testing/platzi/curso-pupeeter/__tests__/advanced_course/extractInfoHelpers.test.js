const puppeteer = require('puppeteer');
const { click, doubleClick, getText, type } = require('../../lib/helpers');

describe('eject actions with helpers', () => {
	let browser;
	let page;

	beforeAll(async () => {
		browser = await puppeteer.launch({
			headless: false,
			defaultViewport: null,
		});

		const context = await browser.createIncognitoBrowserContext();
		page = await context.newPage();

		await page.goto('https://platzi.com', { waitUntil: 'networkidle2' });
	}, 20000);

	afterAll(async () => {
		await browser.close();
	}, 20000);

	test('extract the info about an element', async () => {
		await page.emulate({
			name: 'My device',
			viewport: {
				width: 1600,
				height: 1200,
				deviceScaleFactor: 2,
				isMobile: false,
				hasTouch: false,
			},
			userAgent:
				'Mozilla/5.0 (Linux; Android 10; SAMSUNG SM-J600G) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/10.1 Chrome/71.0.3578.99 Mobile Safari/537.36',
		});

		const nameButton = await getText(
			page,
			'#Header-v2 > nav.Nav-header.Nav-header-desktopCtas > div.Menu > div > div > ul > li:nth-child(5) > a'
		);
		console.log({ nameButton });

		await click(
			page,
			'#Header-v2 > nav.Nav-header.Nav-header-desktopCtas > div.Menu > div > div > ul > li:nth-child(2)',
			{ delay: 100 }
		);

		await page.goto('https://demo.guru99.com/test/simple_context_menu.html');

		page.on('dialog', async (dialog) => {
			await dialog.accept();
		});

		await doubleClick(page, '#authentication > button');

		await page.goto('https://devexpress.github.io/testcafe/example');

		await type(page, '#developer-name', 'Andres Perez', { delay: 100 });
	}, 50000);
}, 50000);
