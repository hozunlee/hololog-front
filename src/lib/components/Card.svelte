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
	<h2 class="card-title">{card.attributes.title}</h2>
	<p>
		{shortDesc}... <a href={`/post/${card.id}`}>더보기</a>
	</p>
	<div class="card-time">{publishedAt}</div>
	<footer>
		{#each keywords as word}
			<!-- content here -->
			<span class="card-keyword">
				{word}
			</span>
		{/each}
	</footer>
</article>

<style>
	article {
		margin: 1rem;
	}
	header {
		box-sizing: border-box;
		max-width: 700px;
		margin: 0 auto;
		margin-bottom: calc(1rem * 2);
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
</style>
