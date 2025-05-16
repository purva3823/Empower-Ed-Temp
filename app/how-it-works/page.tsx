import Image from "next/image"
import Link from "next/link"

export default function HowItWorks() {
  return (
    <main className="pt-24">
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-5xl font-bold text-primary mb-4">How EmpowerEd Works</h1>
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
        </div>
      </section>

      {/* Detailed Steps */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="mb-20">
            <div className="flex flex-col md:flex-row items-center gap-12 mb-16">
              <div className="md:w-1/2">
                <div className="bg-secondary text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-6">
                  1
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">Create Your Account</h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-gray-100 rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">
                      <span className="font-bold">A</span>
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Sign Up</h4>
                      <p className="text-gray-600">
                        Create your account with basic information. Students under 18 will need parental consent.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-gray-100 rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">
                      <span className="font-bold">B</span>
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Complete Your Profile</h4>
                      <p className="text-gray-600">
                        Add your educational interests, financial goals, and customize your learning preferences.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-gray-100 rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">
                      <span className="font-bold">C</span>
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Connect Bank Account</h4>
                      <p className="text-gray-600">
                        Link your bank account or UPI for easy deposits and withdrawals with secure encryption.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Account creation process"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-12 mb-16">
              <div className="md:w-1/2 order-last md:order-first">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Saving and learning process"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="md:w-1/2">
                <div className="bg-secondary text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-6">
                  2
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">Start Saving & Learning</h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-gray-100 rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">
                      <span className="font-bold">A</span>
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Fund Your Wallet</h4>
                      <p className="text-gray-600">
                        Deposit money into your digital wallet through bank transfer, UPI, or other payment methods.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-gray-100 rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">
                      <span className="font-bold">B</span>
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Set Savings Goals</h4>
                      <p className="text-gray-600">
                        Create specific savings targets for courses, future education, or other financial goals.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-gray-100 rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">
                      <span className="font-bold">C</span>
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Explore Learning Content</h4>
                      <p className="text-gray-600">
                        Browse free financial literacy modules and the course marketplace for educational opportunities.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2">
                <div className="bg-secondary text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-6">
                  3
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">Achieve Your Goals</h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-gray-100 rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">
                      <span className="font-bold">A</span>
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Earn Rewards</h4>
                      <p className="text-gray-600">
                        Reach savings milestones to unlock course vouchers, bonuses, and other incentives.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-gray-100 rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">
                      <span className="font-bold">B</span>
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Purchase Courses</h4>
                      <p className="text-gray-600">
                        Use your savings to invest in educational courses that align with your career goals.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-gray-100 rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">
                      <span className="font-bold">C</span>
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Track Progress</h4>
                      <p className="text-gray-600">
                        Monitor your financial growth and educational achievements through detailed dashboards.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Goal achievement process"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>

          {/* Ambassador Program */}
          <div id="ambassador" className="mt-16 bg-gray-50 rounded-xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
                <h3 className="text-2xl font-bold text-primary mb-4">Peer-to-Peer Learning Network</h3>
                <p className="text-gray-600 mb-6">
                  Join our ambassador program to earn rewards by referring friends and participating in our peer
                  learning community. Share knowledge, get recognized, and grow together.
                </p>
                <Link
                  href="/contact"
                  className="bg-primary text-white font-bold py-3 px-6 rounded-lg hover:bg-secondary transition duration-300 inline-block"
                >
                  Join Our Network
                </Link>
              </div>
              <div className="md:w-1/2">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Peer learning community"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-md"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-primary mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get answers to common questions about how EmpowerEd works.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-primary mb-2">Is EmpowerEd safe for minors?</h3>
              <p className="text-gray-600">
                Yes, EmpowerEd is designed with youth safety as a priority. Parental controls, spending limits, and
                transaction approvals ensure a secure environment for minors to learn financial management.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-primary mb-2">How do milestone rewards work?</h3>
              <p className="text-gray-600">
                When you reach specific savings goals, you automatically unlock rewards such as course vouchers, bonus
                deposits, or premium content access. These milestones are designed to encourage consistent saving
                habits.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-primary mb-2">Can parents monitor their child's activity?</h3>
              <p className="text-gray-600">
                Absolutely. The parental dashboard provides comprehensive visibility into spending, saving, and learning
                activities. Parents can set limits, approve transactions, and track educational progress.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-primary mb-2">What types of courses are available?</h3>
              <p className="text-gray-600">
                EmpowerEd offers a wide range of courses across academic subjects, professional skills, financial
                literacy, and personal development. Courses are available at various price points, including free
                options.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
