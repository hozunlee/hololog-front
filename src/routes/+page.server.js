import { fetchAPI } from '$lib/components/utills/api'
import { supabase } from '$lib/supabase/supabaseClient'

// import { BYPASS_TOKEN } from '$env/static/private'

export const config = {
	isr: {
		// Expiration time (in seconds) before the cached asset will be re-generated by invoking the Serverless Function.
		// Setting the value to `false` means it will never expire.
		expiration: 60,

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

export async function load() {
	const { data } = await supabase.from('cakes').select('id, author, from, item, speaker')

	const res = await fetchAPI('/posts', {
		populate: ['cover'],
		sort: ['id:desc'],
		fields: ['title', 'desc', 'keyword', 'publishedAt']
	})

	return {
		props: { cakes: data ?? [], posts: res }
		// revalidate: 10 // In seconds
	}
}
