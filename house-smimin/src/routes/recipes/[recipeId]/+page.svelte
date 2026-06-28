<script lang="ts">
	import { resolve } from '$app/paths';

	let { data } = $props();
</script>

<style>
	.page {
		max-width: 900px;
		margin: 0 auto;
		padding: 1rem 0 3rem;
	}

	.back-link {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		margin-bottom: 1.5rem;
		text-decoration: none;
		color: var(--text-primary);
		font-weight: 600;
	}

	.recipe-shell {
		background: white;
		border-radius: 24px;
		padding: 2rem;
		box-shadow: 0 16px 40px rgba(0, 0, 0, 0.08);
		border: 1px solid rgba(132, 153, 79, 0.25);
	}

	.hero h1 {
		margin: 0 0 0.75rem;
		font-size: clamp(2rem, 4vw, 2.8rem);
	}

	.hero p {
		margin: 0;
		line-height: 1.7;
		color: #444;
	}

	.meta {
		display: grid;
		grid-template-columns: repeat(4, minmax(0, 1fr));
		gap: 1rem;
		margin: 1.5rem 0 2rem;
	}

	.meta article {
		background: var(--secondary-cream);
		border-radius: 16px;
		padding: 1rem;
	}

	.meta span {
		display: block;
		font-size: 0.8rem;
		color: #666;
		margin-bottom: 0.3rem;
	}

	.content {
		display: grid;
		grid-template-columns: minmax(0, 1fr) minmax(0, 1.2fr);
		gap: 2rem;
	}

	.section-title {
		margin: 0 0 1rem;
		font-size: 1.35rem;
	}

	.ingredient-group + .ingredient-group {
		margin-top: 1.25rem;
	}

	.ingredient-group h3 {
		margin: 0 0 0.5rem;
		font-size: 1rem;
	}

	ul,
	ol {
		margin: 0;
		padding-left: 1.25rem;
		line-height: 1.8;
	}

	.tips {
		margin-top: 2rem;
		padding-top: 1.5rem;
		border-top: 1px solid rgba(132, 153, 79, 0.25);
	}

	.tags {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
		margin-top: 1rem;
	}

	.tags span {
		background: rgba(180, 82, 83, 0.12);
		color: #7f3233;
		border-radius: 999px;
		padding: 0.4rem 0.7rem;
		font-size: 0.85rem;
	}

	@media (max-width: 800px) {
		.recipe-shell {
			padding: 1.5rem;
		}

		.meta,
		.content {
			grid-template-columns: 1fr;
		}
	}
</style>

<div class="page">
	<a class="back-link" href={resolve('/recipes')}>← Tilbage til opskrifter</a>

	<div class="recipe-shell">
		<section class="hero">
			<h1>{data.recipe.title}</h1>
			<p>{data.recipe.intro}</p>

			<div class="meta">
				<article>
					<span>Forberedelse</span>
					{data.recipe.prepTime}
				</article>
				<article>
					<span>Bagetid</span>
					{data.recipe.bakeTime}
				</article>
				<article>
					<span>Sværhedsgrad</span>
					{data.recipe.difficulty}
				</article>
				<article>
					<span>Udbytte</span>
					{data.recipe.yield}
				</article>
			</div>

			<div class="tags" aria-label="Kategorier">
				{#each data.recipe.tags as tag (tag)}
					<span>{tag}</span>
				{/each}
			</div>
		</section>

		<div class="content">
			<section>
				<h2 class="section-title">Ingredienser</h2>

				{#each data.recipe.ingredients as group (group.title)}
					<div class="ingredient-group">
						<h3>{group.title}</h3>
						<ul>
							{#each group.items as item (item)}
								<li>{item}</li>
							{/each}
						</ul>
					</div>
				{/each}
			</section>

			<section>
				<h2 class="section-title">Fremgangsmåde</h2>
				<ol>
					{#each data.recipe.steps as step (step)}
						<li>{step}</li>
					{/each}
				</ol>
			</section>
		</div>

		<section class="tips">
			<h2 class="section-title">Tips</h2>
			<ul>
				{#each data.recipe.tips as tip (tip)}
					<li>{tip}</li>
				{/each}
			</ul>
		</section>
	</div>
</div>
