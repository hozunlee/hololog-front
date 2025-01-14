import { supabase } from '$lib/supabase/supabaseClient'
import { fail, redirect } from '@sveltejs/kit'

export async function load({ url }) {
	const q = url.searchParams.get('q')

	// cake page
	const page = parseInt(url.searchParams.get('page') || '1')
	const pageSize = 10
	const start = (page - 1) * pageSize
	const end = start + pageSize - 1

	if (!q || q !== 'admin') {
		throw redirect(303, '/') // throw를 추가하여 리디렉션 실행
	}

	const { data, error, count } = await supabase
		.from('cakes')
		.select('id, author, from, item, speaker', { count: 'exact' })
		.order('id', { ascending: false })
		.range(start, end)

	// console.log('data :>> ', data)

	return {
		items: data,
		totalPages: Math.ceil(count / pageSize),
		currentPage: page
	}
}

export const actions = {
	addCake: async ({ request }) => {
		const formData = await request.formData()

		const item = formData.get('item')
		const from = formData.get('from')
		const author = formData.get('author')
		const speaker = formData.get('speaker')

		if (!item || !from || !author) {
			return fail(400, {
				error: '모든 필드를 입력해주세요'
			})
		}

		console.log('addCake')
		const { data, error } = await supabase
			.from('cakes')
			.insert([
				{
					item,
					from,
					author,
					speaker
				}
			])
			.select()
		if (error) {
			return fail(500, {
				error: '저장 중 오류가 발생했습니다'
			})
		}

		return { success: true }
	}
}
