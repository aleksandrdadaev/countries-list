import { useQuery } from '@tanstack/react-query'

import { CountryService } from '@/shared/api/services/country.service'

export const useGetAllCountries = () => {
	const { data, isError, isLoading, isSuccess } = useQuery({
		queryKey: ['get all countries'],
		queryFn: () => CountryService.getAll(),
		select: data => data.data,
	})

	return {
		countries: data,
		isError,
		isLoading,
		isSuccess,
	}
}
