import { getRecipeSummaries } from './data';

export const load = () => {
	return {
		recipes: getRecipeSummaries()
	};
};
