const AboutClientSingle = ({ title, description, image }) => {
	return (
		<div className="flex flex-col items-center bg-secondary-light dark:bg-secondary-dark border border-ternary-light dark:border-ternary-dark rounded-lg shadow-sm p-4 text-center hover:shadow-lg transition-shadow duration-300">
			<img
				src={image}
				className="block h-8 object-contain mb-3"
				style={{ 
					width: '48px', 
					height: '48px',
					minWidth: '32px',
					minHeight: '32px'
				}}
				alt={title}
			/>
			<h3 className="text-base sm:text-lg font-semibold text-primary-dark dark:text-primary-light mb-1">
				{title}
			</h3>
			<p className="text-xs sm:text-sm text-primary-dark dark:text-secondary-light leading-relaxed">
				{description}
			</p>
		</div>
	);
};

export default AboutClientSingle;