import axios from 'axios'

export const $api = axios.create({
	baseURL: process.env.SERVER_URL,
	headers: {
		'Content-Type': 'application/json',
	},
})
