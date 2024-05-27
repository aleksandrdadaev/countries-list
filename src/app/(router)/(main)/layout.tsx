import { FC, PropsWithChildren } from 'react'

import { MainLayout } from '@/screens/main-layout'

const layout: FC<PropsWithChildren> = ({ children }) => {
	return <MainLayout>{children}</MainLayout>
}

export default layout
