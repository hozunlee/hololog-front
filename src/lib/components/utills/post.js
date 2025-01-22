import { deserialize } from '$app/forms'

/**
 * @param {string} url POST URL
 * @param {object} data Form Entries
 * @param {object} headers 추가로 header 값이 필요한 경우 객체형태로 추가
 * @returns {Promise<any>} SvelteKit action response data(deserialized)
 */
export const actionPost = async (url, data, headers = {}) => {
	let formData = new FormData()
	Object.entries(data).forEach(([key, value]) => formData.append(key, value))

	const res = await fetch(url, {
		method: 'POST',
		body: formData,
		headers: {
			...headers
		}
	})

	const { status, data: actionData } =
		/** @type {{ status: number; data: object }} */
		(deserialize(await res.text()))
	if (status !== 200) {
		console.error('actionPost response error')
		return null
	}

	return actionData
}
