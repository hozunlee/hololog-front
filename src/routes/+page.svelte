<script>
	import { page } from '$app/stores'
	import Cake from '$lib/components/Cake.svelte'
	import CardList from '$lib/components/CardList.svelte'
	import { onMount } from 'svelte'
	import { RefreshCcw } from 'lucide-svelte'
	import { fade } from 'svelte/transition'

	export let data
	$: ({ cakes, postInfo } = data.props)
	$: arrayLength = cakes.length

	/**
	 *
	 * @param arrayLength {number}
	 */
	const 랜덤숫자 = (arrayLength) => {
		return Math.floor(Math.random() * arrayLength)
	}

	const 메인문장만들기 = () => {
		메인문장 = cakes[랜덤숫자(arrayLength)]
	}
	/**
	 *
	 * @typedef {Object} cakeItem
	 * @property {number} id
	 * @property {string} item 문장 컨텐츠
	 * @property {string} author 작가
	 * @property {string} from 책이름
	 * @property {string} [speaker] 책 안에서 말한 사람이 다를 경우
	 */
	/** @type {cakeItem} */
	let 메인문장

	onMount(() => {
		메인문장 = cakes[랜덤숫자(cakes.length)]
	})
</script>

<svelte:head>
	<title>hololog | 비교할 수 없는 Tech 기록</title>
	<meta name="title" content="hololog | 비교할 수 없는 Tech 기록" />
	<meta
		name="description"
		content="holo <비교할 수 없는 tech 기록> log | Hololog는 아직 개발되지 않은 솔루션과 열망하는 마음 사이의 격차를 자극합니다. 흥미진진한 발견과 변화의 여정에 함께하세요."
	/>
	<meta property="og:title" content="Hololog" />
	<meta property="og:url" content={$page.url.href} />
	<meta property="og:type" content="website" />
</svelte:head>

<main class="min-h-screen">
	{#if 메인문장}
		<section
			class="hero-section py-12 md:py-16 px-6 flex flex-col items-center justify-center text-center"
		>
			<div in:fade={{ duration: 500 }} class="max-w-3xl w-full">
				<div class="mb-4">
					<button
						on:click={메인문장만들기}
						class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-400 text-slate-100 text-[10px] font-bold hover:bg-slate-200 transition-colors uppercase tracking-[0.1em] group"
					>
						<RefreshCcw
							size={12}
							class="group-active:rotate-180 transition-transform duration-300 "
						/>
						Inspire Me
					</button>
				</div>

				<div class="relative py-2">
					<Cake item={메인문장} />
				</div>
			</div>
		</section>
	{/if}

	<div class="w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent mb-12" />

	<section class="content-section pb-20">
		<CardList {postInfo} />
	</section>

	<footer class="py-16 text-center text-slate-300 font-medium">
		<h2 class="text-xs tracking-[0.3em] uppercase">hololog : No-Comparison Tech Log</h2>
	</footer>
</main>

<style>
	:global(body) {
		background-color: #ffffff;
	}

	.hero-section {
		background: radial-gradient(circle at top, #fafafa 0%, #ffffff 100%);
	}

	.content-section {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
