import { fetchAPI } from '$lib/components/utills/api'

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
	const res = await fetchAPI(`/posts/${String(params.id)}`, {
		populate: ['cover']
	})

	const { posts: post } = res
	return {
		post
	}
}
