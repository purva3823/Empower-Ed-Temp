import Image from "next/image"
import Link from "next/link"

export default function Features() {
  return (
    <main className="pt-24">
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-5xl font-bold text-primary mb-4">Powerful Features</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              EmpowerEd offers a comprehensive platform that combines financial tools with educational resources.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div id="digital-wallet" className="feature-card bg-white p-8 rounded-lg shadow-md transition duration-300">
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
                <i className="fas fa-piggy-bank"></i>
              </div>
              <h3 className="text-xl font-bold mb-3">Smart Savings</h3>
              <p className="text-gray-600">
                Save money digitally with bank/UPI integration for deposits and withdrawals, plus earn interest or
                rewards to encourage consistent saving.
              </p>
            </div>

            {/* Feature 3 */}
            <div
              id="course-marketplace"
              className="feature-card bg-white p-8 rounded-lg shadow-md transition duration-300"
            >
              <div className="text-secondary text-4xl mb-4">
                <i className="fas fa-graduation-cap"></i>
              </div>
              <h3 className="text-xl font-bold mb-3">Course Marketplace</h3>
              <p className="text-gray-600">
                Access a curated selection of budget-friendly and premium learning courses across various subjects and
                skill levels.
              </p>
            </div>

            {/* Feature 4 */}
            <div
              id="financial-literacy"
              className="feature-card bg-white p-8 rounded-lg shadow-md transition duration-300"
            >
              <div className="text-secondary text-4xl mb-4">
                <i className="fas fa-book-open"></i>
              </div>
              <h3 className="text-xl font-bold mb-3">Financial Literacy</h3>
              <p className="text-gray-600">
                Interactive financial literacy modules and micro-lessons, available in gamified formats to make learning
                engaging.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="feature-card bg-white p-8 rounded-lg shadow-md transition duration-300">
              <div className="text-secondary text-4xl mb-4">
                <i className="fas fa-trophy"></i>
              </div>
              <h3 className="text-xl font-bold mb-3">Milestone Rewards</h3>
              <p className="text-gray-600">
                Achieve savings milestones to unlock course vouchers or bonuses, creating motivation for financial
                discipline.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="feature-card bg-white p-8 rounded-lg shadow-md transition duration-300">
              <div className="text-secondary text-4xl mb-4">
                <i className="fas fa-users"></i>
              </div>
              <h3 className="text-xl font-bold mb-3">Group Savings</h3>
              <p className="text-gray-600">
                Collaborative savings feature where multiple users can contribute toward shared goals like course
                purchases.
              </p>
            </div>
          </div>

          {/* Additional Features */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div id="parental-dashboard" className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-primary">Parental Dashboard</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive monitoring tools for parents to track their child's financial activity and learning
                progress.
              </p>
              <Image
                src="/3_img.jpg?height=400&width=600"
                alt="Parental dashboard interface"
                width={600}
                height={400}
                className="rounded-lg"
              />
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-primary">EdTech Integration</h3>
              <p className="text-gray-600 mb-4">
                Seamless connection with educational platforms for verified certifications and structured learning
                paths.
              </p>
              <Image
                src="/4_img.jpg?height=400&width=600"
                alt="Learning platform integration"
                width={600}
                height={400}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Feature Details Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-primary mb-6">Digital Wallet Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-secondary mt-1 mr-3"></i>
                    <div>
                      <h4 className="font-bold mb-1">Secure Transactions</h4>
                      <p className="text-gray-600">
                        End-to-end encryption and multi-factor authentication to keep funds safe.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-secondary mt-1 mr-3"></i>
                    <div>
                      <h4 className="font-bold mb-1">Parental Controls</h4>
                      <p className="text-gray-600">
                        Parents can set spending limits, approve transactions, and monitor activity.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-secondary mt-1 mr-3"></i>
                    <div>
                      <h4 className="font-bold mb-1">Spending Analytics</h4>
                      <p className="text-gray-600">
                        Visual breakdowns of spending habits to encourage financial awareness.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-secondary mt-1 mr-3"></i>
                    <div>
                      <h4 className="font-bold mb-1">Instant Transfers</h4>
                      <p className="text-gray-600">Send and receive money instantly between EmpowerEd users.</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="order-first md:order-last mb-8 md:mb-0">
                <Image
                  src="/5_img.jpg?height=400&width=600"
                  alt="Digital wallet features"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-primary mb-6">Course Marketplace</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="mb-8 md:mb-0">
                <Image
                  src="/6_img.jpg?height=400&width=600"
                  alt="Course marketplace"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-secondary mt-1 mr-3"></i>
                    <div>
                      <h4 className="font-bold mb-1">Curated Content</h4>
                      <p className="text-gray-600">Quality-checked courses from trusted educational providers.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-secondary mt-1 mr-3"></i>
                    <div>
                      <h4 className="font-bold mb-1">Skill Pathways</h4>
                      <p className="text-gray-600">Structured learning paths to build skills progressively.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-secondary mt-1 mr-3"></i>
                    <div>
                      <h4 className="font-bold mb-1">Affordable Options</h4>
                      <p className="text-gray-600">
                        Mix of free, budget-friendly, and premium courses for all budgets.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-secondary mt-1 mr-3"></i>
                    <div>
                      <h4 className="font-bold mb-1">Progress Tracking</h4>
                      <p className="text-gray-600">Monitor learning achievements and completion rates.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <h2 className="text-3xl font-bold text-primary mb-6">Ready to Experience These Features?</h2>
            <Link
              href="/contact"
              className="inline-block bg-primary text-white font-bold py-3 px-8 rounded-lg hover:bg-secondary transition duration-300"
            >
              Get Started Today
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
