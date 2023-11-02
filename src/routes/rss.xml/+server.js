import { Feed } from 'feed'

export const prerender = true

export const GET = async ({ fetch }) => {
	const site = 'https://hololog.dev'
	const response = await fetch('https://hostile-tommi-hololog.koyeb.app/api/posts')
	if (!response) {
		throw new Error('Failed to fetch posts.')
	}
	const posts = await response.json()
	if (!posts) {
		throw new Error('Failed to fetch posts.')
	}
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

	posts.data.forEach((p) => {
		feed.addItem({
			title: p.attributes.title,
			id: p.id,
			link: `${site}/post/${p.id}`,
			description: p.attributes.desc,
			date: new Date(p.attributes.publishedAt)
		})
	})

	return new Response(feed.rss2(), { headers: { 'Content-Type': 'text/xml; charset=utf-8' } })
}
