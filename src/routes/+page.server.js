import { fetchAPI } from '$lib/components/utills/api'
import { supabase } from '$lib/supabase/supabaseClient'

export async function load() {
	const { data } = await supabase.from('cakes').select('id, author, from, item, speaker')

	const res = await fetchAPI('/posts', {
		populate: ['cover'],
		sort: ['id:desc']
	})

	return {
		props: { cakes: data ?? [], posts: res },
		revalidate: 10 // In seconds
	}
}
