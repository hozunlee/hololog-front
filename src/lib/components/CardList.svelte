<script>
	import * as Pagination from '$lib/components/ui/pagination/index.js'
	import { Skeleton } from '$lib/components/ui/skeleton'

	import ChevronLeft from 'lucide-svelte/icons/chevron-left'
	import ChevronRight from 'lucide-svelte/icons/chevron-right'
	import LoaderCircle from 'lucide-svelte/icons/loader-circle'

	import Card from './Card.svelte'

	import { page } from '$app/stores'
	import { actionPost } from './utills/post'
	import { fade } from 'svelte/transition'

	export let postInfo

	let {
		posts,
		pagination: { pagination }
	} = postInfo

	let { page: currentPage, total, pageSize } = pagination
	let count = total
	$: perPage = pageSize
	$: siblingCount = 1

	let isLoading = false

	const getPage = async (movePageNumber) => {
		isLoading = true
		scrollTo({ top: 0, behavior: 'smooth' })
		try {
			const res = await actionPost(`/`, { page: movePageNumber })
			posts = res.posts
			pagination = res.pagination.pagination
			currentPage = res.pagination.pagination.page
			total = res.pagination.pagination.total
			pageSize = res.pagination.pagination.pageSize
		} finally {
			isLoading = false
		}
	}
</script>

<div class="card-list-wrapper w-full max-w-7xl mx-auto px-4 md:px-8">
	<div class="grid grid-cols-1 md:grid-cols-2 lg:gap-12 md:gap-8 gap-10">
		{#if isLoading}
			{#each Array(4) as _}
				<div class="space-y-4 bg-white p-4 rounded-[2rem] border border-gray-100 shadow-sm animate-pulse">
					<Skeleton class="aspect-video w-full rounded-[1.5rem]" />
					<div class="space-y-3 px-2">
						<Skeleton class="h-6 w-3/4" />
						<Skeleton class="h-4 w-1/2" />
						<Skeleton class="h-4 w-1/4" />
					</div>
				</div>
			{/each}
		{:else}
			{#each posts as post (post.id)}
				<div in:fade={{ duration: 400 }}>
					<Card card={post} />
				</div>
			{/each}
		{/if}
	</div>

	<!-- Pagination -->
	<div class="mt-16 mb-8 flex justify-center">
		<Pagination.Root {count} {perPage} {siblingCount} let:pages let:currentPage>
			<Pagination.Content class="bg-white p-2 rounded-full border border-gray-200 shadow-sm">
				<Pagination.Item>
					<Pagination.PrevButton 
						on:click={() => getPage(currentPage - 1)} 
						disabled={isLoading}
						class="rounded-full hover:bg-gray-100 transition-colors"
					>
						<ChevronLeft class="h-4 w-4" />
						<span class="hidden sm:inline-block ml-1">Prev</span>
					</Pagination.PrevButton>
				</Pagination.Item>
				
				{#each pages as page (page.key)}
					{#if page.type === 'ellipsis'}
						<Pagination.Item>
							<Pagination.Ellipsis />
						</Pagination.Item>
					{:else}
						<Pagination.Item>
							<Pagination.Link
								{page}
								isActive={currentPage === page.value}
								on:click={() => getPage(page.value)}
								disabled={isLoading}
								class={`rounded-full min-w-[40px] h-10 flex items-center justify-center transition-all ${
									currentPage === page.value 
									? 'bg-blue-600 text-white font-bold' 
									: 'hover:bg-gray-100'
								}`}
							>
								{page.value}
							</Pagination.Link>
						</Pagination.Item>
					{/if}
				{/each}

				<Pagination.Item>
					<Pagination.NextButton 
						on:click={() => getPage(currentPage + 1)} 
						disabled={isLoading}
						class="rounded-full hover:bg-gray-100 transition-colors"
					>
						<span class="hidden sm:inline-block mr-1">Next</span>
						<ChevronRight class="h-4 w-4" />
					</Pagination.NextButton>
				</Pagination.Item>
			</Pagination.Content>
		</Pagination.Root>
	</div>
</div>

<style>
	.card-list-wrapper {
		margin-top: 2rem;
	}
</style>
