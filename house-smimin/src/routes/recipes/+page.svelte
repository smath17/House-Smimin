<script lang="ts">
	import { resolve } from '$app/paths';

	let { data } = $props();
</script>

<style>
	.container {
		max-width: 1100px;
		margin: 0 auto;
		padding: 1rem 0 3rem;
	}

	.hero {
		background: linear-gradient(135deg, rgba(132, 153, 79, 0.16), rgba(252, 181, 59, 0.2));
		border: 1px solid rgba(132, 153, 79, 0.35);
		border-radius: 24px;
		padding: 2rem;
		margin-bottom: 2rem;
	}

	.hero h1 {
		margin: 0 0 0.75rem;
		font-size: clamp(2rem, 5vw, 3rem);
	}

	.hero p {
		margin: 0;
		max-width: 60ch;
		line-height: 1.6;
	}

	.toolbar {
		display: flex;
		justify-content: flex-end;
		margin-bottom: 1.5rem;
	}

	.sort-form {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		flex-wrap: wrap;
	}

	.sort-form label {
		font-weight: 600;
	}

	.sort-form select {
		border: 1px solid rgba(132, 153, 79, 0.35);
		border-radius: 12px;
		padding: 0.7rem 0.9rem;
		background: white;
		color: var(--text-primary);
		font: inherit;
	}

	.recipe-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
		gap: 1.5rem;
	}

	.recipe-card {
		background: white;
		border: 1px solid rgba(132, 153, 79, 0.25);
		border-radius: 20px;
		padding: 1.5rem;
		box-shadow: 0 12px 30px rgba(0, 0, 0, 0.08);
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.recipe-card h2 {
		margin: 0;
		font-size: 1.4rem;
	}

	.recipe-card p {
		margin: 0;
		line-height: 1.6;
		color: #444;
	}

	.meta {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: 0.75rem;
		font-size: 0.95rem;
	}

	.meta-item {
		background: var(--secondary-cream);
		border-radius: 12px;
		padding: 0.75rem;
	}

	.meta-label {
		display: block;
		font-size: 0.8rem;
		color: #666;
		margin-bottom: 0.25rem;
	}

	.tags {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
	}

	.tags span {
		background: rgba(180, 82, 83, 0.12);
		color: #7f3233;
		border-radius: 999px;
		padding: 0.4rem 0.7rem;
		font-size: 0.85rem;
	}

	.recipe-link {
		margin-top: auto;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		text-decoration: none;
		background: var(--primary-green);
		color: var(--text-light);
		border-radius: 12px;
		padding: 0.85rem 1rem;
		font-weight: 600;
		transition: transform 0.2s ease, background-color 0.2s ease;
	}

	.recipe-link:hover {
		transform: translateY(-1px);
		background: var(--accent-red);
	}

	@media (max-width: 600px) {
		.hero {
			padding: 1.5rem;
		}

		.meta {
			grid-template-columns: 1fr;
		}
	}
</style>

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
