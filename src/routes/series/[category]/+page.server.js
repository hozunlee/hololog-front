import { fetchAPI } from '$lib/components/utills/api'

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
	const res = await fetchAPI('/posts', {
		sort: ['publishedAt:ASC'],
		filters: {
			books: {
				title: {
					$eq: params.category
				}
			}
		},
		fields: ['title', 'desc', 'publishedAt'],
		populate: ['cover']
	})

	return {
		list: res.posts,
		시리즈: params.category
	}
}
