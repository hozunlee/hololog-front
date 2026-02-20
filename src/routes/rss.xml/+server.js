import { Feed } from 'feed'
import { fetchAPI } from '$lib/components/utills/api'

export const prerender = true

// XML에서 허용되지 않는 제어 문자 및 유효하지 않은 유니코드 문자 제거
const cleanXmlString = (str) => {
	if (!str) return ''
	return str
		.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/g, '') // 제어 문자 제거
		.replace(/[\uD800-\uDBFF](?!\uDC00-\uDFFF)/g, '') // 단독 상위 써로게이트 제거
		.replace(/(?<![\uD800-\uDBFF])[\uDC00-\uDFFF]/g, '') // 단독 하위 써로게이트 제거
}

export const GET = async () => {
	const site = 'https://hololog.dev'
	const { posts } = await fetchAPI('/posts', {
		sort: ['publishedAt:desc'],
		pagination: { pageSize: 100 }
	})

	const feed = new Feed({
		title: 'hololog | RSS Feed',
		description: 'hololog의 RSS | 마음 껏 탐험하세요.',
		link: site,
		id: site,
		language: 'ko',
		copyright: 'dev | hojun lee',
		author: {
			name: 'hojun lee',
			email: 'ho2yahh@gmail.com'
		}
	})

	if (posts && Array.isArray(posts)) {
		posts.forEach((p) => {
			feed.addItem({
				title: cleanXmlString(p.attributes.title),
				id: String(p.id),
				link: `${site}/post/${p.id}`,
				description: cleanXmlString(p.attributes.desc),
				date: new Date(p.attributes.publishedAt)
			})
		})
	}

	return new Response(feed.rss2(), {
		headers: {
			'Content-Type': 'application/xml; charset=utf-8',
			'Cache-Control': 'max-age=0, s-maxage=3600'
		}
	})
}
