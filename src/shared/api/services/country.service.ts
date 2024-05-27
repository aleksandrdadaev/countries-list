import { AxiosResponse } from 'axios'

import { ICountry } from '@/shared/model/types/country.type'

import { $api } from '../instance-axios'

export const CountryService = {
	getAll: async (): Promise<AxiosResponse<ICountry[]>> =>
		$api.get<ICountry[]>('/all'),
	getBy: async (
		prop: string,
		value: string
	): Promise<AxiosResponse<ICountry[]>> =>
		$api.get<ICountry[]>(`/${prop}/${value}`),
}
