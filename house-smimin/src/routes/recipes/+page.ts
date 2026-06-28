import { recipes } from './data';

export const load = () => {
	const sortedRecipes = [...recipes].sort((a, b) => a.title.localeCompare(b.title, 'da'));

	return {
		recipes: sortedRecipes
	};
};
