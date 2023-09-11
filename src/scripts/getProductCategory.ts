export const getProductCategory = (id: number): string => {
	switch (id) {
		case 1:
			return 'Электрогитара'
			break
		case 2:
			return 'Электронные барабаны'
			break
		case 3:
			return 'Акустическая гитара'
			break
		default:
			return 'Музыкальный инструмент'
			break
	}
}
