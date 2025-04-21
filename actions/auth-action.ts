'use server'

import { axiosClient } from '@/http/axios'
import { UserCreate } from './type'

export async function createUser(data: UserCreate) {
	const res = await fetch('http://127.0.0.1:8500/api/user/media', {
		method: 'POST',
		body: JSON.stringify(data),
		headers: { 'Content-Type': 'application/ld+json' },
	})

	if (!res.ok) {
		throw new Error('Error creating user')
	}

	return await res.json()
}

export const getUser = async () => {
	const data = await axiosClient.get('/api/users')
	return data.data['hydra:member']
}
