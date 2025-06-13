import { text } from "@sveltejs/kit";

export const projects = [
    {
        id: "p2-zombe",
        name: "Zombe, inspired by the late Harambe",
        title: "Programming and Problem Solving",
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
        image: "P2_Zombe.webp",
        githubLink: "https://github.com/HTML-Earth/P2-Simulering",
        date: "Spring 2018",
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
        name: null,
        title: "Tour Planning",
        description: "Attempt to create efficient routes within a time frame, using a local OpenStreetMap. Also jumping hoops to avoid paying for API\"s",
        image: "vibocold-p3.webp",
        githubLink: "https://github.com/smath17/Tour-planning-P3",
        date: "Autumn 2018"
    },
    {
        id: "p5-robot",
        name: "Agent Mode > Machine Learning",
        title: "Feature-Based Reinforcement Learning Using Unity",
        description: "Learned a lot about machine learning. Not enough to execute.",
        image: "P5-Robot-env.webp",
        githubLink: "https://github.com/HTML-Earth/P5",
        date: "Autumn 2019"
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