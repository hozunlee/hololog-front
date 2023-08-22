import { fetchAPI } from '$lib/components/utills/api'

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
	console.log('params :>> ', params)

	const res = await fetchAPI(`/posts/${params.id}`, {
		populate: ['cover']
	})
	return {
		post: res
	}
}
