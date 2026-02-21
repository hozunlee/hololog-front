<script>
	import { Copy, Share2, Check } from 'lucide-svelte'
	import { fade } from 'svelte/transition'

	/**
	 * @typedef {Object} cakeItem
	 * @property {number} id
	 * @property {string} item 문장 컨텐츠
	 * @property {string} author 작가
	 * @property {string} from 책이름
	 * @property {string} [speaker] 책 안에서 말한 사람이 다를 경우
	 */

	/** @type {cakeItem} */
	export let item

	let copied = false

	const handleCopy = async () => {
		const text = `"${item.item}"\n- ${item.speaker ?? item.author}, <${item.from}>\n\n출처: https://hololog.dev`
		try {
			await navigator.clipboard.writeText(text)
			copied = true
			setTimeout(() => (copied = false), 2000)
		} catch (err) {
			console.error('Copy failed', err)
		}
	}

	const handleShare = () => {
		if (navigator.share) {
			navigator.share({
				title: 'hololog inspiration',
				text: `"${item.item}" - ${item.speaker ?? item.author}`,
				url: window.location.href
			}).catch(() => {})
		} else {
			handleCopy()
		}
	}
</script>

<section class="cake-container">
	<div class="sentence-box">
		<p class="sentence">{item.item}</p>

		<div class="source-box">
			<p>{item.speaker ?? item.author}</p>
			<span class="separator">from</span>
			<p class="source-title">{item.from}</p>
		</div>

		<!-- Subtle Actions -->
		<div class="actions">
			<button on:click={handleCopy} title="복사하기" class="action-btn">
				{#if copied}
					<span in:fade><Check size={14} class="text-green-500" /></span>
				{:else}
					<Copy size={14} />
				{/if}
			</button>
			<button on:click={handleShare} title="공유하기" class="action-btn">
				<Share2 size={14} />
			</button>
		</div>
	</div>
</section>

<style>
	.cake-container {
		text-align: center;
		line-height: 1.4;
		max-width: 48rem;
		margin: 0 auto;
	}

	.sentence-box {
		padding: 1rem;
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.sentence {
		padding-bottom: 1.5rem;
		font-size: 1.1rem;
		letter-spacing: -0.01em;
		font-weight: 500;
		color: #1f2937;
		word-break: keep-all;
	}

	.source-box {
		font-size: 0.75rem;
		color: #9ca3af;
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	.separator {
		font-style: italic;
		font-size: 0.65rem;
		opacity: 0.7;
	}

	.source-title {
		font-weight: 600;
		color: #6b7280;
	}

	.actions {
		margin-top: 1.5rem;
		display: flex;
		gap: 1rem;
		opacity: 0;
		transition: opacity 0.3s ease;
	}

	.sentence-box:hover .actions {
		opacity: 1;
	}

	.action-btn {
		background: none;
		border: none;
		color: #d1d5db;
		cursor: pointer;
		padding: 0.4rem;
		border-radius: 0.5rem;
		transition: all 0.2s ease;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.action-btn:hover {
		color: #3b82f6;
		background-color: #f3f4f6;
	}

	@media (max-width: 640px) {
		.sentence {
			font-size: 1rem;
		}
		.actions {
			opacity: 0.4; /* 모바일은 항상 조금 보이게 */
		}
	}
</style>
