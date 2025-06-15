import { projects } from "./data";

//TODO: Not the greatest solution, but chosen format isn't great for sorting.
export const load = () => {
    const seasonOrder = {
        Spring: 1,
        Forår: 1,
        Summer: 2,
        Sommer: 2,
        Fall: 3,
        Efterår: 3,
        Winter: 4,
        Vinter: 4
    };

    const parseDate = (dateString: string) => {
        const [season, yearStr] = dateString.split(" ");
        return {
            year: parseInt(yearStr, 10),
            season: seasonOrder[season as keyof typeof seasonOrder] || 0
        };
    };

    const sortedProjects = [...projects].sort((a, b) => {
        const dateA = parseDate(a.date);
        const dateB = parseDate(b.date);

        if (dateB.year !== dateA.year) {
            return dateB.year - dateA.year; // Sort by year descending
        }
        
        return dateA.season - dateB.season; // Sort by season descending
    });
    return {
        projects: sortedProjects
    };
};

