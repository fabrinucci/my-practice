const puppeteer = require('puppeteer');

describe('waitTypes', () => {
	it('extract title and url', async () => {
		const browser = await puppeteer.launch({
			headless: false,
			defaultViewport: null,
		});

		const page = await browser.newPage();
		await page.goto('https://platzi.com', { waitUntil: 'networkidle2' });

		const title = await page.title();
		const url = page.url();
		console.log({ title });
		console.log({ url });

		await browser.close();
	}, 10000);

	it('extract the info about an element', async () => {
		const browser = await puppeteer.launch({
			headless: false,
			defaultViewport: null,
		});

		const page = await browser.newPage();
		await page.goto('https://platzi.com', { waitUntil: 'networkidle2' });

		const nameButton = await page.$eval(
			'#Header-v2 > nav.Nav-header.Nav-header-desktopCtas > div.Menu > div > div > ul > li:nth-child(5) > a',
			(button) => button.textContent
		);

		console.log({ nameButton });

		const [loginButton] = await page.$x('//*[@id="Header-v2"]/nav[2]/section/button[2]');

		// way 1
		const property = await loginButton.getProperty('textContent');
		const textButton = await property.jsonValue();
		// console.log({ textButton });

		// way 2
		const textButton2 = await page.evaluate((name) => name.textContent, loginButton);
		// console.log({ textButton2 });

		// way 3
		const loginButton3 = await page.waitForXPath('//*[@id="Header-v2"]/nav[1]/section/button[2]');
		const textButton3 = await page.evaluate((name) => name.textContent, loginButton3);
		console.log({ textButton3 });

		await browser.close();
	}, 30000);

	it('count elements', async () => {
		const browser = await puppeteer.launch({
			headless: false,
			defaultViewport: null,
		});

		const page = await browser.newPage();
		await page.goto('https://platzi.com', { waitUntil: 'networkidle2' });

		const imagesCount = await page.$$eval('img', (images) => images.length);
		console.log({ imagesCount });

		await browser.close();
	}, 10000);
});
