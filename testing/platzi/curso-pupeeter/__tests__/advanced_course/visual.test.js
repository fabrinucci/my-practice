const puppeteer = require('puppeteer');
const { toMatchImageSnapshot } = require('jest-image-snapshot');
expect.extend({ toMatchImageSnapshot });

describe('Visual test', () => {
	let browser;
	let page;

	beforeEach(async () => {
		browser = await puppeteer.launch({
			headless: false,
		});

		const context = await browser.createIncognitoBrowserContext();
		page = await context.newPage();
		await page.goto('https://platzi.com', { waitUntil: 'networkidle0' });
	}, 20000);

	afterEach(async () => {
		await browser.close();
	}, 20000);

	test('Snapshot of the whole page.', async () => {
		await page.waitForSelector('img');

		const screenshot = await page.screenshot();

		expect(screenshot).toMatchImageSnapshot({
			failureThreshold: 0.05,
			failureThresholdType: 'percent',
		});
	}, 30000);

	test('Snapshot of an element', async () => {
		await page.waitForSelector('img');

		const img = await page.waitForSelector('img');
		const screenshot = await img.screenshot();

		expect(screenshot).toMatchImageSnapshot({
			failureThreshold: 0.05,
			failureThresholdType: 'percent',
		});
	}, 30000);
});
