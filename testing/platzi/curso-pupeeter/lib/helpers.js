module.exports = {
	click: async (page, selector, options = {}) => {
		try {
			await page.waitForSelector(selector);
			return await page.click(selector, options);
		} catch (error) {
			throw new Error(`Error when clicking on selector: ${selector}`);
		}
	},
	doubleClick: async (page, selector) => {
		try {
			await page.waitForSelector(selector);
			return await page.click(selector, { clickCount: 2 });
		} catch (error) {
			throw new Error(`Error when double-clicking on selector: ${selector}`);
		}
	},

	type: async (page, selector, text, options = {}) => {
		try {
			await page.waitForSelector(selector);
			return await page.type(selector, text, options);
		} catch (error) {
			throw new Error(`Error when get type withe the selector: ${selector}`);
		}
	},

	getText: async (page, selector) => {
		try {
			await page.waitForSelector(selector);
			return await page.$eval(selector, (element) => element.textContent);
		} catch (error) {
			throw new Error(`Error when get text with the selector: ${selector}`);
		}
	},
};
