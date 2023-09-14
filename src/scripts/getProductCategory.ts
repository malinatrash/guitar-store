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
		case 4:
			return 'Коммутация'
			break
		case 5:
			return 'MIDI-контроллер'
			break
		case 6:
			return 'Синтезатор'
			break
		case 7:
			return 'Бас-гитара'
			break
		default:
			return 'Музыкальный инструмент'
			break
	}
}
