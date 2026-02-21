import { fetchAPI } from '$lib/components/utills/api'

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
	const res = await fetchAPI(`/posts/${String(params.id)}`, {
		populate: ['cover', 'books']
	})

	const { posts: post } = res

	const booksData = post.attributes.books?.data || []
	const bookIds = booksData.map((/** @type {{ id: any; }} */ b) => b.id)
	const seriesName = booksData[0]?.attributes?.title

	let relatedPosts = []

	if (bookIds.length > 0) {
		const relatedRes = await fetchAPI('/posts', {
			filters: {
				books: {
					id: {
						$in: bookIds
					}
				},
				id: {
					$ne: post.id
				}
			},
			pagination: {
				limit: 2
			},
			populate: ['cover']
		})
		relatedPosts = relatedRes.posts || []
	}

	return {
		post,
		relatedPosts,
		seriesName
	}
}
