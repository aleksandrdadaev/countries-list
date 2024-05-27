import { FC, PropsWithChildren } from 'react'

import styles from './MainLayout.module.scss'

export const MainLayout: FC<PropsWithChildren> = ({ children }) => {
	return <body className={styles.wrapper}>{children}</body>
}
