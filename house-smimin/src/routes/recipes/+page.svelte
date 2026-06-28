<script lang="ts">
	import './+page.css';
	import { resolve } from '$app/paths';

	let { data } = $props();
</script>

<div class="container">
	<section class="hero">
		<h1>Opskrifter</h1>
		<p>Et lille bagehjørne med opskrifter, der passer godt til en portefølje med lidt for mange side quests.</p>
	</section>

	<div class="toolbar">
		<form class="sort-form" method="GET">
			<label for="sort">Sorter efter</label>
			<select
				id="sort"
				name="sort"
				value={data.sort}
				onchange={(event) => {
					event.currentTarget.form?.requestSubmit();
				}}
			>
				<option value="title">Titel</option>
				<option value="difficulty">Sværhedsgrad</option>
			</select>
		</form>
	</div>

	<div class="recipe-grid">
		{#each data.recipes as recipe (recipe.id)}
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

				<a class="recipe-link" href={resolve('/recipes/[recipeId]', { recipeId: recipe.id })}>
					Se opskrift
				</a>
			</article>
		{/each}
	</div>
</div>
