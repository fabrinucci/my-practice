const puppeteer = require('puppeteer');

describe('Generate PDF', () => {
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

	test('Full screen PDF', async () => {
		let pdfCSS = [];

		pdfCSS.push('<style>');
		pdfCSS.push('h1{ font-size:10px; margin-left:30px;}');
		pdfCSS.push('</style>');

		const css = pdfCSS.join('');

		await page.pdf({
			path: 'assets/platzi.pdf',
			format: 'A4',
			printBackground: true,
			displayHeaderFooter: true,
			headerTemplate: css + '<h1>' + 'First script to generate pdf' + '</h1>',
			footerTemplate:
				css + '<h1> page <span class="pageNumber"></span> of <span class="totalPages"></span></h1>',

			margin: {
				top: '100px',
				bottom: '200px',
				right: '30px',
				left: '30px',
			},
		});
	}, 30000);
	test('Full screen PDF landscape', async () => {
		let pdfCSS = [];

		pdfCSS.push('<style>');
		pdfCSS.push('h1{ font-size:10px; margin-left:30px;}');
		pdfCSS.push('</style>');

		const css = pdfCSS.join('');

		await page.pdf({
			path: 'assets/platzi_landscape.pdf',
			format: 'A4',
			printBackground: true,
			displayHeaderFooter: true,
			headerTemplate: css + '<h1>' + 'Second script to generate pdf on landscape' + '</h1>',
			footerTemplate:
				css + '<h1> page <span class="pageNumber"></span> of <span class="totalPages"></span></h1>',

			margin: {
				top: '100px',
				bottom: '200px',
				right: '30px',
				left: '30px',
			},
			landscape: true,
		});
	}, 30000);
});
