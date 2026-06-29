<script lang="ts">
	import './+page.css';
	import { resolve } from '$app/paths';
	import type { RecipeSummary } from './data';

	const difficultyOrder: Record<RecipeSummary['difficulty'], number> = { Nem: 0, Mellem: 1 };

	let { data } = $props();

	let sort = $state<'title' | 'difficulty'>('title');
	let order = $state<'asc' | 'desc'>('asc');

	const sortedRecipes = $derived([...data.recipes].sort((a, b) => {
		if (sort === 'difficulty') {
			const diff = difficultyOrder[a.difficulty] - difficultyOrder[b.difficulty];
			if (diff !== 0) return order === 'desc' ? -diff : diff;
		}
		const titleCompare = a.title.localeCompare(b.title, 'da');
		return order === 'desc' ? -titleCompare : titleCompare;
	}));
</script>

<div class="container">
	<section class="hero">
		<h1>Opskrifter</h1>
		<p>Et lille bagehjørne med opskrifter, der passer godt til en portefølje med lidt for mange side quests.</p>
	</section>

	<div class="toolbar">
		<div class="sort-form">
			<label for="sort">Sorter efter</label>
			<select id="sort" bind:value={sort}>
				<option value="title">Titel</option>
				<option value="difficulty">Sværhedsgrad</option>
			</select>
			<select id="order" bind:value={order}>
				<option value="asc">Stigende</option>
				<option value="desc">Faldende</option>
			</select>
		</div>
	</div>

	<div class="recipe-grid">
		{#each sortedRecipes as recipe (recipe.id)}
			<article class="recipe-card">
				<div>
					<h2>{recipe.title}</h2>
					<p>{recipe.description}</p>
				</div>

				<div class="meta">
					<div class="meta-item">
						<span class="meta-label">Forberedelse</span>
						{recipe.prepTime}
					</div>
					<div class="meta-item">
						<span class="meta-label">Bagetid</span>
						{recipe.bakeTime}
					</div>
					<div class="meta-item">
						<span class="meta-label">Sværhedsgrad</span>
						{recipe.difficulty}
					</div>
					<div class="meta-item">
						<span class="meta-label">Udbytte</span>
						{recipe.yield}
					</div>
				</div>

				<div class="tags" aria-label="Kategorier">
					{#each recipe.tags as tag (tag)}
						<span>{tag}</span>
					{/each}
				</div>

				<a class="recipe-link" href={resolve('/opskrifter/[recipeId]', { recipeId: recipe.id })}>
					Se opskrift
				</a>
			</article>
		{/each}
	</div>
</div>
