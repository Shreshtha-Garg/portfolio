const ProjectRelatedProjects = ({ project }) => {

	return (
		<div className="mt-10 pt-10 sm:pt-14 sm:mt-20 border-t-2 border-primary-light dark:border-secondary-dark">
			<p className="font-general-regular text-primary-dark dark:text-primary-light text-3xl font-bold mb-10 sm:mb-14 text-left">
				{project.RelatedProject && project.RelatedProject.title}
			</p>

			<div className="grid grid-cols-1 sm:grid-cols-4 gap-10">
				{project.RelatedProject && project.RelatedProject.Projects && project.RelatedProject.Projects.map((relatedProject) => {
					return (
						<a
							key={relatedProject.id}
							href={`/projects/${relatedProject.id}`}
							target="_blank"
							rel="noopener noreferrer"
							className="group block w-full aspect-square rounded-xl shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105 bg-secondary-light dark:bg-ternary-dark flex flex-col"
						>
							<div className="flex-1 flex flex-col">
								<div className="w-full h-0 flex-1 aspect-square overflow-hidden rounded-t-xl">
									<img
										src={relatedProject.img}
										className="object-cover w-full h-full"
										alt={relatedProject.title}
									/>
								</div>
								<div className="text-center px-4 py-6 xxl:px-8 flex-shrink-0">
									<div
										className="title sm:text-sm xl:text-xl font-medium text-centertransition-colors duration-300 text-primary-dark dark:text-primary-light group-hover:text-indigo-500 dark:group-hover:text-indigo-300"
									>
										{relatedProject.title}
									</div>
								</div>
							</div>
						</a>
					);
				})}
			</div>
		</div>
	);
};

export default ProjectRelatedProjects;
