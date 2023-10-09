export interface Product {
	product_id: number;
	product_name: string;
	product_description: string;
	price: number;
	in_stock: boolean;
	vendor: number;
	country_of_origin: number;
	year_of_production: number;
	image_url: string;
	category_id_id: number;
}

// export const mockProductList: Product[] = [
// 	{
// 		id: 1,
// 		type: 'Электрогитары',
// 		title: 'IBANEZ GRG121DX-BKF',
// 		price: '30 000₽',
// 		picture:
// 			'https://www.muztorg.ru/files/5zk/jmc/q7y/18o/ccs/00s/kks/cgw/g/5zkjmcq7y18occs00skkscgwg.jpg',
// 	},
// 	{
// 		id: 2,
// 		type: 'Электрогитары',
// 		title: 'FENDER SQUIER Affinity 2021 Telecaster MN Butterscotch',
// 		price: '37 100₽',
// 		picture:
// 			'https://www.muztorg.ru/files/egx/po4/bqz/808/k0c/48w/so0/8w4/w/egxpo4bqz808k0c48wso08w4w.jpeg',
// 	},
// 	{
// 		id: 3,
// 		type: 'Электрогитары',
// 		title: 'EPIPHONE Les Paul Special Satin E1 Heritage Cherry Vintage',
// 		price: '33 300₽',
// 		picture:
// 			'https://www.muztorg.ru/files/8xp/lb4/s7x/fs4/cko/84w/o0g/k4s/4/8xplb4s7xfs4cko84wo0gk4s4.jpeg',
// 	},
// 	{
// 		id: 4,
// 		type: 'Электрогитары',
// 		title: 'IBANEZ GRG121DX-BKF',
// 		price: '30 000₽',
// 		picture:
// 			'https://www.muztorg.ru/files/5zk/jmc/q7y/18o/ccs/00s/kks/cgw/g/5zkjmcq7y18occs00skkscgwg.jpg',
// 	},
// 	{
// 		id: 5,
// 		type: 'Электрогитары',
// 		title: 'FENDER SQUIER Affinity 2021 Telecaster MN Butterscotch',
// 		price: '37 100₽',
// 		picture:
// 			'https://www.muztorg.ru/files/egx/po4/bqz/808/k0c/48w/so0/8w4/w/egxpo4bqz808k0c48wso08w4w.jpeg',
// 	},
// 	{
// 		id: 6,
// 		type: 'Электрогитары',
// 		title: 'EPIPHONE Les Paul Special Satin E1 Heritage Cherry Vintage',
// 		price: '33 300₽',
// 		picture:
// 			'https://www.muztorg.ru/files/8xp/lb4/s7x/fs4/cko/84w/o0g/k4s/4/8xplb4s7xfs4cko84wo0gk4s4.jpeg',
// 	},
// 	{
// 		id: 7,
// 		type: 'Электрогитары',
// 		title: 'IBANEZ GRG121DX-BKF',
// 		price: '30 000₽',
// 		picture:
// 			'https://www.muztorg.ru/files/5zk/jmc/q7y/18o/ccs/00s/kks/cgw/g/5zkjmcq7y18occs00skkscgwg.jpg',
// 	},
// 	{
// 		id: 8,
// 		type: 'Электрогитары',
// 		title: 'FENDER SQUIER Affinity 2021 Telecaster MN Butterscotch',
// 		price: '37 100₽',
// 		picture:
// 			'https://www.muztorg.ru/files/egx/po4/bqz/808/k0c/48w/so0/8w4/w/egxpo4bqz808k0c48wso08w4w.jpeg',
// 	},
// 	{
// 		id: 9,
// 		type: 'Электрогитары',
// 		title: 'EPIPHONE Les Paul Special Satin E1 Heritage Cherry Vintage',
// 		price: '33 300₽',
// 		picture:
// 			'https://www.muztorg.ru/files/8xp/lb4/s7x/fs4/cko/84w/o0g/k4s/4/8xplb4s7xfs4cko84wo0gk4s4.jpeg',
// 	},
// 	{
// 		id: 1,
// 		type: 'Электрогитары',
// 		title: 'IBANEZ GRG121DX-BKF',
// 		price: '30 000₽',
// 		picture:
// 			'https://www.muztorg.ru/files/5zk/jmc/q7y/18o/ccs/00s/kks/cgw/g/5zkjmcq7y18occs00skkscgwg.jpg',
// 	},
// 	{
// 		id: 2,
// 		type: 'Электрогитары',
// 		title: 'FENDER SQUIER Affinity 2021 Telecaster MN Butterscotch',
// 		price: '37 100₽',
// 		picture:
// 			'https://www.muztorg.ru/files/egx/po4/bqz/808/k0c/48w/so0/8w4/w/egxpo4bqz808k0c48wso08w4w.jpeg',
// 	},
// 	{
// 		id: 3,
// 		type: 'Электрогитары',
// 		title: 'EPIPHONE Les Paul Special Satin E1 Heritage Cherry Vintage',
// 		price: '33 300₽',
// 		picture:
// 			'https://www.muztorg.ru/files/8xp/lb4/s7x/fs4/cko/84w/o0g/k4s/4/8xplb4s7xfs4cko84wo0gk4s4.jpeg',
// 	},
// 	{
// 		id: 4,
// 		type: 'Электрогитары',
// 		title: 'IBANEZ GRG121DX-BKF',
// 		price: '30 000₽',
// 		picture:
// 			'https://www.muztorg.ru/files/5zk/jmc/q7y/18o/ccs/00s/kks/cgw/g/5zkjmcq7y18occs00skkscgwg.jpg',
// 	},
// 	{
// 		id: 5,
// 		type: 'Электрогитары',
// 		title: 'FENDER SQUIER Affinity 2021 Telecaster MN Butterscotch',
// 		price: '37 100₽',
// 		picture:
// 			'https://www.muztorg.ru/files/egx/po4/bqz/808/k0c/48w/so0/8w4/w/egxpo4bqz808k0c48wso08w4w.jpeg',
// 	},
// 	{
// 		id: 6,
// 		type: 'Электрогитары',
// 		title: 'EPIPHONE Les Paul Special Satin E1 Heritage Cherry Vintage',
// 		price: '33 300₽',
// 		picture:
// 			'https://www.muztorg.ru/files/8xp/lb4/s7x/fs4/cko/84w/o0g/k4s/4/8xplb4s7xfs4cko84wo0gk4s4.jpeg',
// 	},
// 	{
// 		id: 7,
// 		type: 'Электрогитары',
// 		title: 'IBANEZ GRG121DX-BKF',
// 		price: '30 000₽',
// 		picture:
// 			'https://www.muztorg.ru/files/5zk/jmc/q7y/18o/ccs/00s/kks/cgw/g/5zkjmcq7y18occs00skkscgwg.jpg',
// 	},
// 	{
// 		id: 8,
// 		type: 'Электрогитары',
// 		title: 'FENDER SQUIER Affinity 2021 Telecaster MN Butterscotch',
// 		price: '37 100₽',
// 		picture:
// 			'https://www.muztorg.ru/files/egx/po4/bqz/808/k0c/48w/so0/8w4/w/egxpo4bqz808k0c48wso08w4w.jpeg',
// 	},
// 	{
// 		id: 9,
// 		type: 'Электрогитары',
// 		title: 'EPIPHONE Les Paul Special Satin E1 Heritage Cherry Vintage',
// 		price: '33 300₽',
// 		picture:
// 			'https://www.muztorg.ru/files/8xp/lb4/s7x/fs4/cko/84w/o0g/k4s/4/8xplb4s7xfs4cko84wo0gk4s4.jpeg',
// 	},
// ]
