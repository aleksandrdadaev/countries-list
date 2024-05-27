'use client'

import { QueryClientProvider } from '@tanstack/react-query'
import { FC, PropsWithChildren } from 'react'

import { queryClient } from '@/shared/config/query-client.config'

const TanstackQueryProvider: FC<PropsWithChildren> = ({ children }) => {
	return (
		<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
	)
}

export default TanstackQueryProvider
