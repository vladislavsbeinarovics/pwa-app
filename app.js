if ('serviceWorker' in navigator)
{
	navigator.serviceWorker.register('./service-worker.js')
		.then((registration) => {
			console.log('SW registered: ', registration);
		})
		.catch((registrationError) => {
			console.log('SW registration failed: ', registrationError);
		});

	navigator.serviceWorker.register('/service-worker.js').catch(e => console.log('Full error:', e))
}