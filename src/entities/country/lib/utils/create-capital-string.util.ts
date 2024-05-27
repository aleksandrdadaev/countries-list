export const createCapitalString = (capitals: string[]): string => {
	if (capitals && capitals.length > 0) return capitals.join(', ')
	else return 'No capital'
}
