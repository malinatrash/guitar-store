import axios from 'axios';
import { domain } from './domain';
import { format } from './format';

export const fetchVendors = async () => {
	try {
		const response = await axios.get(`${domain}vendors${format}`);
		return response.data;
	} catch (error) {
		return [];
	}
};
