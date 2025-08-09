// assuming Tailwind v3+ (aspect-ratio is available)
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ProjectSingle = ({ id, title, category, image }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        ease: 'easeInOut',
        duration: 0.7,
        delay: 0.15,
      }}
    >
      <Link to={`/projects/${id}`} aria-label={title}>
        <div className="w-full aspect-square rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark flex flex-col">
          <div className="flex-1 flex flex-col">
            <div className="w-full h-0 flex-1 aspect-square overflow-hidden rounded-t-xl">
              <img
                src={image}
                className="object-cover w-full h-full"
                alt="Single Project"
              />
            </div>
            <div className="text-center px-4 py-6 xxl:px-8 flex-shrink-0">
              <p className="font-general-medium text-lg md:text-xl text-ternary-dark dark:text-ternary-light mb-2">
                {title}
              </p>
              <span className="text-lg text-ternary-dark dark:text-ternary-light">
                {category}
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProjectSingle;
