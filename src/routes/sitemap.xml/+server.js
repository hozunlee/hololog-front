export async function GET({ fetch, setHeaders }) {
	setHeaders({
		'Content-Type': 'application/xml'
	})

	const site = 'https://hololog.dev'

	const response = await fetch('https://server-hololog.onrender.com/api/posts')
	if (!response.ok) {
		throw new Error('Failed to fetch posts.')
	}
	const posts = await response.json()
	if (!posts.ok) {
		throw new Error('Failed to fetch posts.')
	}

	const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
  <loc>${site}</loc>
  <changefreq>daily</changefreq>
  <priority>0.7</priority>
  </url>
  ${posts.data
		.map(
			(post) => `
  <url>
  <loc>${site}/post/${post.id}</loc>
  <changefreq>weekly</changefreq>
  <lastmod>${post.attributes.publishedAt.split('T')[0]}</lastmod>
  </url>
  `
		)
		.join('')}
  </urlset>`
	return new Response(sitemap)
}
