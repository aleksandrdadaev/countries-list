import { IDemonyms } from './demonyms.type'
import { ILatLng } from './lat-lng.type'
import { IOfficialAndCommon } from './official-and-common.type'

export interface ICountry extends ILatLng {
	name: {
		common: string
		official: string
		nativeName: {
			[key: string]: IOfficialAndCommon
		}
	}
	tld: string[]

	cca2: string
	cca3: string
	ccn3: string
	cioc: string
	independent: boolean
	status: string
	unMember: boolean

	currencies: {
		[key: string]: {
			name: string
			symbol: string
		}
	}

	idd: {
		root: string
		suffixes: string[]
	}
	capital: string[]
	capitalInfo: ILatLng

	altSpellings: string[]

	region: string
	subregion: string

	languages: {
		[key: string]: string
	}
	translations: {
		[key: string]: IOfficialAndCommon
	}

	landlocked: boolean
	borders: string[]
	area: number

	demonyms: {
		eng: IDemonyms
		fra: IDemonyms
	}

	flag: string
	maps: {
		googleMaps: string
		openStreetMaps: string
	}
	population: number

	gini: {
		[key: string]: number
	}
	fifa: string

	car: {
		signs: string[]
		side: 'right' | 'left'
	}

	timezones: string[]
	continents: string[]

	flags: {
		png: string
		svg: string
		alt: string
	}
	coatOfArms: {
		png: string
		svg: string
	}

	startOfWeek: 'monday' | 'sunday'

	postalCode: {
		format?: string
		regex?: string
	}
}
