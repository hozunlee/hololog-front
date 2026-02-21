<script>
	import { page } from '$app/stores'
	import dayjs from 'dayjs'

	export let data
</script>

<svelte:head>
	<title>Series - hololog | 비교할 수 없는 tech 기록</title>
	<meta name="description" content="기술 연재 시리즈 | hololog에서 탐구하는 깊이 있는 테크 인사이트" />
	<meta property="og:title" content="Series | hololog" />
	<meta property="og:url" content={$page.url.href} />
	<meta property="og:type" content="website" />
</svelte:head>

<section class="series-section">
	<div class="container">
		<header class="page-header">
			<h1 class="main-title">
				Tech의 모든 것,<br />
				<span class="highlight">모아서 기록</span>합니다.
			</h1>
			<p class="subtitle">관심 있는 주제를 선택하여 깊이 있는 기술 연재를 탐험해 보세요.</p>
		</header>

		<div class="series-grid">
			{#each data.series as { attributes }}
				<a href={`/series/${attributes.title}`} class="series-card">
					<div class="card-content">
						<h3 class="card-title">{attributes.title}</h3>
						<p class="card-description">
							{attributes.desc || '이 시리즈에 대한 설명이 준비 중입니다.'}
						</p>
					</div>
					<div class="card-footer">
						<span class="update-label">Last updated</span>
						<span class="date">{dayjs(attributes.updatedAt).format('YYYY.MM.DD')}</span>
					</div>
				</a>
			{/each}
		</div>
	</div>
</section>

<style>
	:root {
		--card-bg: #ffffff;
		--card-hover-border: var(--color-theme-1);
		--text-muted: #666;
		--text-subtle: #999;
	}

	.series-section {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 5rem 1.5rem;
		min-height: 80vh;
	}

	.container {
		width: 100%;
		max-width: 960px;
	}

	.page-header {
		margin-bottom: 4rem;
	}

	.main-title {
		font-size: 2.5rem;
		font-weight: 800;
		line-height: 1.3;
		letter-spacing: -0.02em;
		margin-bottom: 1rem;
		color: var(--color-text);
	}

	.highlight {
		background-color: var(--color-theme-3);
		color: var(--color-theme-2);
		padding: 0 0.4rem;
	}

	.subtitle {
		font-size: 1.1rem;
		color: var(--text-muted);
		word-break: keep-all;
	}

	/* Grid System */
	.series-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		gap: 1.5rem;
		width: 100%;
	}

	.series-card {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		padding: 2rem;
		background: var(--card-bg);
		border: 1px solid #eaeaea;
		border-radius: 12px;
		text-decoration: none;
		transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
		position: relative;
		overflow: hidden;
	}

	.series-card:hover {
		transform: translateY(-4px);
		border-color: var(--card-hover-border);
		box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
	}

	.series-card::after {
		content: '';
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 3px;
		background: var(--color-theme-1);
		transform: scaleX(0);
		transition: transform 0.25s ease;
		transform-origin: left;
	}

	.series-card:hover::after {
		transform: scaleX(1);
	}

	.card-title {
		font-size: 1.4rem;
		font-weight: 700;
		color: #1a1a1a;
		margin: 0 0 1rem 0;
		word-break: keep-all;
	}

	.card-description {
		font-size: 0.95rem;
		color: var(--text-muted);
		line-height: 1.6;
		margin-bottom: 1.5rem;
		display: -webkit-box;
		-webkit-line-clamp: 3;
		-webkit-box-orient: vertical;
		overflow: hidden;
		word-break: keep-all;
	}

	.card-footer {
		display: flex;
		align-items: center;
		justify-content: space-between;
		border-top: 1px solid #f5f5f5;
		padding-top: 1.25rem;
	}

	.update-label {
		font-size: 0.75rem;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		color: var(--text-subtle);
		font-weight: 600;
	}

	.date {
		font-size: 0.85rem;
		color: var(--text-muted);
		font-family: 'Fira Mono', monospace;
	}

	@media (max-width: 768px) {
		.main-title {
			font-size: 2rem;
		}
		
		.series-grid {
			grid-template-columns: 1fr;
		}
		
		.series-card {
			padding: 1.5rem;
		}
	}
</style>
