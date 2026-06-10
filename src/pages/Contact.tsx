import { useState } from 'react';
import type { FormEvent } from 'react';
import AnimatedSection from '../components/AnimatedSection';
import { EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline';

const inputClasses =
  'w-full px-4 py-2.5 border border-stone-300 dark:border-stone-700 rounded-lg bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-100 placeholder-stone-400 dark:placeholder-stone-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const response = await fetch('https://formspree.io/f/xnjbzory', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <AnimatedSection>
          <div className="mb-16">
            <p className="eyebrow mb-4">Contact</p>
            <h1 className="font-display text-4xl sm:text-5xl text-stone-900 dark:text-stone-100 mb-4">
              Get in touch<span className="text-primary-500">.</span>
            </h1>
            <p className="text-lg text-stone-600 dark:text-stone-400">
              Have a question or want to work together? I'd love to hear from you.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <AnimatedSection delay={0.1}>
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <EnvelopeIcon className="h-6 w-6 text-primary-600 dark:text-primary-400 mt-1" />
                <div>
                  <h3 className="font-mono text-xs uppercase tracking-wider text-stone-400 dark:text-stone-500 mb-1">
                    Email
                  </h3>
                  <a
                    href="mailto:tommy@shelburne.dev"
                    className="font-display text-xl text-stone-900 dark:text-stone-100 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    tommy@shelburne.dev
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <MapPinIcon className="h-6 w-6 text-primary-600 dark:text-primary-400 mt-1" />
                <div>
                  <h3 className="font-mono text-xs uppercase tracking-wider text-stone-400 dark:text-stone-500 mb-1">
                    Location
                  </h3>
                  <p className="font-display text-xl text-stone-900 dark:text-stone-100">
                    Salt Lake City, UT
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-stone-200 dark:border-stone-800">
                <h3 className="font-mono text-xs uppercase tracking-wider text-stone-400 dark:text-stone-500 mb-4">
                  Elsewhere
                </h3>
                <div className="flex space-x-4">
                  <a
                    href="https://github.com/tommyshelburne"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="text-stone-500 dark:text-stone-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                  <a
                    href="https://linkedin.com/in/tommyshelburne"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="text-stone-500 dark:text-stone-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Contact Form */}
          <AnimatedSection delay={0.2}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block font-mono text-xs uppercase tracking-wider text-stone-500 dark:text-stone-400 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className={inputClasses}
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block font-mono text-xs uppercase tracking-wider text-stone-500 dark:text-stone-400 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className={inputClasses}
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block font-mono text-xs uppercase tracking-wider text-stone-500 dark:text-stone-400 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className={`${inputClasses} resize-none`}
                />
              </div>

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full px-6 py-3 bg-stone-900 hover:bg-primary-600 dark:bg-stone-100 dark:hover:bg-primary-400 text-stone-50 dark:text-stone-900 font-medium rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'submitting' ? 'Sending...' : 'Send message'}
              </button>

              {status === 'success' && (
                <div className="p-4 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-lg">
                  Message sent successfully! I'll get back to you soon.
                </div>
              )}

              {status === 'error' && (
                <div className="p-4 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded-lg">
                  Something went wrong. Please try again or email me directly at
                  tommy@shelburne.dev.
                </div>
              )}
            </form>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
};

export default Contact;
