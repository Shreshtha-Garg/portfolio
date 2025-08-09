
import ProjectGallery from '../components/projects/ProjectGallery';
import ProjectHeader from '../components/projects/ProjectHeader';
import ProjectInfo from '../components/projects/ProjectInfo';
import ProjectRelatedProjects from '../components/projects/ProjectRelatedProjects';
import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom';
import { singleProjectData } from '../data/singleProjectData'; // Adjust the import path as necessary


const ProjectSingle = () => {
	const { id } = useParams();
	const project = singleProjectData.find((p) => String(p.id) === String(id));
	// const project = singleProjectData;

	if (!project) {
		return (
			<div className="container mx-auto mt-10 text-center text-red-600">
				<h2>Project not found</h2>
			</div>
		);
	}

	// You may need to refactor ProjectHeader, ProjectGallery, ProjectInfo, etc. to accept the project as a prop
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, delay: 1 }}
			transition={{
				ease: 'easeInOut',
				duration: 0.6,
				delay: 0.15,
			}}
			className="container mx-auto mt-5 sm:mt-10"
		>
			<ProjectHeader project={project} />
			<ProjectGallery project={project} />
			<ProjectInfo project={project} />
			<ProjectRelatedProjects project={project} />
		</motion.div>
	);
};

export default ProjectSingle;
