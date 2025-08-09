import { FiPhone, FiMapPin, FiMail } from 'react-icons/fi';

const contacts = [
	{
		id: 1,
		name: 'Remote / Open to Relocation',
		icon: <FiMapPin />,
	},
	{
		id: 2,
		name: 'raghavgarg037@gmail.com',
		icon: <FiMail />,
		link: 'mailto:raghavgarg037@gmail.com',
	},
	{
		id: 3,
		name: '+91 8979035032',
		icon: <FiPhone />,
		link: 'tel:+918979035032',
	},
];

const ContactDetails = () => {
	return (
		<div className="w-full lg:w-1/2">
			<div className="text-left max-w-xl px-6">
				<h2 className="font-general-medium text-2xl text-primary-dark dark:text-primary-light mt-12 mb-8">
					Contact details
				</h2>
				<ul className="font-general-regular">
					{contacts.map((contact) => (
						<li className="flex items-center mb-4" key={contact.id}>
							{contact.link ? (
								<a
									href={contact.link}
									className="flex items-center text-lg text-ternary-dark dark:text-ternary-light hover:text-indigo-500 dark:hover:text-indigo-300 transition-colors duration-300"
								>
									<i className="text-2xl mr-4">{contact.icon}</i>
									{contact.name}
								</a>
							) : (
								<div className="flex items-center text-lg text-ternary-dark dark:text-ternary-light">
									<i className="text-2xl mr-4">{contact.icon}</i>
									{contact.name}
								</div>
							)}
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default ContactDetails;
