// Import images

import WebImage3 from '../images/regenix-workout-3.jpg';
import WebImage2 from '../images/buy-me-a-chai-home.png';
import WebImage1 from '../images/hostelmate-warden-dashboard.png';

export const projectsData = [
	{
		id: 1,
		title: 'HostelMate - Hostel Grievance Portal',
		category: 'Web Application',
		img: WebImage1, 
		ProjectHeader: {
			title: 'HostelMate - Real-time Grievance Redressal Portal',
			publishDate: 'Nov 2024',
			tags: 'MERN Stack / Tailwind CSS / Redis / Socket.io',
		},
		description: `A real-time hostel grievance redressal portal with chat-based communication. Features include login system, multiple user roles (Student, Warden, Admin), dynamic chat interfaces, Redis caching for performance, email notifications, and a responsive UI inspired by Telegram.`
	},
	{
		id: 2,
		title: 'Buy Me a Chai - Creator Support Platform',
		category: 'Web Application',
		img: WebImage2, 
		ProjectHeader: {
			title: 'Buy Me a Chai - Crowdfunding Platform for Creators',
			publishDate: 'July 2024',
			tags: 'Next.js 14 / Tailwind CSS / MongoDB / Razorpay / NextAuth',
		},
		description: `A full-stack crowdfunding platform enabling creators to receive financial support. Features secure authentication (GitHub OAuth, credentials), Razorpay payment integration, and a responsive design for all devices.`
	},
	{
		id: 3,
		title: 'ReGeniX Backend - AI Fitness Companion',
		category: 'Backend/API',
		img: WebImage3, // Placeholder, replace with actual project image if available
		ProjectHeader: {
			title: 'ReGeniX Backend - AI-Powered Fitness Analytics',
			publishDate: 'April 2025',
			tags: 'Node.js / Express.js / MongoDB / JWT / REST API',
		},
		description: `An AI-powered fitness backend that transforms your camera into a personal trainer. Provides real-time form analysis, intelligent feedback, and gamified analytics. Features include JWT authentication, modular RESTful APIs, robust access control, detailed session logging, and privacy-first design (no video storage). Built with Node.js, Express.js, and MongoDB.`,
		// github: 'https://github.com/Transcendental-Programmer/ReGenix-Rehabilitation-App/tree/shreshtha-node'
	}
];
