import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <i className="fas fa-wallet text-3xl text-secondary mr-2"></i>
              <span className="text-2xl font-bold">
                Empower<span className="text-secondary">Ed</span>
              </span>
            </div>
            <p className="text-gray-400">
              Empowering the next generation through financial education and accessible learning.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 text-secondary">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/features" className="text-gray-400 hover:text-white transition">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="text-gray-400 hover:text-white transition">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="text-gray-400 hover:text-white transition">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 text-secondary">Features</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/features#digital-wallet" className="text-gray-400 hover:text-white transition">
                  Digital Wallet
                </Link>
              </li>
              <li>
                <Link href="/features#course-marketplace" className="text-gray-400 hover:text-white transition">
                  Course Marketplace
                </Link>
              </li>
              <li>
                <Link href="/features#financial-literacy" className="text-gray-400 hover:text-white transition">
                  Financial Literacy
                </Link>
              </li>
              <li>
                <Link href="/features#parental-dashboard" className="text-gray-400 hover:text-white transition">
                  Parental Dashboard
                </Link>
              </li>
              <li>
                <Link href="/how-it-works#ambassador" className="text-gray-400 hover:text-white transition">
                  Ambassador Program
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 text-secondary">Newsletter</h4>
            <p className="text-gray-400 mb-4">Subscribe to get updates on new features and financial tips.</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 w-full rounded-l-lg focus:outline-none text-gray-800"
              />
              <button type="submit" className="bg-secondary hover:bg-primary px-4 py-2 rounded-r-lg transition">
                <i className="fas fa-paper-plane"></i>
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">© 2025 EmpowerEd. All Rights Reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy-policy" className="text-gray-400 hover:text-white transition">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-gray-400 hover:text-white transition">
              Terms of Service
            </Link>
            <Link href="/faq" className="text-gray-400 hover:text-white transition">
              FAQ
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
