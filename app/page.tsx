import Link from "next/link"
import Image from "next/image"
import HeroSection from "@/components/hero-section"

export default function Home() {
  return (
    <main>
      <HeroSection />

      {/* Features Preview Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Powerful Features</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              EmpowerEd offers a comprehensive platform that combines financial tools with educational resources.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="feature-card bg-white p-8 rounded-lg shadow-md transition duration-300">
              <div className="text-secondary text-4xl mb-4">
                <i className="fas fa-wallet"></i>
              </div>
              <h3 className="text-xl font-bold mb-3">Youth Digital Wallet</h3>
              <p className="text-gray-600">
                A secure digital wallet system tailored for youth, with parental controls for minors to ensure safe
                financial management.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="feature-card bg-white p-8 rounded-lg shadow-md transition duration-300">
              <div className="text-secondary text-4xl mb-4">
                <i className="fas fa-graduation-cap"></i>
              </div>
              <h3 className="text-xl font-bold mb-3">Course Marketplace</h3>
              <p className="text-gray-600">
                Access a curated selection of budget-friendly and premium learning courses across various subjects and
                skill levels.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="feature-card bg-white p-8 rounded-lg shadow-md transition duration-300">
              <div className="text-secondary text-4xl mb-4">
                <i className="fas fa-book-open"></i>
              </div>
              <h3 className="text-xl font-bold mb-3">Financial Literacy</h3>
              <p className="text-gray-600">
                Interactive financial literacy modules and micro-lessons, available in gamified formats to make learning
                engaging.
              </p>
            </div>
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/features"
              className="inline-block bg-primary text-white font-bold py-3 px-8 rounded-lg hover:bg-secondary transition duration-300"
            >
              View All Features
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works Preview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">How EmpowerEd Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A simple three-step process to financial empowerment and educational growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold mb-3">Create Your Account</h3>
              <p className="text-gray-600">
                Sign up as a student or parent, set up your profile, and connect your bank account for seamless
                transactions.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold mb-3">Start Saving & Learning</h3>
              <p className="text-gray-600">
                Deposit funds into your digital wallet, explore financial lessons, and browse the course marketplace.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold mb-3">Achieve Your Goals</h3>
              <p className="text-gray-600">
                Reach savings milestones to unlock rewards, purchase courses, and track your financial and educational
                progress.
              </p>
            </div>
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/how-it-works"
              className="inline-block bg-primary text-white font-bold py-3 px-8 rounded-lg hover:bg-secondary transition duration-300"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">What Our Users Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from students and parents who have transformed their financial and educational journeys.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md max-w-2xl mx-auto">
            <div className="flex items-center mb-4">
              <div className="text-secondary text-2xl mr-2">
                <i className="fas fa-quote-left"></i>
              </div>
              <p className="text-gray-600 italic">
                "The milestone rewards motivated me to save consistently, and I used my voucher to take a coding course
                that helped me land an internship."
              </p>
            </div>
            <div className="flex items-center">
              <Image
                src="/7_img.jpg?height=48&width=48"
                alt="Michael Chen"
                width={48}
                height={48}
                className="rounded-full mr-4"
              />
              <div>
                <h4 className="font-bold">Michael Chen</h4>
                <p className="text-gray-500 text-sm">Student, Age 17</p>
              </div>
            </div>
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/testimonials"
              className="inline-block bg-primary text-white font-bold py-3 px-8 rounded-lg hover:bg-secondary transition duration-300"
            >
              Read More Stories
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Financial Journey?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join thousands of students who are building their financial future while accessing quality education.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-primary font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition duration-300"
          >
            Get Started Today
          </Link>
        </div>
      </section>
    </main>
  )
}
