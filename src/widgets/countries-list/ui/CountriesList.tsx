import { FC } from 'react'

import { Country } from '@/entities/country'

import { ICountry } from '@/shared/model/types/country.type'

import styles from './CountriesList.module.scss'

export const CountriesList: FC<{ countries: ICountry[] }> = ({ countries }) => {
	return (
		<section className={styles.wrapper}>
			{countries.map(country => (
				<Country country={country} key={country.cca3} />
			))}
		</section>
	)
}
