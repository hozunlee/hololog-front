<script>
	import { page } from '$app/stores'
	import dayjs from 'dayjs'

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
		<h1>Tech에 대한 모든 것을 <br /><span class="font-color">모아서 기록</span>합니다.</h1>
		<div class="card-box">
			{#each data.series as { attributes }}
				<!-- content here -->
				<div class="card">
					<!-- <div class="card-title">카드 제목</div> -->
					<a href={`/series/${attributes.title}`}
						><div class="card-description">{attributes.title}</div></a
					>
					<div class="card-footer">
						<div class="author">last update</div>
						<div class="date">{dayjs(attributes.updatedAt).format('MM/DD/YYYY')}</div>
					</div>
				</div>
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
		margin-top: 5rem;
		/* padding: 10px; */
		margin-bottom: 5rem;
	}

	section > .container {
		max-width: 600px;
	}

	a {
		color: black;
		font-size: 15px;
		font-weight: bold;
		margin-bottom: 10px;
	}
	a:hover {
		color: var(--color-theme-1);
	}

	h1 {
		margin-bottom: 1.5rem;
		padding-left: 0.7rem;
	}

	.card-box {
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		justify-content: flex-start;
	}

	.font-color {
		background-color: var(--color-theme-3);
		color: var(--color-theme-2);
	}
	.card {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		width: 100%;
		max-width: 300px;
		padding: 20px;
		/* margin: 0 2rem; */
		border: 1px solid #ddd;
		border-radius: 8px;
		background-color: #fff;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	}

	.card-title {
		font-size: 18px;
		font-weight: bold;
		margin-bottom: 10px;
	}

	.card-description {
		font-size: 15px;
		font-weight: bold;
		margin-bottom: 10px;
	}

	.card-footer {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.card-footer .author {
		font-size: 12px;
		color: #666;
	}

	.card-footer .date {
		font-size: 12px;
		color: #999;
	}

	@media (max-width: 600px) {
		.card {
			/* flex: 0 0 100%; */
			margin: 0 2rem;
		}
	}

	@media (min-width: 700px) {
		br {
			display: none;
		}
	}
</style>
