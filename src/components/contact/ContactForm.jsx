import React, { useState } from 'react';
import Button from '../reusable/Button';
import FormInput from '../reusable/FormInput';
import { useForm, ValidationError } from '@formspree/react';

const SIMULATE_SEND = false; // set true to simulate (no network); set false to use Formspree

const ContactForm = () => {
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
    <div className="w-full lg:w-1/2">
      <div className="leading-loose">
        <form
          onSubmit={handleSubmit}
          className="relative max-w-xl m-4 p-6 sm:p-10 bg-secondary-light dark:bg-secondary-dark rounded-xl shadow-xl text-left"
        >

          {/* If succeeded — show success card content with same padding/width */}
          {isSucceeded ? (
            <div className="max-w-full p-2 sm:p-6">
              <div className="p-4 sm:p-6 bg-secondary-light dark:bg-secondary-dark rounded-md">
                <p className="text-primary-dark dark:text-primary-light text-2xl font-semibold mb-4">
                  Thanks for your message! I'll get back to you soon.
                </p>
                <p className="mt-3 text-lg text-ternary-dark dark:text-ternary-light">
                  If you want to send another message, refresh the page or navigate back.
                </p>
              </div>
            </div>
          ) : (
            <>
              <p className="font-general-medium text-primary-dark dark:text-primary-light text-2xl mb-8">
                Contact Form
              </p>

              <FormInput
                inputLabel="Full Name"
                labelFor="name"
                inputType="text"
                inputId="name"
                inputName="name"
                placeholderText="Your Name"
                ariaLabelName="Name"
              />
              <ValidationError prefix="Name" field="name" errors={stateErrors} />

              <FormInput
                inputLabel="Email"
                labelFor="email"
                inputType="email"
                inputId="email"
                inputName="email"
                placeholderText="Your email"
                ariaLabelName="Email"
              />
              <ValidationError prefix="Email" field="email" errors={stateErrors} />

              <FormInput
                inputLabel="Subject"
                labelFor="subject"
                inputType="text"
                inputId="subject"
                inputName="subject"
                placeholderText="Subject"
                ariaLabelName="Subject"
              />
              <ValidationError prefix="Subject" field="subject" errors={stateErrors} />

              <div className="mt-6">
                <label
                  className="block text-lg text-primary-dark dark:text-primary-light mb-2"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  className="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
                  id="message"
                  name="message"
                  cols="14"
                  rows="6"
                  aria-label="Message"
                  required
                />
                <ValidationError prefix="Message" field="message" errors={stateErrors} />
              </div>

              <div className="mt-6">
                <div className="font-general-medium w-40 px-4 py-2.5 text-white text-center font-medium tracking-wider bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 rounded-lg duration-500">
                  <Button
                    title={isSubmitting ? 'Sending...' : 'Send Message'}
                    type="submit"
                    aria-label="Send Message"
                    disabled={isSubmitting}
                  />
                </div>
              </div>
            </>
          )}
        </form>
      </div>
    </div>
  );
};

export default ContactForm;