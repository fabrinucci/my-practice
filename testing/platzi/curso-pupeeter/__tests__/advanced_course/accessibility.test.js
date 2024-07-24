const puppeteer = require('puppeteer');
const { AxePuppeteer } = require('@axe-core/puppeteer');

describe('Accessibility', () => {
	let browser;
	let page;

	beforeEach(async () => {
		browser = await puppeteer.launch({
			headless: false,
		});

		page = await browser.newPage();
		await page.goto('https://platzi.com', {
			waitUntil: 'networkidle0',
		});
	}, 20000);

	afterEach(async () => {
		await browser.close();
	}, 20000);

	test('Accessibility test', async () => {
		await page.waitForSelector('img');
		const snapshot = await page.accessibility.snapshot();
		console.log(snapshot);
	}, 30000);

	test('Accessibility test with axe', async () => {
		await page.setBypassCSP(true);

		await page.waitForSelector('img');
		const result = await new AxePuppeteer(page).analyze();
		console.log(result.violations[0].nodes[0]);
	}, 30000);
});
