import { error } from '@sveltejs/kit';

import { recipes } from '../data';

export const load = ({ params }) => {
	const recipe = recipes.find((item) => item.id === params.recipeId);

	if (!recipe) {
		throw error(404, 'Opskrift ikke fundet');
	}

	return {
		recipe
	};
};
