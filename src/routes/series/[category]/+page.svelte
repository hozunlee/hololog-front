<script>
	import { page } from '$app/stores'
	import Card from '$lib/components/Card.svelte'
	import { fade, fly } from 'svelte/transition'
	import { Library, ArrowLeft, Calendar } from 'lucide-svelte'

	export let data
</script>

<svelte:head>
	<title>{data.시리즈} - hololog 시리즈</title>
	<meta name="description" content={`${data.시리즈} 시리즈의 모든 기술 기록을 탐험해 보세요.`} />
	<meta property="og:title" content={`${data.시리즈} | hololog`} />
	<meta property="og:url" content={$page.url.href} />
	<meta property="og:type" content="website" />
</svelte:head>

<div class="min-h-screen bg-slate-50/50">
	<main class="max-w-7xl mx-auto px-4 py-12 md:py-20">
		<!-- Navigation -->
		<nav class="mb-8 md:mb-12" in:fly={{ y: -10, duration: 500 }}>
			<a 
				href="/series" 
				class="inline-flex items-center gap-2 text-slate-500 hover:text-blue-600 transition-colors font-medium text-sm group"
			>
				<ArrowLeft size={16} class="transition-transform group-hover:-translate-x-1" />
				시리즈 목록으로 돌아가기
			</a>
		</nav>

		<!-- Header Section -->
		<header class="mb-12 md:mb-20 space-y-6" in:fly={{ y: 20, duration: 600 }}>
			<div class="flex items-center gap-2 text-blue-600 font-bold text-xs md:text-sm tracking-widest uppercase">
				<Library size={18} />
				<span>Series Collection</span>
			</div>
			
			<h1 class="text-4xl md:text-6xl font-black text-slate-900 leading-[1.1] break-keep tracking-tight">
				{data.시리즈}
			</h1>
			
			<div class="flex items-center gap-4 text-slate-500 font-medium">
				<div class="h-1.5 w-16 md:w-24 bg-blue-600 rounded-full"></div>
				<span class="flex items-center gap-2 text-sm md:text-base">
					<Calendar size={16} />
					총 <strong>{data.list.length}개</strong>의 기술 기록
				</span>
			</div>
		</header>

		<!-- Pinterest-style Grid -->
		<div class="series-masonry-grid columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
			{#each data.list as post, i}
				<div 
					class="break-inside-avoid-column inline-block w-full"
					in:fade={{ delay: 200 + i * 50, duration: 400 }}
				>
					<div class="group relative bg-white rounded-[2rem] border border-slate-200/60 shadow-sm hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 hover:-translate-y-2 overflow-hidden">
						<Card card={post} />
						
						<!-- Hover Interaction Overlay -->
						<div class="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/[0.02] pointer-events-none transition-colors duration-500"></div>
					</div>
				</div>
			{/each}
		</div>

		{#if data.list.length === 0}
			<div class="text-center py-32 bg-white rounded-[3rem] border border-dashed border-slate-200">
				<Library size={48} class="mx-auto text-slate-200 mb-4" />
				<p class="text-slate-400 font-medium">아직 등록된 포스트가 없습니다.</p>
			</div>
		{/if}
	</main>
</div>

<style>
	/* 기존 Card 컴포넌트의 스타일을 Masonry 레이아웃에 맞게 오버라이드 */
	:global(.series-masonry-grid article) {
		margin: 0 !important;
		max-width: none !important;
		border: none !important;
		background: transparent !important;
		box-shadow: none !important;
	}

	:global(.series-masonry-grid .text-container) {
		padding: 1.5rem 1.75rem 2rem !important;
	}

	:global(.series-masonry-grid header) {
		padding: 0 !important;
		margin-bottom: 0 !important;
	}

	/* 핀터레스트 그리드 사이 간격 보정 */
	.series-masonry-grid {
		column-gap: 1.5rem;
	}
</style>
