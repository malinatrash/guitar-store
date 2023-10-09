import axios from 'axios';
import { domain } from './domain';
import { format } from './format';

export interface Country {
	id: number;
	name: string;
}

export const fetchCountries = async () => {
	try {
		const response = await axios.get<Country[]>(`${domain}countries${format}`);
		return response.data;
	} catch (error) {
		return [];
	}
};
