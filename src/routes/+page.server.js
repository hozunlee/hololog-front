import { fetchAPI } from '$lib/components/utills/api'
import { supabase } from '$lib/supabase/supabaseClient'

// import { BYPASS_TOKEN } from '$env/static/private'

export const config = {
	runtime: 'edge',
	isr: {
		// Expiration time (in seconds) before the cached asset will be re-generated by invoking the Serverless Function.
		// Setting the value to `false` means it will never expire.
		expiration: 5,

		// Random token that can be provided in the URL to bypass the cached version of the asset, by requesting the asset
		// with a __prerender_bypass=<token> cookie.
		//
		// Making a `GET` or `HEAD` request with `x-prerender-revalidate: <token>` will force the asset to be re-validated.
		// bypassToken: BYPASS_TOKEN,

		// List of valid query parameters. Other parameters (such as utm tracking codes) will be ignored,
		// ensuring that they do not result in content being regenerated unnecessarily
		allowQuery: ['post']
	}
}

const fetchPosts = async (page = 1, pageSize = 5) => {
	return await fetchAPI('/posts', {
		populate: ['cover'],
		sort: ['id:desc'],
		fields: ['title', 'desc', 'keyword', 'publishedAt'],
		pagination: { page, pageSize }
	})
}

export async function load() {
	const { data, error } = await supabase.from('cakes').select('id, author, from, item, speaker')

	if (error) {
		console.error('cakes data load error :>> ', error)
	}

	const postInfo = await fetchPosts()

	return {
		props: { cakes: data ?? [], postInfo }
		// revalidate: 10 // In seconds
	}
}

export const actions = {
	default: async ({ request }) => {
		const { page } = Object.fromEntries(await request.formData())

		const pageNumber = Number(page)
		const postInfo = await fetchPosts(pageNumber)

		return postInfo
	}
}
