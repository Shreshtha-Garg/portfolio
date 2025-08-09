import { useCountUp } from 'react-countup';
import CounterItem from './CounterItem';

const AboutCounter = () => {
	useCountUp({ ref: 'codingYearsCounter', end: 3, duration: 2 });
	useCountUp({ ref: 'problemsSolvedCounter', end: 1000, duration: 2 });
	useCountUp({ ref: 'contestsCounter', end: 30, duration: 2 });
	useCountUp({ ref: 'projectsCounter', end: 10, duration: 2 });

	return (
		<div className="mt-10 sm:mt-20 bg-primary-light dark:bg-ternary-dark shadow-sm">
			<div className="font-general-medium container mx-auto py-20 block sm:flex sm:justify-between items-center">
				<CounterItem
					title="Years of Coding"
					counter={<span id="codingYearsCounter" />}
					measurement=""
				/>

				<CounterItem
					title="Problems Solved"
					counter={<span id="problemsSolvedCounter" />}
					measurement="+"
				/>

				<CounterItem
					title="Contests Participated"
					counter={<span id="contestsCounter" />}
					measurement="+"
				/>

				<CounterItem
					title="Projects Built"
					counter={<span id="projectsCounter" />}
					measurement="+"
				/>
			</div>
		</div>
	);
};

export default AboutCounter;
