<script>
	import { page } from '$app/stores'
	import { PUBLIC_GA_ID } from '$env/static/public'

	$: {
		if (typeof gtag !== 'undefined') {
			gtag('config', PUBLIC_GA_ID, {
				page_title: document.title,
				page_path: $page.url.pathname
			})
		}
	}
</script>

<svelte:head>
	<script async src="https://www.googletagmanager.com/gtag/js?id=G-WQHZ6WMXZQ">
	</script>
	<script>
		window.dataLayer = window.dataLayer || []

		function gtag() {
			dataLayer.push(arguments)
		}

		gtag('js', new Date())
		gtag('config', 'G-WQHZ6WMXZQ')
	</script>
</svelte:head>
