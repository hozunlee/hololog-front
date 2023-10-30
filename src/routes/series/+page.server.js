import { fetchAPI } from '$lib/components/utills/api'

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
	const res = await fetchAPI(`/books`, {
		fields: ['title', 'updatedAt']
	})

	console.log('res :>> ', res)

	return {
		series: res
	}
}
