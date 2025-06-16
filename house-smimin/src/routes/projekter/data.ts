import { text } from "@sveltejs/kit";

export const projects = [
    {
        id: "p2-zombe",
        name: "Aka. Zombe, en blanding af Zombie og Harambe",
        title: "Simulering af sydgomsudbrud",
        description: "Simulation of disease outbreak and the effects of precautions. 50% reading up on influenza, 50% definetly not creating a game.",
        goal: "Learn Java and object-oriented programming",
        images: [
                        {
                src: "LayoutSkitse.png",
                alt: "Skitse af programmet",
                text: "Grov skitse af UI elementer under simulering",
            },
            {
                path: "programsimulation.webp",
                alt: "Simuleringsværktøjet, personer (prikker) og deres tilstand",
                author: null,
                text: "Igangværende simulation af personer og deres tilstand"
            },
            {
                path: "kort_eksempler.png",
                alt: "Eksempler af forskellige kort",
                author: null,
                text: "Eksempler for forskellige brugerdefinerede kort",
            }


        ],
        image: "images/projects/p2/P2_Zombe.webp",
        githubLink: "https://github.com/HTML-Earth/P2-Simulering",
        date: "Forår 2018",
        facts: {
            "Languages": "Java",
            "Tools": "IntelliJ IDEA, GitHub",
            "Concepts": "Object-Oriented Programming, Simulation, User Interface",
            "Grade": "F"
        },
        text: ""
    },
    {
        id: "p3-vibocold",
        name: "I samarbejde med Vibocold",
        title: "Ruteplanlægning og -optimering",
        description: "Program till at lave effektive ruter, fremfor at gøre det i hånden, udført ved brug af lokalt OpenStreetMap.",
        image: "images/projects/p3/vibocold-p3.webp",
        githubLink: "https://github.com/smath17/Tour-planning-P3",
        date: "Efterår 2018"
    },
    {
        id: "p5-robot",
        name: "Hund gør som der bliver sagt: Hund får godbid",
        title: "Reinforcement læring i Unity",
        description: "Lærte meget omkring maskin læring (xd). Ikke nok til at eksekvere.",
        image: "images/projects/p5/P5-Robot-env.webp",
        githubLink: "https://github.com/HTML-Earth/P5",
        date: "Efterår 2019"
    }
];

function validateUniqueIds(projectList: Array<{ id: string;[key: string]: any }>): void {
    const ids = new Set<string>();
    for (const project of projectList) {
        if (ids.has(project.id)) {
            throw new Error(`Duplicate ID found: ${project.id}`);
        }
        ids.add(project.id);
    }
}

// Call the validation function
try {
    validateUniqueIds(projects);
} catch (error) {
    console.error("Error validating project IDs:", error);
    // Depending on your setup, you might want to re-throw the error
    // or handle it in a way that prevents the application from starting with invalid data.
}