import { getRecipeSummaries, type RecipeSummary } from './data';

const difficultyOrder = {
	Nem: 0,
	Mellem: 1
} satisfies Record<RecipeSummary['difficulty'], number>;

const sortOptions = ['title', 'difficulty'] as const;

type SortOption = (typeof sortOptions)[number];

function isSortOption(value: string): value is SortOption {
	return sortOptions.includes(value as SortOption);
}

export const load = ({ url }) => {
	const requestedSort = url.searchParams.get('sort') ?? '';
	const sort = isSortOption(requestedSort) ? requestedSort : 'title';
	const recipes = getRecipeSummaries();
	const sortedRecipes = [...recipes].sort((a, b) => {
		if (sort === 'difficulty') {
			const difficultyDifference = difficultyOrder[a.difficulty] - difficultyOrder[b.difficulty];

			if (difficultyDifference !== 0) {
				return difficultyDifference;
			}
		}

		return a.title.localeCompare(b.title, 'da');
	});

	return {
		recipes: sortedRecipes,
		sort
	};
};
