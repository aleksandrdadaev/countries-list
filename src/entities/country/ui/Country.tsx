import Image from 'next/image'
import { FC } from 'react'

import { ICountry } from '@/shared/model/types/country.type'

import { createCapitalString } from '../lib/utils/create-capital-string.util'

import styles from './Country.module.scss'

export const Country: FC<{ country: ICountry }> = ({
	country: { flags, name, capital },
}) => {
	return (
		<article className={styles.wrapper}>
			<div className={styles.img}>
				<Image src={flags.png} alt='' fill draggable={false} />
			</div>
			<div className={styles.text}>
				<h2>{name.official}</h2>
				<h3>{createCapitalString(capital)}</h3>
			</div>
		</article>
	)
}
