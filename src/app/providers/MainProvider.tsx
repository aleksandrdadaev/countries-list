import { FC, PropsWithChildren } from 'react'

import TanstackQueryProvider from './TanstackQueryProvider'

const MainProvider: FC<PropsWithChildren> = ({ children }) => {
	return <TanstackQueryProvider>{children}</TanstackQueryProvider>
}

export default MainProvider
