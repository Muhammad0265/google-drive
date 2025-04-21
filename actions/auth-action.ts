'use server'

import { axiosClient } from '@/http/axios'
import { UserCreate } from './type'

export const createUser = async ({
	clerkId,
	email,
	fullName,
	picture,
}: UserCreate) => {
	try {
		const { data } = await axiosClient.post('/api/user/media', {
			email,
			fullName,
			clerkId,
			picture,
		})
		return data
	} catch (err) {
		throw new Error(`Error creating user ${err}`)
	}
}

export const getUser = async () => {
	const data = await axiosClient.get('/api/users')
	return data.data['hydra:member']
}
