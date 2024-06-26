import axios from 'axios'

export const $api = axios.create({
	baseURL: process.env.SERVER_URL,
	timeout: 30000,
	headers: {
		'Content-Type': 'application/json',
	},
})
