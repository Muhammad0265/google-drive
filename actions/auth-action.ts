'use server'

import { axiosClient } from '@/http/axios'
import { UserCreate } from './type'

export const createUser = async ({
	clerkId,
	email,
	fullName,
	picture,
}: UserCreate) => {
	const data = await axiosClient.post('/api/users', {
		clerkId,
		email,
		fullName,
		picture,
	})
	return JSON.parse(JSON.stringify(data))
}

export const getUser = async () => {
	const data = await axiosClient.get('/api/users')
	return data.data['hydra:member']
}
