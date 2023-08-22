<script>
	export let card
	import dayjs from 'dayjs'

	const publishedAt = dayjs(card.attributes.publishedAt).format('YY/MM/DD')
	const keywords = card.attributes.keyword.replace(/(\s*)/g, '').split(',')
	const shortDesc = card.attributes.desc.slice(0, 100)

	const imgSrc = card.attributes.cover.data.attributes.url
</script>

<article class="">
	<header>
		<a href={`/post/${card.id}`}>
			<div class="post-thumbnail">
				<!-- <NextImage image={card.attributes.main_cover} /> -->
				<img src={imgSrc} alt="커버이미지" />
			</div>
		</a>
	</header>
	<div class="text-container">
		<h2 class="card-title">{card.attributes.title}</h2>
		<p class="card-desc">
			{shortDesc}... <a href={`/post/${card.id}`}>더보기</a>
		</p>
		{#each keywords as word}
			<!-- content here -->
			<span class="card-keyword">
				{word}
			</span>
		{/each}

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

	.post-thumbnail {
		width: 100%;
		position: relative;
		overflow: hidden;
		padding-top: 50%; /* 직사각형 비율에 따라 변경하세요 (예: 가로 2: 세로 1 = 50%) */
		padding-left: 2rem;
		padding-right: 2rem;
		/* max-height: 386px;
		width: 100%;
		position: relative;
		box-sizing: border-box;
		overflow: hidden;
		display: flex;
		align-items: center;
		justify-content: center; */
	}

	.post-thumbnail > img {
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		object-fit: cover;
		/* border: none;
		padding: 1rem;
		object-fit: cover;
		height: 100%;
		inset: 0px; */
	}

	.text-container > h2 {
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
	}

	.card-keyword {
		margin: 3px;
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

		.text-container > h2 {
			font-size: 1.3rem;
		}
	}
</style>
