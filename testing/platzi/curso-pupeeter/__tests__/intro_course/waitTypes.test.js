const puppeteer = require('puppeteer');

describe('waitTypes', () => {
	it('show all wait types', async () => {
		const browser = await puppeteer.launch({
			headless: false,
			defaultViewport: null,
		});

		const page = await browser.newPage();
		await page.goto('https://platzi.com', { waitUntil: 'networkidle2' });

		// explicit wait
		// await new Promise((r) => setTimeout(r, 3000));

		// selector wait
		await page.waitForSelector(
			'#Header-v2 > nav.Nav-header.Nav-header-mobileCtas > div.Logo > div > a > div > figure > img'
		);

		await page.goto('https://demoqa.com/modal-dialogs', { waitUntil: 'networkidle0' });
		await page.waitForSelector('#showSmallModal', { visible: true });

		// the click method can only be used with css selectors
		await page.click('#showSmallModal');

		// wait for function
		await page.waitForFunction(
			() => document.querySelector('#example-modal-sizes-title-sm').innerText === 'Small Modal'
		);

		// wait for an observer function
		// const observerResize = page.waitForFunction('window.innerWidth < 300');
		// await page.setViewport({ width: 250, height: 250 });
		// await observerResize;

		await page.click('#closeSmallModal');
		await page.waitForFunction(() => !document.querySelector('#example-modal-sizes-title-sm'));

		await browser.close();
	}, 40000);
});
