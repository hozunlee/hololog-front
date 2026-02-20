import { fetchAPI } from '$lib/components/utills/api'

export const prerender = true

export async function GET() {
	const site = 'https://hololog.dev'

	// 포스트와 시리즈(books) 데이터를 병렬로 가져옴
	const [{ posts }, { posts: series }] = await Promise.all([
		fetchAPI('/posts', { pagination: { pageSize: 1000 } }),
		fetchAPI('/books', { pagination: { pageSize: 100 } })
	])

	const staticPages = ['', '/about', '/series']

	const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
	${staticPages
		.map(
			(path) => `
	<url>
		<loc>${site}${path}</loc>
		<changefreq>daily</changefreq>
		<priority>${path === '' ? '1.0' : '0.8'}</priority>
	</url>`
		)
		.join('')}
	${posts
		.map(
			(post) => `
	<url>
		<loc>${site}/post/${post.id}</loc>
		<lastmod>${post.attributes.publishedAt.split('T')[0]}</lastmod>
		<changefreq>weekly</changefreq>
		<priority>0.7</priority>
	</url>`
		)
		.join('')}
	${series
		.map(
			(s) => `
	<url>
		<loc>${site}/series/${encodeURIComponent(s.attributes.title)}</loc>
		<lastmod>${(s.attributes.updatedAt || s.attributes.publishedAt).split('T')[0]}</lastmod>
		<changefreq>weekly</changefreq>
		<priority>0.6</priority>
	</url>`
		)
		.join('')}
</urlset>`

	return new Response(sitemap, {
		headers: {
			'Content-Type': 'application/xml',
			'Cache-Control': 'max-age=0, s-maxage=3600'
		}
	})
}
