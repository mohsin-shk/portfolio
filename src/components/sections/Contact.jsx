import React, { useState } from 'react';
// import { Mail, Phone, MapPin, Send, User, MessageSquare, Type } from 'lucide-react';
import { IconMail, IconPhone, IconMapPin, IconSend, IconUser, IconMessage,  IconTextSize  } from '@tabler/icons-react';
import AnimatedSection from '../ui/AnimatedSection';
import Button from '../ui/Button';
import { personalInfo } from '../../data/portfolioData.js';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    emailjs.send(
      'service_n0t5co9',      // Replace with your EmailJS service ID
      'template_fjt5lzw',     // Replace with your EmailJS template ID
      {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
      },
      'rmXecn-RTDG3c9JD5'       // Replace with your EmailJS public key
    )
    .then((result) => {
      setIsSubmitting(false);
      setSubmitStatus({ success: true, message: "Your message has been sent successfully!" });
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, (error) => {
      setIsSubmitting(false);
      setSubmitStatus({ success: false, message: "Something went wrong. Please try again." });
    });
  };

  const contactDetails = [
    { icon: IconMail, label: "Email", value: personalInfo.email, href: `mailto:${personalInfo.email}` },
    { icon: IconPhone, label: "Phone", value: personalInfo.phone, href: `tel:${personalInfo.phone}` },
    { icon: IconMapPin, label: "Location", value: personalInfo.location, href: "#" }
  ];

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <AnimatedSection animation="fade-in" className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          {/* <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            I'm always excited to connect and discuss new opportunities or projects. 
            Feel free to reach out to me.
          </p> */}
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Contact Information */}
          <AnimatedSection animation="slide-right" delay={200} className="lg:col-span-1 space-y-8">
            {contactDetails.map((detail, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="bg-blue-100 dark:bg-gray-800 p-3 rounded-full">
                  <detail.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{detail.label}</h4>
                  <a href={detail.href} className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    {detail.value}
                  </a>
                </div>
              </div>
            ))}
          </AnimatedSection>

          {/* Contact Form */}
          <AnimatedSection animation="slide-left" delay={400} className="lg:col-span-2">
            <div className="bg-gray-50 dark:bg-gray-800/50 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name Input */}
                  <div className="relative">
                    <IconUser className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    />
                  </div>
                  {/* Email Input */}
                  <div className="relative">
                    <IconMail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    />
                  </div>
                </div>

                {/* Subject Input */}
                <div className="relative">
                  <IconTextSize className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-10 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  />
                </div>

                {/* Message Textarea */}
                <div className="relative">
                  <IconMessage className="absolute left-3 top-4 w-5 h-5 text-gray-400" />
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    rows="5"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-10 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div className="text-right">
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full md:w-auto"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                    {!isSubmitting && <IconSend className="ml-2 w-5 h-5" />}
                  </Button>
                </div>
              </form>

              {/* Submission Status Message */}
              {submitStatus && (
                <div className={`mt-4 text-center p-3 rounded-lg text-sm ${
                  submitStatus.success 
                  ? 'bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300' 
                  : 'bg-red-100 dark:bg-red-900/50 text-red-700 dark:text-red-300'
                }`}>
                  {submitStatus.message}
                </div>
              )}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Contact; 