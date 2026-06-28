import { error } from '@sveltejs/kit';

import { getRecipeById } from '../data';

export const load = ({ params }) => {
	const recipe = getRecipeById(params.recipeId);

	if (!recipe) {
		throw error(404, 'Opskrift ikke fundet');
	}

	return {
		recipe
	};
};
