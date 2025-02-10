<script>
	import { page } from '$app/stores'
	import Image from '$lib/components/Image.svelte'
	import dayjs from 'dayjs'
	import SvelteMarkdown from 'svelte-markdown'
	import Giscus from '$lib/components/utills/Giscus.svelte'

	export let data

	const source = data.post.attributes.content
	const imgURL = data.post.attributes.cover.data.attributes.url

	const publishedAt = dayjs(data.post.attributes.publishedAt).format('MM/DD/YYYY')
</script>

<svelte:head>
	<title>{data.post.attributes.title} - hololog | 비교할 수 없는 tech 기록</title>
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
	<meta name="naver-site-verification" content="ab0c76700bc2d1b64f9fc8d624acc59336e69ec1" />
</svelte:head>

<section>
	<hgroup>
		<h1>{data.post.attributes.title}</h1>

		<div class="발행날짜">hojun lee <span class="separator">·</span> {publishedAt}</div>
	</hgroup>
	<div class="img-box">
		<Image src={imgURL} />
	</div>
	<figure class="markdown-container">
		<SvelteMarkdown {source} />
		<footer>
			<Giscus
				repo="hozunlee/hololog-front"
				repoId="R_kgDOKBpLyQ"
				category="Comment"
				categoryId="DIC_kwDOKBpLyc4CZmQO"
				mapping="pathname"
				term="Welcome to @giscus/svelte component!"
				strict="1"
				reactionsEnabled="1"
				emitMetadata="0"
				inputPosition="bottom"
				theme="light"
				lang="ko"
			/>
		</footer>
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

	section > .markdown-container {
		max-width: 900px;
	}

	.img-box {
		width: 100%;
		max-width: 900px;
	}

	figure {
		width: 100%;
		padding: 0 1rem;
		margin: 2rem auto 0px;
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
		font-size: 1.5rem;
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
	footer {
		width: 100%;
	}

	.markdown-container h1 {
		font-size: 2.5rem;
		font-weight: 800;
		line-height: 1.3;
		margin: 2.5rem 0 1.5rem;
		letter-spacing: -0.004em;
	}

	.markdown-container h2 {
		font-size: 2rem;
		font-weight: 700;
		line-height: 1.4;
		margin: 2rem 0 1.25rem;
		border-bottom: 1px solid #eaecef;
		padding-bottom: 0.3em;
	}

	.markdown-container h3 {
		font-size: 1.5rem;
		font-weight: 600;
		line-height: 1.5;
		margin: 1.5rem 0 1rem;
	}

	.markdown-container p {
		margin: 1rem 0;
		line-height: 1.8;
		font-size: 1.125rem;
		color: #333;
		word-break: keep-all;
	}

	.markdown-container ul,
	.markdown-container ol {
		padding-left: 2rem;
		margin: 1rem 0;
	}

	.markdown-container li {
		margin: 0.5rem 0;
		line-height: 1.7;
	}

	.markdown-container blockquote {
		margin: 1.5rem 0;
		padding: 0.5rem 1rem;
		border-left: 4px solid #ddd;
		color: #666;
		background: #f8f8f8;
	}

	.markdown-container code {
		background: #f6f8fa;
		padding: 0.2em 0.4em;
		border-radius: 3px;
		font-family: monospace;
	}

	.markdown-container pre {
		margin: 1.5rem 0;
		padding: 1rem;
		background: #f6f8fa;
		border-radius: 4px;
		overflow-x: auto;
	}

	@media (max-width: 768px) {
		.markdown-container h1 {
			font-size: 2rem;
		}
		.markdown-container h2 {
			font-size: 1.75rem;
		}
		.markdown-container h3 {
			font-size: 1.4rem;
		}
		.markdown-container p {
			font-size: 1rem;
		}
	}
</style>
