<script lang="ts">
	import './+page.css';
	import { resolve } from '$app/paths';

	let { data } = $props();
</script>

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
