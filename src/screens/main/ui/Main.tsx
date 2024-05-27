'use client'

import { FC } from 'react'

import { CountriesList } from '@/widgets/countries-list'

import { useGetAllCountries } from '@/features/get-all-countries'

export const Main: FC = () => {
	const { countries = [], isError, isLoading, isSuccess } = useGetAllCountries()
	return (
		<main>
			<CountriesList countries={countries} />
		</main>
	)
}
