const puppeteer = require('puppeteer');

describe('waitTypes', () => {
	jest.setTimeout(20000);
	it('extract title and url', async () => {
		const browser = await puppeteer.launch({
			headless: false,
			defaultViewport: null,
		});

		const page = await browser.newPage();
		await page.goto('https://platzi.com', { waitUntil: 'networkidle2' });

		page.setDefaultTimeout(5000);
		page.setDefaultNavigationTimeout(5000);

		await page.waitForFunction(() => !document.querySelector('#example-modal-sizes-title-sm'));

		const title = await page.title();
		const url = page.url();
		console.log({ title });
		console.log({ url });

		await browser.close();
	});
});

//@ Los timeouts se pueden configurar de las siguientes maneras:
//$ Con jest.setTimeout(ms), importante colocarlo fuera del it o test.
//$ Con los setDefaultTimeout y setDefaultNavigationTimeout propios de puppeteer dentro del it
//$ Añadiendo un timeout a una función específica, pasando un objeto que incluye timeout: milisegundos
//$ Añadiendo los milisegundos directamente como parámetro en el it
