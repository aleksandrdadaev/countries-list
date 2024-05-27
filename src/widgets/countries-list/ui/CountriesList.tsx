import { FC } from 'react'

import { ICountry } from '@/shared/model/types/country.type'

import styles from './CountriesList.module.scss'

export const CountriesList: FC<{ countries: ICountry[] }> = ({ countries }) => {
	return (
		<section className={styles.wrapper}>
			{countries.map(country => (
				<div>{country.name.official}</div>
			))}
		</section>
	)
}
