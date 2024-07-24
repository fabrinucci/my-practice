const puppeteer = require('puppeteer');

describe('Interact with the elements', () => {
	it('Inputs and click events', async () => {
		const browser = await puppeteer.launch({
			headless: false,
			defaultViewport: null,
		});

		const page = await browser.newPage();
		await page.goto('https://demo.guru99.com/test/simple_context_menu.html');

		// await page.click('#authentication > span', { button: 'right', delay: 500 });

		// accept alerts
		page.on('dialog', async (dialog) => {
			await dialog.accept();
		});

		await page.click('#authentication > button', { button: 'left', count: 2, delay: 500 });

		await page.goto('https://devexpress.github.io/testcafe/example');

		await page.type('#developer-name', 'Kevin', { delay: 100 });
		await page.click('#reusing-js-code');
		await page.click('#tried-test-cafe');

		await page.click('#linux');
		await page.select('#preferred-interface', 'JavaScript API');

		await page.type('#comments', 'Such a nice place to drink a coffee', { delay: 100 });
		await page.click('#submit-button', { button: 'left', delay: 500 });

		// timeout(3000);

		await browser.close();
	}, 30000);
});

const timeout = (ms) => {
	return new Promise((res) => setTimeout(res, ms));
};
