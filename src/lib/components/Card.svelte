<script>
	/**	 * @type {any}	 */
	export let card
	import dayjs from 'dayjs'
	import Image from './Image.svelte'

	const publishedAt = dayjs(card.attributes.publishedAt).format('YYYY.MM.DD')
	/**	 * @type {Array<string>}	 */
	let keywords
	if (card.attributes.keyword) {
		keywords = card.attributes.keyword.replace(/(\s*)/g, '').split(',')
	}
	const shortDesc = card.attributes.desc ? card.attributes.desc.slice(0, 80) : ''

	const imgSrc2 = card.attributes.cover.data.attributes.url
</script>

<article class="group">
	<header class="overflow-hidden">
		<a class="block transition-transform duration-500 group-hover:scale-105" href={`/post/${String(card.id)}`}>
			<Image src={imgSrc2} />
		</a>
	</header>
	<div class="text-container">
		<a href={`/post/${String(card.id)}`} class="block group-hover:text-blue-600 transition-colors">
			<h2 class="card-title">{card.attributes.title}</h2>
		</a>
		<p class="card-desc">
			{shortDesc}... <a href={`/post/${String(card.id)}`} class="text-blue-500 font-semibold hover:underline">더보기</a>
		</p>
		
		<div class="flex flex-wrap gap-2 mb-4">
			{#if keywords}
				{#each keywords as word}
					<span class="card-keyword">
						#{word}
					</span>
				{/each}
			{/if}
		</div>

		<div class="card-time">{publishedAt}</div>
	</div>
</article>

<style>
	article {
		width: 100%;
		background: white;
		border-radius: 1.5rem;
		border: 1px solid #f0f0f0;
		transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
	}
	
	article:hover {
		border-color: #3b82f6;
		box-shadow: 0 10px 30px -10px rgba(59, 130, 246, 0.15);
	}

	header {
		width: 100%;
		border-radius: 1.5rem 1.5rem 0 0;
	}

	.text-container {
		padding: 1.5rem;
	}

	.card-title {
		margin: 0;
		font-size: 1.25rem;
		line-height: 1.4;
		word-break: keep-all;
		font-weight: 800;
		margin-bottom: 0.75rem;
	}

	.card-desc {
		font-size: 0.95rem;
		color: #4b5563;
		margin-bottom: 1rem;
		line-height: 1.6;
		word-break: keep-all;
	}

	.card-time {
		font-size: 0.8rem;
		color: #9ca3af;
		font-family: 'Fira Mono', monospace;
	}

	.card-keyword {
		font-size: 0.75rem;
		color: #6b7280;
		background: #f3f4f6;
		padding: 0.2rem 0.6rem;
		border-radius: 0.5rem;
		font-weight: 500;
	}

	@media (max-width: 640px) {
		.text-container {
			padding: 1.25rem;
		}
		.card-title {
			font-size: 1.125rem;
		}
	}
</style>
