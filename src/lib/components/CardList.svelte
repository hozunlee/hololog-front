<script>
	import * as Pagination from '$lib/components/ui/pagination/index.js'
	import { Skeleton } from '$lib/components/ui/skeleton'

	import ChevronLeft from 'lucide-svelte/icons/chevron-left'
	import ChevronRight from 'lucide-svelte/icons/chevron-right'
	import LoaderCircle from 'lucide-svelte/icons/loader-circle'

	import Card from './Card.svelte'

	import { page } from '$app/stores'
	import { actionPost } from './utills/post'

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
		scrollTo(0, 0)
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

{#if isLoading}
	<div class="space-y-4 bg-white p-4 rounded-lg shadow-md">
		<div class="flex items-center space-x-4">
			<Skeleton class="h-12 w-12 rounded-full" />
			<div class="space-y-2">
				<Skeleton class="h-4 w-[250px]" />
				<Skeleton class="h-4 w-[200px]" />
			</div>
		</div>
	</div>
	<div class="my-10">
		<LoaderCircle class="mr-2 h-4 w-4 animate-spin text-yellow-500" />
	</div>
{:else}
	{#each posts as post (post.id)}
		<!-- key 추가 -->
		<Card card={post} />
	{/each}
{/if}
<div>
	<Pagination.Root {count} {perPage} {siblingCount} let:pages let:currentPage>
		<Pagination.Content>
			<Pagination.Item>
				<Pagination.PrevButton on:click={() => getPage(currentPage - 1)} disabled={isLoading}>
					<ChevronLeft class="h-4 w-4" />
					<span class="hidden sm:block">Previous</span>
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
						>
							{page.value}
						</Pagination.Link>
					</Pagination.Item>
				{/if}
			{/each}
			<Pagination.Item>
				<Pagination.NextButton on:click={() => getPage(currentPage + 1)} disabled={isLoading}>
					<span class="hidden sm:block">Next</span>
					<ChevronRight class="h-4 w-4" />
				</Pagination.NextButton>
			</Pagination.Item>
		</Pagination.Content>
	</Pagination.Root>
</div>
