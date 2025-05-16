"use client"

import type React from "react"

import { useState } from "react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({
        name: "",
        email: "",
        role: "",
        message: "",
      })
    }, 1500)
  }

  return (
    <main className="pt-24">
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-5xl font-bold text-primary mb-4">Get Started with EmpowerEd</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to empower your financial future? Contact us or sign up today.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/2">
              {isSubmitted ? (
                <div className="bg-green-50 border border-green-200 text-green-800 rounded-lg p-8 text-center">
                  <div className="text-4xl mb-4">
                    <i className="fas fa-check-circle"></i>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Thank You for Contacting Us!</h3>
                  <p className="mb-6">We've received your message and will get back to you shortly.</p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="bg-primary text-white font-bold py-3 px-6 rounded-lg hover:bg-secondary transition duration-300"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
                      placeholder="Enter your name"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
                      placeholder="Enter your email"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="role" className="block text-gray-700 font-medium mb-2">
                      I am a
                    </label>
                    <select
                      id="role"
                      value={formData.role}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
                      required
                    >
                      <option value="">Select your role</option>
                      <option value="student">Student</option>
                      <option value="parent">Parent</option>
                      <option value="educator">Educator</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
                      placeholder="How can we help you?"
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-primary text-white font-bold py-3 px-6 rounded-lg hover:bg-secondary transition duration-300 flex items-center justify-center"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <i className="fas fa-spinner fa-spin mr-2"></i>
                        Sending...
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </button>
                </form>
              )}
            </div>

            <div className="lg:w-1/2">
              <div className="bg-primary text-white rounded-xl p-8 h-full">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="text-2xl mr-4 mt-1">
                      <i className="fas fa-map-marker-alt"></i>
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Our Location</h4>
                      <p>
                        123 Education Ave, Suite 200
                        <br />
                        San Francisco, CA 94107
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="text-2xl mr-4 mt-1">
                      <i className="fas fa-envelope"></i>
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Email Us</h4>
                      <p>
                        hello@empowered.com
                        <br />
                        support@empowered.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="text-2xl mr-4 mt-1">
                      <i className="fas fa-phone-alt"></i>
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Call Us</h4>
                      <p>
                        +1 (800) 123-4567
                        <br />
                        Mon-Fri, 9am-5pm PST
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h4 className="font-bold mb-4">Follow Us</h4>
                  <div className="flex space-x-4">
                    <a href="#" className="text-white hover:text-gray-200 text-2xl" aria-label="Facebook">
                      <i className="fab fa-facebook"></i>
                    </a>
                    <a href="#" className="text-white hover:text-gray-200 text-2xl" aria-label="Twitter">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#" className="text-white hover:text-gray-200 text-2xl" aria-label="Instagram">
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a href="#" className="text-white hover:text-gray-200 text-2xl" aria-label="LinkedIn">
                      <i className="fab fa-linkedin"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-primary mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find answers to common questions about getting started with EmpowerEd.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-primary mb-2">How do I sign up for EmpowerEd?</h3>
              <p className="text-gray-600">
                You can sign up by filling out the contact form on this page or by downloading our app from the App
                Store or Google Play. The registration process takes less than 5 minutes.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-primary mb-2">Is there a fee to use EmpowerEd?</h3>
              <p className="text-gray-600">
                EmpowerEd offers a free basic account with access to essential features. Premium features and certain
                courses may require payment, but many educational resources are available at no cost.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-primary mb-2">How quickly can I start using the platform?</h3>
              <p className="text-gray-600">
                Once you've completed registration and verification (which typically takes 1-2 business days), you can
                immediately access the platform, set up your digital wallet, and explore courses.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
