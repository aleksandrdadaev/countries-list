import Image from 'next/image'
import { FC } from 'react'

import loader from '@/shared/assets/loaders/loader.svg'

import styles from './Loader.module.scss'

export const Loader: FC = () => {
	return (
		<div className={styles.wrapper}>
			<Image
				src={loader}
				alt='Loading...'
				width={200}
				height={200}
				className={styles.img}
			/>
		</div>
	)
}
