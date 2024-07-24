const { defineConfig } = require('cypress');

module.exports = defineConfig({
	e2e: {
		setupNodeEvents(on, config) {
			// implement node event listeners here
			on('task', {
				log(message) {
					console.log('Mensaje del console log del task ' + message);
					return null;
				},
			});
		},
		// ignore the tests mentioned
		excludeSpecPattern: [
			'**/1-getting-started/*.js',
			'**/2-advanced-examples/*.js',
		],
		// testIsolation: false,
		// viewportWidth: 1920,
		// viewportHeight: 1080,
		baseUrl: 'https://demoqa.com',
		video: false,
	},
});
