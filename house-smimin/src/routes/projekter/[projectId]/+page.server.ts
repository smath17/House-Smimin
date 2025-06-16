import { projects } from '../data';

export function load({ params }) {
	const project = projects.find((project) => project.id.toString() === params.projectId);

	return {
		project
	};
}