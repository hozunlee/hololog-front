<script>
	import { page } from '$app/stores'
	import Image from '$lib/components/Image.svelte'
	import Card from '$lib/components/Card.svelte'
	import { Share2 } from 'lucide-svelte'
	import dayjs from 'dayjs'
	import SvelteMarkdown from 'svelte-markdown'
	import Giscus from '$lib/components/utills/Giscus.svelte'

	export let data

	const relatedPosts = data.relatedPosts || []
	const seriesName = data.seriesName

	const source = data.post.attributes.content
	const imgURL = data.post.attributes.cover.data.attributes.url

	const publishedAt = dayjs(data.post.attributes.publishedAt).format('MM/DD/YYYY')

	const handleShare = async () => {
		if (navigator.share) {
			try {
				await navigator.share({
					title: data.post.attributes.title,
					text: data.post.attributes.desc,
					url: $page.url.href
				})
			} catch (err) {
				console.error('Share failed:', err)
			}
		} else {
			try {
				await navigator.clipboard.writeText($page.url.href)
				alert('주소가 복사되었습니다.')
			} catch (err) {
				console.error('Clipboard failed:', err)
			}
		}
	}
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

		{#if relatedPosts.length > 0}
			<div class="related-posts-container">
				<div class="related-header">
					<div class="related-title">{seriesName ? `[이어보기] ${seriesName}` : '이어지는 글'}</div>
					{#if seriesName}
						<a href={`/series/${seriesName}`} class="related-view-all">전체보기</a>
					{/if}
				</div>
				<div class="related-list">
					{#each relatedPosts as post (post.id)}
						<a href={`/post/${String(post.id)}`} class="related-item">
							<div class="related-item-content">
								<h3 class="related-item-title">{post.attributes.title}</h3>
								<p class="related-item-desc">{post.attributes.desc.slice(0, 100)}...</p>
								<div class="related-item-date">
									{dayjs(post.attributes.publishedAt).format('MM/DD/YYYY')}
								</div>
							</div>
							{#if post.attributes.cover?.data?.attributes?.url}
								<div class="related-item-image">
									<Image src={post.attributes.cover.data.attributes.url} />
								</div>
							{/if}
						</a>
					{/each}
				</div>
			</div>
		{/if}

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

<button class="floating-share-btn" on:click={handleShare} aria-label="Share">
	<Share2 size={24} />
</button>

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

	.related-posts-container {
		margin-top: 4rem;
		margin-bottom: 2rem;
		border-top: 1px solid #eaecef;
		padding-top: 2rem;
	}

	.related-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 1.5rem;
	}

	.related-title {
		font-size: 1.5rem;
		font-weight: 700;
	}

	.related-view-all {
		font-size: 0.9rem;
		color: #666;
		text-decoration: none;
	}

	.related-view-all:hover {
		color: var(--color-theme-1);
		text-decoration: underline;
	}

	.related-list {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.related-item {
		display: flex;
		text-decoration: none;
		color: inherit;
		border: 1px solid #eaecef;
		border-radius: 8px;
		padding: 1rem;
		transition: background-color 0.2s;
		align-items: center;
	}

	.related-item:hover {
		background-color: #f9f9f9;
	}

	.related-item-content {
		flex: 1;
		min-width: 0; /* Ensures text truncation works */
	}

	.related-item-title {
		font-size: 1.1rem;
		font-weight: 600;
		color: var(--color-text);
		margin: 0 0 0.5rem 0;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.related-item-desc {
		font-size: 0.9rem;
		color: #666;
		line-height: 1.5;
		margin: 0 0 0.5rem 0;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		line-clamp: 2;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}

	.related-item-date {
		font-size: 0.8rem;
		color: #999;
	}

	.related-item-image {
		width: 120px;
		height: 80px;
		margin-left: 1rem;
		border-radius: 4px;
		overflow: hidden;
		flex-shrink: 0;
	}

	/* Mobile Only Styles */
	@media (max-width: 768px) {
		.related-item-desc,
		.related-item-date,
		.related-item-image {
			display: none;
		}

		.related-item-title {
			margin-bottom: 0;
			font-size: 1rem;
			white-space: normal; /* Allow title wrap on mobile */
		}

		.related-item {
			padding: 0.8rem 1rem;
		}
	}

	.floating-share-btn {
		position: fixed;
		bottom: 2rem;
		right: 2rem;
		width: 3.5rem;
		height: 3.5rem;
		border-radius: 50%;
		background-color: white;
		border: 1px solid #eaecef;
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
		display: flex;
		justify-content: center;
		align-items: center;
		cursor: pointer;
		z-index: 1000;
		transition:
			transform 0.2s,
			box-shadow 0.2s;
	}

	.floating-share-btn:hover {
		transform: translateY(-2px);
		box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
	}
</style>
