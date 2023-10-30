import axios from 'axios'

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
	const res = await axios(
		`https://hostile-tommi-hololog.koyeb.app/api/posts?sort=publishedAt:ASC&filters[$and][0][books][title][$eq]=${params.category}&fields[0]=title&fields[1]=desc&fields[2]=publishedAt`
	)

	return {
		list: res.data.data
	}
}
