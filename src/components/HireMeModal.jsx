import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiX } from 'react-icons/fi';
import Button from './reusable/Button';
import { useForm, ValidationError } from '@formspree/react';

const selectOptions = [
	'Web Application Development',
	'Portfolio / Personal Website',
	'E-commerce Development',
	'Backend Development & API Integration',
	'Website Maintenance & Support',
];

const SIMULATE_SEND = true; // set true to simulate (no network); set false to use Formspree

const HireMeModal = ({ onClose }) => {
	// Formspree hook (used only when not simulating)
	const [fsState, fsHandleSubmit] = useForm('mldloyyv');

	// Local UI state for simulation / fallback
	const [submitting, setSubmitting] = useState(false);
	const [succeeded, setSucceeded] = useState(false);
	const [errors] = useState([]); // kept for ValidationError usage if needed

	// unified state references used by the UI
	const isSubmitting = SIMULATE_SEND ? submitting : fsState.submitting;
	const isSucceeded = SIMULATE_SEND ? succeeded : fsState.succeeded;
	const stateErrors = SIMULATE_SEND ? errors : fsState.errors;

	// submit handler (decides between simulation and real)
	const handleSubmit = (e) => {
		if (SIMULATE_SEND) {
			e.preventDefault();
			if (isSubmitting) return;
			setSubmitting(true);
			setSucceeded(false);
			// simulate 2s network delay
			setTimeout(() => {
				setSubmitting(false);
				setSucceeded(true);
			}, 2000);
			return;
		}
		// real Formspree submit
		return fsHandleSubmit(e);
	};

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			className="font-general-medium fixed inset-0 z-30 transition-all duration-500"
		>
			{/* Modal Backdrop */}
			<div className="bg-filter bg-black bg-opacity-50 fixed inset-0 w-full h-full z-20"></div>

			{/* Modal Content */}
			<main className="flex flex-col items-center justify-center h-full w-full">
				<div className="modal-wrapper flex items-center z-30">
					<div className="modal max-w-md mx-5 xl:max-w-xl lg:max-w-xl md:max-w-xl bg-secondary-light dark:bg-primary-dark max-h-screen shadow-lg flex-row rounded-lg relative">
						
						{/* Header */}
						{!isSucceeded && (<div className="modal-header flex justify-between gap-10 p-5 border-b border-ternary-light dark:border-ternary-dark">
							<h5 className=" text-primary-dark dark:text-primary-light text-xl">
								What project are you looking for?
							</h5>
							<button
								onClick={onClose}
								className="px-4 font-bold text-primary-dark dark:text-primary-light"
							>
								<FiX className="text-3xl" />
							</button>
						</div>)}

						{/* Body */}
						<div className="modal-body p-5 w-full h-full">
							{/* If succeeded — show success card content */}
							{isSucceeded ? (
								<div className="max-w-full p-2 sm:p-6">
									<div className="p-4 sm:p-6 bg-secondary-light dark:bg-primary-dark rounded-md">
										<p className="text-primary-dark dark:text-primary-light text-2xl font-semibold mb-4">
											Thanks for your request! I'll get back to you soon.
										</p>
										<p className="mt-3 text-lg text-ternary-dark dark:text-ternary-light">
											Your project inquiry has been sent successfully.
										</p>
										<div className="mt-6">
											<button
												onClick={onClose}
												type="button"
												className="px-4 sm:px-6 py-2 bg-indigo-500 text-white hover:bg-indigo-600 rounded-md focus:ring-1 focus:ring-indigo-900 duration-500"
												aria-label="Close Modal"
											>
												<Button title="Close" />
											</button>
										</div>
									</div>
								</div>
							) : (
								<form
									onSubmit={handleSubmit}
									className="max-w-xl m-4 text-left"
								>
									<div>
										<input
											className="w-full px-5 py-2 border dark:border-secondary-dark rounded-md text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
											id="name"
											name="name"
											type="text"
											required
											placeholder="Name"
											aria-label="Name"
										/>
									</div>
									<ValidationError prefix="Name" field="name" errors={stateErrors} />

									<div className="mt-6">
										<input
											className="w-full px-5 py-2 border dark:border-secondary-dark rounded-md text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
											id="email"
											name="email"
											type="email"
											required
											placeholder="Email"
											aria-label="Email"
										/>
									</div>
									<ValidationError prefix="Email" field="email" errors={stateErrors} />

									<div className="mt-6">
										<select
											className="w-full px-5 py-2 border dark:border-secondary-dark rounded-md text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
											id="subject"
											name="subject"
											required
											aria-label="Project Category"
										>
											{selectOptions.map((option) => (
												<option key={option}>{option}</option>
											))}
										</select>
									</div>
									<ValidationError prefix="Subject" field="subject" errors={stateErrors} />

									<div className="mt-6">
										<textarea
											className="w-full px-5 py-2 border dark:border-secondary-dark rounded-md text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
											id="message"
											name="message"
											rows="6"
											aria-label="Details"
											placeholder="Project description"
										></textarea>
									</div>
									<ValidationError prefix="Message" field="message" errors={stateErrors} />

									{/* Submit Button */}
									<div className="mt-6 pb-4 sm:pb-1">
										<button
											type="submit"
											disabled={isSubmitting}
											className="px-4 sm:px-6 py-2 sm:py-2.5 text-white bg-indigo-500 hover:bg-indigo-600 rounded-md focus:ring-1 focus:ring-indigo-900 duration-500"
											aria-label="Submit Request"
										>
											<Button title={isSubmitting ? 'Sending...' : 'Send Request'} />
										</button>
									</div>
								</form>
							)}
						</div>

						{/* Footer - only show when not succeeded */}
						{/* {!isSucceeded && (
							<div className="modal-footer mt-2 sm:mt-0 py-5 px-8 text-right">
								<button
									onClick={onClose}
									type="button"
									className="px-4 sm:px-6 py-2 bg-gray-600 text-primary-light hover:bg-ternary-dark dark:bg-gray-200 dark:text-secondary-dark dark:hover:bg-primary-light rounded-md focus:ring-1 focus:ring-indigo-900 duration-500"
									aria-label="Close Modal"
								>
									<Button title="Close" />
								</button>
							</div>
						)} */}

					</div>
				</div>
			</main>
		</motion.div>
	);
};

export default HireMeModal;