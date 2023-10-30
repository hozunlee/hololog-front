<script>
	/**	 * @type {any}	 */
	export let card
	import dayjs from 'dayjs'
	import Image from './Image.svelte'

	const publishedAt = dayjs(card.attributes.publishedAt).format('MM/DD/YYYY')
	const keywords = card.attributes.keyword.replace(/(\s*)/g, '').split(',')
	const shortDesc = card.attributes.desc.slice(0, 100)

	// 용량 작은거
	// const imgSrc = card.attributes.cover.data.attributes.formats.thumbnail.url
	// 기본 용량 webp 위주
	const imgSrc2 = card.attributes.cover.data.attributes.url
</script>

<article class="">
	<header>
		<a class="img-hover" href={`/post/${card.id}`}>
			<Image src={imgSrc2} />
		</a>
	</header>
	<div class="text-container">
		<a href={`/post/${String(card.id)}`}><h1 class="card-title">{card.attributes.title}</h1></a>
		<p class="card-desc">
			{shortDesc}... <a href={`/post/${card.id}`}>더보기</a>
		</p>
		<div>
			{#each keywords as word}
				<!-- content here -->
				<span class="card-keyword">
					{word}
				</span>
			{/each}
		</div>

		<div class="card-time">{publishedAt}</div>
	</div>
	<div class="구분선 div-transparent" />
</article>

<style>
	article {
		margin: 1rem;
		width: 100%;
		height: 100%;
		max-width: 700px;
	}
	header {
		box-sizing: border-box;
		max-width: 700px;
		margin: 0 auto;
		margin-bottom: calc(1rem * 1.1);
		padding: 0 1rem;
	}

	.text-container {
		padding: 0 1rem;
	}

	.text-container > a {
		text-decoration: none;
		color: var(--color-text);
	}

	.text-container > a > h1:hover {
		color: rgb(0, 53, 113);
	}

	.text-container > a > h1 {
		margin: 0;
		font-size: 1.5rem;
		word-break: keep-all;
		font-weight: 500;
	}

	.text-container > .card-desc {
		font-size: 1rem;
		color: var(--color-text);
		margin-bottom: 1rem;
		margin-top: 0.5rem;
		word-break: keep-all;
		overflow-wrap: break-word;
	}

	.text-container > .card-time {
		line-height: 1.5;
		font-size: 0.8rem;
		color: #acacac;
		margin: 1rem 0;
	}

	.card-keyword {
		margin-right: 3px;
		padding: 3px;
		border: 1px solid var(--color-theme-3);
		background-color: var(--color-theme-3);
		font-size: 0.7rem;
		border-radius: 10px;
		color: gray;
	}

	@media (max-width: 768px) {
		.text-container > .card-desc {
			font-size: 0.875rem;
			margin-bottom: 1.5rem;
			font-weight: 200;
		}

		.text-container > a > h1 {
			font-size: 1.3rem;
		}
	}
</style>
