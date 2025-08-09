// Import images
import Image1 from '../images/hostelmate-warden-dashboard.png';
import Image2 from '../images/hostelmate-student-dashboard.png';
import Image3 from '../images/hostelmate-staff-dashboard.png';

import Image4 from '../images/buy-me-a-chai-home.png';
import Image5 from '../images/buy-me-a-chai-Razorpay-success-2.png';
import Image6 from '../images/buy-me-a-chai-profile.png';

import Image7 from '../images/regenix-home-3.jpg';
import Image8 from '../images/regenix-dashboard-2.jpg';
import Image9 from '../images/regenix-workout-3.jpg';
// Import icons
import {
	FiFacebook,
	FiInstagram,
	FiLinkedin,
	FiTwitter,
	FiYoutube,
	FiGithub
} from 'react-icons/fi';

export const singleProjectData = [
	// ---------- id: 1 (HostelMate) ----------
	{
		id: 1,
		title: 'HostelMate - Hostel Grievance Portal',
		category: 'Web Application',
		img: Image2,
		ProjectHeader: {
			title: 'HostelMate - Hostel Grievance Portal',
			publishDate: 'Nov 2024',
			tags: 'MERN Stack / Tailwind CSS / Redis / Socket.io',
		},
		ProjectImages: [
			{
				id: 2,
				title: 'HostelMate Warden Dashboard',
				img: Image1,
			},
			{
				id: 1,
				title: 'HostelMate Student Dashboard',
				img: Image2,
			},
			{
				id: 3,
				title: 'HostelMate Staff Dashboard',
				img: Image3,
			},
		],
		ProjectInfo: {
			ClientHeading: 'About Project',
			CompanyInfo: [
				{
					id: 1,
					title: 'Developer',
					details: 'Shreshtha Garg',
				},
				{
					id: 2,
					title: 'Role',
					details: 'Full Stack Developer',
				},
				{
					id: 3,
					title: 'GitHub',
					details: 'https://github.com/Shreshtha-Garg/HostelMate',
				},
				{
					id: 4,
					title: 'Website',
					details: 'https://hostel-mate-psi.vercel.app/',
				},
			],
			ObjectivesHeading: 'Objective',
			ObjectivesDetails:
				'To provide a real-time, efficient, and user-friendly grievance redressal system for hostel residents, enabling seamless communication between students, staff, and wardens.',
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'MongoDB',
						'Express.js',
						'React.js',
						'Node.js',
						'Tailwind CSS',
						'Redis',
						'Socket.io',
						'Nodemailer',
					],
				},
			],
			ProjectDetailsHeading: 'Key Features & Challenges',
			ProjectDetails: [
				{
					id: 1,
					details:
						'OTP-based email registration using Nodemailer — secure signup flow with OTP generation and verification. OTPs are cached in Redis for short expiry to reduce DB writes and improve UX.',
				},
				{
					id: 2,
					details:
						'Role-based access control (Students, Staff, Warden/Admin) with protected routes and token validation to enforce permissions across dashboards.',
				},
				{
					id: 3,
					details:
						'Real-time chat support implemented with Socket.io. Each grievance automatically spawns a dedicated chatroom to allow students and staff to communicate directly about an issue.',
				},
				{
					id: 4,
					details:
						'Grievance lifecycle tracking — students can create and track complaint status in real-time; staff and wardens can assign, update, and resolve complaints with status changes reflected instantly.',
				},
				{
					id: 5,
					details:
						'Scalable full-stack architecture: frontend (React + Tailwind) hosted on Vercel, backend (Node + Express) deployed on Render, and MongoDB Atlas as a cloud DB for reliability.',
				},
				{
					id: 6,
					details:
						'Performance & caching: Redis used both for OTP caching and to optimize response times during peak usage. This reduced repeated DB writes and improved perceived latency.',
				},
				{
					id: 7,
					details:
						'Security & privacy considerations: OTP expiry, secure token handling, basic input validation, and role-based UI restrictions to minimize unauthorized access.',
				},
				{
					id: 8,
					details:
						'UX & UI: Responsive dashboards for all roles with a responsive chat UI for familiarity and smooth messaging experience across devices.',
				},
				{
					id: 9,
					details:
						'Challenges faced: Ensuring consistent UI across different devices and screen sizes, setting up nodemailer for email notifications, and handling role-based access control.',
				},
			],
			SocialSharingHeading: 'Share This',
			SocialSharing: [
				{
					id: 1,
					name: 'LinkedIn',
					icon: <FiLinkedin />,
					url: 'https://www.linkedin.com/',
				},
				{
					id: 2,
					name: 'GitHub',
					icon: <FiGithub />,
					url: 'https://github.com/Shreshtha-Garg/HostelMate',
				},
			],
		},
		RelatedProject: {
			title: 'Related Projects',
			Projects: [
				{
					id: 2,
					title: 'Buy Me a Chai',
					img: Image4,
				},
				{
					id: 3,
					title: 'ReGeniX',
					img: Image9,
				},
			],
		},
	},

	// ---------- id: 2 (Buy Me a Chai) ----------
	{
		id: 2,
		title: 'Buy Me a Chai - Creator Support Platform',
		category: 'Web Application',
		img: Image4,
		ProjectHeader: {
			title: 'Buy Me a Chai - Crowdfunding Platform for Creators',
			publishDate: 'July 2024',
			tags: 'Next.js 14 / Tailwind CSS / MongoDB / Razorpay / NextAuth',
		},
		ProjectImages: [
			{
				id: 1,
				title: 'BuyMe home',
				img: Image4,
			},
			{
				id: 2,
				title: 'Creator Profile & Support',
				img: Image6,
			},
			{
				id: 3,
				title: 'Payment Flow (Razorpay)',
				img: Image5,
			},
		],
		ProjectInfo: {
			ClientHeading: 'About Project',
			CompanyInfo: [
				{
					id: 1,
					title: 'Developer',
					details: 'Shreshtha Garg',
				},
				{
					id: 2,
					title: 'Role',
					details: 'Full Stack Developer',
				},
				{
					id: 3,
					title: 'GitHub',
					details: 'https://github.com/Shreshtha-Garg/Buy-Me-A-Chai',
				},
				{
					id: 4,
					title: 'Website',
					details: 'https://buy-me-a-chai-ten.vercel.app/',
				},
			],
			ObjectivesHeading: 'Objective',
			ObjectivesDetails:
				'A full-stack crowdfunding platform enabling creators to receive micro-donations and recurring support with secure payments and simple onboarding.',
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'Next.js',
						'Tailwind CSS',
						'MongoDB',
						'Razorpay',
						'NextAuth',
						'Vercel',
					],
				},
			],
			ProjectDetailsHeading: 'Key Features & Challenges',
			ProjectDetails: [
				{
					id: 1,
					details:
						'Multiple auth strategies (GitHub OAuth + credentials) implemented using NextAuth for smooth creator onboarding.',
				},
				{
					id: 2,
					details:
						'Razorpay payment integration for one-time and recurring donations; secure server-side payment verification.',
				},
				{
					id: 3,
					details:
						'Creator profile pages with donation widgets and supporter lists.',
				},
				{
					id: 4,
					details:
						'Responsive UI with mobile-first design and accessible donation flows.',
				},
				{
					id: 5,
					details:
						'Session handling and server-side rendering for SEO and performance improvements.',
				},
				{
					id: 6,
					details:
						'Notifications using React Toastify for new donations and supporter alerts.',
				},
				{
					id: 7,
					details:
						'Data privacy: minimal PII storage and secure credential handling.',
				},
				{
					id: 8,
					details:
						'Analytics dashboard for creators with top supporters and donation insights.',
				},
				{
					id: 9,
					details:
						'Challenges: handling payment webhooks reliably and ensuring idempotency for payment events.',
				},
			],
			SocialSharingHeading: 'Share This',
			SocialSharing: [
				{
					id: 1,
					name: 'LinkedIn',
					icon: <FiLinkedin />,
					url: 'https://www.linkedin.com/',
				},
				{
					id: 2,
					name: 'GitHub',
					icon: <FiGithub />,
					url: 'https://github.com/',
				},
			],
		},
		RelatedProject: {
			title: 'Related Projects',
			Projects: [
				{
					id: 1,
					title: 'HostelMate',
					img: Image1,
				},
				{
					id: 3,
					title: 'ReGeniX',
					img: Image9,
				},
			],
		},
	},

	// ---------- id: 3 (ReGeniX Backend) ----------
	{
		id: 3,
		title: 'ReGeniX Backend - AI Fitness Analytics Platform',
		category: 'Backend/API',
		img: Image6,
		ProjectHeader: {
			title: 'ReGeniX Backend - Node.js AI Fitness Analytics',
			publishDate: 'April 2025',
			tags: 'Node.js / Express.js / MongoDB / JWT / REST API',
		},
		ProjectImages: [
			{
				id: 1,
				title: 'ReGeniX Home',
				img: Image7,
			},
			{
				id: 2,
				title: 'Real-time Feedback & Analytics',
				img: Image8,
			},
			{
				id: 3,
				title: 'Session & Progress Dashboard',
				img: Image9,
			},
		],
		ProjectInfo: {
			ClientHeading: 'About Project',
			CompanyInfo: [
				{
					id: 1,
					title: 'Developer',
					details: 'Shreshtha Garg',
				},
				{
					id: 2,
					title: 'Role',
					details: 'Backend Developer',
				},
				{
					id: 3,
					title: 'GitHub',
					details: 'https://github.com/Transcendental-Programmer/ReGenix-Rehabilitation-App/tree/shreshtha-node',
				},
				{
					id: 4,
					title: 'Backend API Documentation',
					details: 'https://github.com/Transcendental-Programmer/ReGenix-Rehabilitation-App/blob/shreshtha-node/backend_readme.md',
				},
			],
			ObjectivesHeading: 'Objective',
			ObjectivesDetails:
				'To deliver real-time, privacy-first fitness analytics and form correction using Node.js, Express, and MongoDB. The backend powers AI-driven exercise tracking, session management, and detailed analytics for the ReGeniX platform.',
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'Node.js',
						'Express.js',
						'MongoDB',
						'JWT',
						'Redis',
						'Docker',
						'Mongoose',
						'Bcrypt',
					],
				},
			],
			ProjectDetailsHeading: 'Key Features & Challenges',
			ProjectDetails: [
				{
					id: 1,
					details:
						'RESTful API design for session management, real-time feedback, and analytics. Modular structure with clear separation of config, controllers, models, and routes.',
				},
				{
					id: 2,
					details:
						'JWT authentication and robust access control for secure user management and session privacy.',
				},
				{
					id: 3,
					details:
						'Session logging, analytics aggregation, and fine-grained scoring for gamified progress tracking.',
				},
				{
					id: 4,
					details:
						'No camera feed or video storage on backend, privacy is ensured for all users.',
				},
				{
					id: 5,
					details:
						'Scalable and maintainable: stateless APIs, Redis for ephemeral state, and production-ready error handling.',
				},
				{
					id: 6,
					details:
						'Comprehensive API documentation and intuitive endpoints for easy integration with the AI pose analysis frontend.',
				},
				{
					id: 7,
					details:
						'Extensive unit and integration tests for reliability and future extensibility.',
				},
				{
					id: 8,
					details:
						'Challenges: optimizing inference latency for real-time feedback and handling diverse device capabilities.',
				},
				{
					id: 9,
					details:
						'Future roadmap: PDF/CSV report generation, expanded exercise library, personalized workout planner, and integration with wearables.',
				},
			],
			SocialSharingHeading: 'Share This',
			SocialSharing: [
				{
					id: 1,
					name: 'LinkedIn',
					icon: <FiLinkedin />,
					url: 'https://www.linkedin.com/',
				},
				{
					id: 2,
					name: 'GitHub',
					icon: <FiGithub />,
					url: 'https://github.com/Transcendental-Programmer/ReGenix-Rehabilitation-App/tree/shreshtha-node',
				},
			],
		},
		RelatedProject: {
			title: 'Related Projects',
			Projects: [
				{
					id: 1,
					title: 'HostelMate',
					img: Image1,
				},
				{
					id: 2,
					title: 'Buy Me a Chai',
					img: Image4,
				},
			],
		},
	},
];
