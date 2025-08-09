
const ProjectGallery = ({ project }) => {

	 return (
		 <div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-10 mt-12">
			 {project.ProjectImages && project.ProjectImages.map((imgObj) => {
				 return (
					 <div className="mb-10 sm:mb-0 w-full aspect-square overflow-hidden rounded-xl" key={imgObj.id}>
						 <img
							 src={imgObj.img}
							 className="object-cover w-full h-full rounded-xl cursor-pointer shadow-lg sm:shadow-none"
							 alt={imgObj.title}
						 />
					 </div>
				 );
			 })}
		 </div>
	 );
};

export default ProjectGallery;
