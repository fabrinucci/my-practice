const puppeteer = require('puppeteer');

describe('Performance', () => {
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

	test('Medir el performance de la automatizacion', async () => {
		await page.waitForSelector('img');
		const metrics = await page.metrics();
		console.log(metrics);
	});

	test('Medir performance load pagina con screenshots y extraccion', async () => {
		await page.tracing.start({ path: 'profile.json', screenshot: true });
		await page.goto('https://platzi.com');
		await page.tracing.stop();
		const tracing = JSON.parse(fs.readFileSync('./profile.json', 'utf8'));
		//filtrar el JSON
		const traceScreenShots = tracing.traceEvents.filter(
			(x) =>
				x.cat === 'disabled-by-default-devtools.screenshot' &&
				x.name === 'Screenshot' &&
				typeof x.args !== 'undefined' &&
				typeof x.args.snapshot !== 'undefined'
		);

		//iterar sobre este arrglo para crear las imagenes

		traceScreenShots.forEach(function (snap, index) {
			fs.writeFile(
				`trace-screenshot-${index}.png`,
				snap.args.snapshot,
				'base64',
				function (err) {}
			);

			if (err) {
				console.log('No pude crear el archivo', err);
			}
		});
	}, 350000);
});
