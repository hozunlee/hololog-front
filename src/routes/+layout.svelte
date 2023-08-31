<script>
	import Header from './Header.svelte'
	import './styles.css'
</script>

<div class="app">
	<header>
		<Header />
	</header>

	<!-- <main> -->
	<slot />
	<!-- </main> -->

	<footer>
		<p>
			visit <a href=" https://climbing-scraper-c52.notion.site/b79cb7a85b3040fe96036795ed2e1cec"
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
