<script>
	import '../app.css'
	import Header from './Header.svelte'

	import './styles.css'
	import '@fontsource/material-icons'
	import { dev } from '$app/environment'
	import { inject } from '@vercel/analytics'
	inject({ mode: dev ? 'development' : 'production' })

	import Ga from '$lib/components/utills/Ga.svelte'
</script>

<svelte:head>
	<link rel="alternate" type="application/rss+xml" title="RSS" href="/rss.xml" />
</svelte:head>

<div class="app">
	<Ga />
	<header class="w-full z-50">
		<Header />
	</header>

	<!-- <main> -->
	<slot />
	<!-- </main> -->

	<footer>
		<p>
			visit <a href="https://climbing-scraper-c52.notion.site/b79cb7a85b3040fe96036795ed2e1cec"
				>my tech portfolio
			</a> to contact hojun
		</p>
	</footer>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
