'use client'

import { FC } from 'react'

import { CountriesList } from '@/widgets/countries-list'

import { useGetAllCountries } from '@/features/get-all-countries'

import { Loader } from '@/shared/ui/loader/Loader'

import styles from './Main.module.scss'

export const Main: FC = () => {
	const { countries = [], isError, isLoading, isSuccess } = useGetAllCountries()
	return (
		<main className={styles.wrapper}>
			<div className={styles.content}>
				{isLoading && <Loader />}
				{isSuccess && countries.length > 0 && (
					<CountriesList countries={countries} />
				)}
			</div>
		</main>
	)
}
