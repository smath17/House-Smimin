export interface RecipeSection {
	title: string;
	items: string[];
}

export interface Recipe {
	id: string;
	title: string;
	description: string;
	intro: string;
	prepTime: string;
	bakeTime: string;
	yield: string;
	difficulty: RecipeDifficulty;
	tags: string[];
	ingredients: RecipeSection[];
	steps: string[];
	tips: string[];
}

export type RecipeDifficulty = 'Nem' | 'Mellem';

export interface RecipeSummary {
	id: string;
	title: string;
	description: string;
	prepTime: string;
	bakeTime: string;
	yield: string;
	difficulty: RecipeDifficulty;
	tags: string[];
}

export const recipes: Recipe[] = [
	{
		id: 'kanelsnegle',
		title: 'Kanelsnegle',
		description: 'Bløde snegle med kardemomme i dejen og en klassisk kanelfyldning.',
		intro: 'En sikker vinder til weekendbagning, hvor køkkenet gerne må dufte lidt ekstra godt.',
		prepTime: '35 min + hævning',
		bakeTime: '12-15 min',
		yield: '12 stk.',
		difficulty: 'Mellem',
		tags: ['Gærdej', 'Weekend', 'Klassiker'],
		ingredients: [
			{
				title: 'Dej',
				items: ['2,5 dl mælk', '25 g gær', '75 g smør', '50 g sukker', '1 tsk kardemomme', '1 æg', '450 g hvedemel']
			},
			{
				title: 'Fyld',
				items: ['100 g blødt smør', '100 g brun farin', '2 spsk kanel']
			}
		],
		steps: [
			'Lun mælken, opløs gæren og rør smør, sukker, kardemomme og æg i.',
			'Tilsæt melet lidt ad gangen og ælt dejen smidig. Lad den hæve til dobbelt størrelse.',
			'Rul dejen ud til et rektangel, fordel fyldet og rul den stramt sammen.',
			'Skær i snegle, læg dem på bageplade og lad dem efterhæve.',
			'Bag dem gyldne og lad dem køle lidt af før servering.'
		],
		tips: ['Brug tandtråd til at skære sneglene pænt ud.', 'Tilsæt en smule vanilje i fyldet hvis de skal være ekstra dessert-agtige.']
	},
	{
		id: 'bananbrod',
		title: 'Bananbrød',
		description: 'Saftigt brød til overmodne bananer, kaffe og rolige søndage.',
		intro: 'Perfekt når frugtskålen er ved at blive lidt for ambitiøs.',
		prepTime: '15 min',
		bakeTime: '50-60 min',
		yield: '1 form',
		difficulty: 'Nem',
		tags: ['Formkage', 'Restebrug', 'Hverdagsbag'],
		ingredients: [
			{
				title: 'Ingredienser',
				items: ['3 modne bananer', '100 g smeltet smør', '150 g sukker', '2 æg', '200 g hvedemel', '1 tsk bagepulver', '1 tsk kanel', '1 knivspids salt']
			}
		],
		steps: [
			'Mos bananerne og rør dem sammen med smør, sukker og æg.',
			'Bland de tørre ingredienser separat og vend dem i dejen uden at overarbejde den.',
			'Hæld dejen i en smurt form og bag den til midten er fast.',
			'Lad brødet køle af før det skæres, så krummen sætter sig.'
		],
		tips: ['Vend hakket chokolade eller valnødder i dejen for mere bid.', 'Brødet holder sig saftigt i flere dage i en tæt beholder.']
	},
	{
		id: 'brownies',
		title: 'Brownies',
		description: 'Kompakte brownies med sprød top og blød midte.',
		intro: 'Når der ikke skal tænkes så meget, men stadig gerne må imponere lidt.',
		prepTime: '20 min',
		bakeTime: '25-30 min',
		yield: '16 stykker',
		difficulty: 'Nem',
		tags: ['Chokolade', 'Dessert', 'Publikumsfavorit'],
		ingredients: [
			{
				title: 'Ingredienser',
				items: ['200 g mørk chokolade', '175 g smør', '250 g sukker', '3 æg', '100 g hvedemel', '30 g kakao', '1 tsk vaniljesukker', '1 knivspids salt']
			}
		],
		steps: [
			'Smelt chokolade og smør sammen ved lav varme og lad blandingen køle let.',
			'Pisk sukker og æg kort sammen og rør chokoladeblandingen i.',
			'Vend mel, kakao, vanilje og salt i til dejen netop er samlet.',
			'Bag i en form med bagepapir til toppen er blank og midten stadig let blød.',
			'Afkøl helt før udskæring for de skarpeste firkanter.'
		],
		tips: ['Et drys flagesalt på toppen giver god kontrast.', 'Bag hellere et minut for lidt end for meget.']
	},
	{
		id: 'bonnebrownie',
		title: 'Bønnebrownie',
		description: 'Mørk og klæbrig brownie lavet på sorte bønner – i to varianter med dadel eller proteinpulver.',
		intro: 'Opskriften der beviser, at man sagtens kan bage med bønner uden at det smager af det.',
		prepTime: '15 min',
		bakeTime: '20-25 min',
		yield: '~16 stykker',
		difficulty: 'Nem',
		tags: ['Chokolade', 'Sund', 'Proteinrig', 'Restebrug'],
		ingredients: [
			{
				title: 'Bønnebrownie med dadel',
				items: [
					'1 dåse sorte bønner (230-250g drænet)',
					'3 spsk kakaopulver',
					'0,5 tsk instant kaffe (valgfri)',
					'1-2 bananer',
					'0,5 tsk salt',
					'2 tsk vanilje (aroma/sukker)',
					'1 tsk bagepulver',
					'50-100g chokolade',
					'2 æg',
					'100g dadler (uden sten)',
					'40-80g mel/havregryn'
				]
			},
			{
				title: 'Bønnebrownie med proteinpulver',
				items: [
					'1 dåse sorte bønner (230-250g drænet)',
					'3 spsk kakaopulver',
					'0,5 tsk instant kaffe (valgfri)',
					'1-2 bananer',
					'0,5 tsk salt',
					'2 tsk vanilje (aroma/sukker)',
					'1 tsk bagepulver',
					'50-100g chokolade',
					'2 æg',
					'2 scoop proteinpulver (~70g)',
					'80g havregryn',
					'50g farin/sirup'
				]
			}
		],
		steps: [
			'Tænd ovn på 180° over/undervarme.',
			'Dræn bønner og skyl grundigt – snildt gjort med en si.',
			'Hak chokolade groft – alt under 0,5 cm smelter under bagning.',
			'Bland alle ingredienser (undtagen chokoladen) i en skål og blend til en ensartet masse uden spor af bønner eller dadler. Tørre ingredienser i bunden for at undgå mel-støv over det hele.',
			'Smag på dejen – den skal ikke smage af bønner. Justér med sukker efter smag.',
			'Virker dejen tynd? Tilsæt mere havregryn eller mel.',
			'Vend den hakkede chokolade i.',
			'Hæld dejen i formen (20x20 cm eller 30x10 cm).',
			'Bag i 20-25 minutter. En tandstik må gerne have lidt dej på sig – brownies må ikke blive for tørre.'
		],
		tips: [
			'Sæt i køler natten over – så bliver de mere faste.',
			'Dekorer med topping inden bagning: nødder, kokos eller chokolade.',
			'Opskriften er meget tilgivende med ingredienser – brug den til at rydde op i skabene.'
		]
	}
];

function validateUniqueIds(items: Array<{ id: string }>): void {
	const ids = new Set<string>();

	for (const item of items) {
		if (ids.has(item.id)) {
			throw new Error(`Duplicate recipe id found: ${item.id}`);
		}

		ids.add(item.id);
	}
}

validateUniqueIds(recipes);

export function getRecipeById(recipeId: string): Recipe | undefined {
	return recipes.find((recipe) => recipe.id === recipeId);
}

export function getRecipeSummaries(): RecipeSummary[] {
	return recipes.map((recipe) => ({
		id: recipe.id,
		title: recipe.title,
		description: recipe.description,
		prepTime: recipe.prepTime,
		bakeTime: recipe.bakeTime,
		yield: recipe.yield,
		difficulty: recipe.difficulty,
		tags: recipe.tags
	}));
}
