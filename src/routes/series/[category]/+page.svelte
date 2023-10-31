<script>
	import { page } from '$app/stores'
	import Card from '$lib/components/Card.svelte'

	export let data
</script>

<!-- meta -->
<svelte:head>
	<title>Series - hololog | 비교할 수 없는 tech 기록</title>
	<meta name="title" content="About - hololog | holo <비교할 수 없는 tech 기록> log" />
	<meta
		name="description"
		content="연재페이지 | holo <비교할 수 없는 tech 기록> log | hololog에서 우리는 개발자가 새로운 기술을 탐색하고 활용하는 방식을 혁신하는 임무에 착수했습니다. "
	/>

	<meta property="og:title" content="Series | hololog" />
	<meta property="og:description" content="holo <비교할 수 없는 tech 기록> log" />
	<meta
		property="og:image"
		content="https://mjxiofcpqnyfnskvoxut.supabase.co/storage/v1/object/public/strapi-uploads/ogimg01_1693478745390.jpeg"
	/>
	<meta property="og:url" content={$page.url.href} />
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content="Hololog | 비교할 수 없는 Tech 기록" />
</svelte:head>

<section>
	<div class="container">
		<header>
			<h2>시리즈</h2>
			<h1>{data.시리즈}</h1>
		</header>

		<div class="구분선" />
		<div>
			{#each data.list as post}
				<!-- content here -->
				<Card card={post} />
			{/each}
		</div>
	</div>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		/* flex: 0.6; */
		margin-top: 4rem;
		/* padding: 10px; */
	}

	header {
		padding-left: 0.4rem;
	}

	section > .container {
		max-width: 900px;
	}

	header > h2 {
		display: inline-flex;
		border-bottom: 4px solid var(--color-theme-1);
		font-size: 1.125rem;
		font-weight: bold;
		color: var(--color-theme-1);
		line-height: 1.5;
	}

	header > h1 {
		letter-spacing: -0.004em;
		margin-top: 1rem;
		line-height: 1.5;
		margin-bottom: 1.5rem;
		font-size: 2.5rem;
		outline: none;
		color: var(--color-text);
	}

	.container > .구분선 {
		background: #2e2e2e;
		height: 1px;
		width: 100%;
		margin-bottom: 1.5rem;
	}

	@media (max-width: 600px) {
		header > h1 {
			font-size: 2rem;
		}
	}
</style>
