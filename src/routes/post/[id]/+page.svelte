<script>
	import { page } from '$app/stores'
	import Image from '$lib/components/Image.svelte'
	import dayjs from 'dayjs'
	import SvelteMarkdown from 'svelte-markdown'
	export let data
	const source = data.post.attributes.content
	const imgURL = data.post.attributes.cover.data.attributes.url

	const publishedAt = dayjs(data.post.attributes.publishedAt).format('MM/DD/YYYY')
</script>

<svelte:head>
	<title>{data.post.attributes.title} | hololog</title>
	<meta name="title" content={data.post.attributes.title} />
	<meta name="description" content={data.post.attributes.desc} />
	<meta charset="UTF-8" />

	<!-- og tag -->
	<meta property="og:title" content={data.post.attributes.title} />
	<meta property="og:description" content={data.post.attributes.desc} />
	<meta property="og:image" content={data.post.attributes.cover.data.attributes.url} />
	<meta property="og:url" content={$page.url.href} />
	<meta property="og:type" content="article" />
	<meta property="og:site_name" content="Hololog : 비교할 수 없는 Tech 기록" />
</svelte:head>

<section>
	<hgroup>
		<h1>{data.post.attributes.title}</h1>

		<div class="발행날짜">hojun lee <span class="separator">·</span> {publishedAt}</div>
	</hgroup>
	<div class="img-box">
		<Image src={imgURL} />
	</div>
	<figure class="container">
		<SvelteMarkdown {source} />
	</figure>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		/* flex: 0.6; */
		margin-top: 3rem;
		/* padding: 10px; */
	}

	section > .container {
		max-width: 900px;
	}

	.img-box {
		width: 100%;
		max-width: 900px;
	}

	figure {
		width: 100%;
		padding: 0 1rem;
		margin: 4rem auto 0px;
		margin-bottom: 3rem;
	}

	hgroup {
		padding: 0 1rem;
		margin-bottom: 1rem;
		width: 100%;
		max-width: 900px;
	}

	h1 {
		margin-top: 2rem;
		font-size: 3rem;
		line-height: 1.5;
		letter-spacing: -0.004em;
		font-weight: 800;
		color: var(--text1);
		margin-bottom: 0.7rem;
		word-break: keep-all;
		transition: color 0.125s ease-in 0s;
	}

	.발행날짜 {
		font-size: 0.875rem;
		color: gray;
	}

	.separator {
		margin-left: 0.2rem;
		margin-right: 0.2rem;
	}

	@media (max-width: 1024px) {
		h1 {
			font-size: 2.25rem;
		}
	}
</style>
