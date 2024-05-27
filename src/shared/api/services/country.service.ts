import { AxiosResponse } from 'axios'

import { ICountry } from '@/shared/model/types/country.type'

import { $api } from '../instance-axios'

export const CountryService = {
	getAll: async (): Promise<AxiosResponse<ICountry[]>> =>
		$api.get<ICountry[]>('/all'),
}
