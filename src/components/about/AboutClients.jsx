import { useContext } from 'react';
import AboutMeContext from '../../context/AboutMeContext';
import AboutClientSingle from './AboutClientSingle';
import leetcodeLogo from '../../images/brands/leetcode.svg';
import geeksForGeeks from '../../images/brands/GeeksforGeeks.svg';
import cf from '../../images/brands/code-forces.svg';
import intern from '../../images/brands/internship.png';
import student from '../../images/brands/student.png';
import exam from '../../images/brands/exam.png';

// Online logo URLs (mapped to category keywords)
const logoMap = {
	'Problem-Solving Excellence': leetcodeLogo,
	'Competitive Programming': cf,
	'Algorithmic Knowledge': geeksForGeeks,
	'Academic Achievement': student, // graduation cap
	'Entrance Exam Success': exam, // graduation cap
	'Industry Experience': intern, // work icon
};

const fallbackLogo =
	'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_160x56dp.png';

const AboutClients = () => {
	const { clientsData, clientsHeading } = useContext(AboutMeContext);

	return (
		<div className="mt-10 sm:mt-20">
			<p className="font-general-medium text-2xl sm:text-3xl text-center text-primary-dark dark:text-primary-light">
				{clientsHeading}
			</p>

			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10 sm:mt-14">
				{clientsData.map((client, index) => (
					<AboutClientSingle
						key={index}
						title={client.title}
						description={client.description}
						image={logoMap[client.title] || fallbackLogo}
					/>
				))}
			</div>
		</div>
	);
};

export default AboutClients;
