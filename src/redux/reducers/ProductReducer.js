import { ActionTypes } from '../constants/Action-types';

const initialState = {
	products: [
		{
			id: 1,
			title: 'Nike Shoes',
			category: 'Shoes',
		},
		{
			id: 2,
			title: 'Adidas Shoes',
			category: 'Shoes',
		},
	],
};

export const productReducer = (state = {}, { type, payload }) => {
	switch (type) {
		case ActionTypes.SET_PRODUCTS:
			return state;
		default:
			return state;
	}
};
