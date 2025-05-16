import Link from "next/link"

export default function FAQ() {
  const faqs = [
    {
      question: "What is EmpowerEd?",
      answer:
        "EmpowerEd is a comprehensive platform that combines a digital wallet with financial education for youth. It helps young people develop smart money habits while accessing quality educational resources.",
    },
    {
      question: "Who can use EmpowerEd?",
      answer:
        "EmpowerEd is designed for students of all ages, with special features for minors. Parents can create accounts for children under 18, with parental controls and monitoring features.",
    },
    {
      question: "Is EmpowerEd safe for minors?",
      answer:
        "Yes, EmpowerEd is designed with youth safety as a priority. Parental controls, spending limits, and transaction approvals ensure a secure environment for minors to learn financial management.",
    },
    {
      question: "How do milestone rewards work?",
      answer:
        "When you reach specific savings goals, you automatically unlock rewards such as course vouchers, bonus deposits, or premium content access. These milestones are designed to encourage consistent saving habits.",
    },
    {
      question: "Can parents monitor their child's activity?",
      answer:
        "Absolutely. The parental dashboard provides comprehensive visibility into spending, saving, and learning activities. Parents can set limits, approve transactions, and track educational progress.",
    },
    {
      question: "What types of courses are available?",
      answer:
        "EmpowerEd offers a wide range of courses across academic subjects, professional skills, financial literacy, and personal development. Courses are available at various price points, including free options.",
    },
    {
      question: "How is my financial information protected?",
      answer:
        "We use bank-level encryption and security measures to protect all financial data. Our platform complies with all relevant financial regulations and data protection standards.",
    },
    {
      question: "Is there a fee to use EmpowerEd?",
      answer:
        "EmpowerEd offers a free basic account with access to essential features. Premium features and certain courses may require payment, but many educational resources are available at no cost.",
    },
    {
      question: "How do I deposit money into my digital wallet?",
      answer:
        "You can deposit funds through bank transfers, UPI payments, or other supported payment methods. Parents can also set up recurring deposits for their children's accounts.",
    },
    {
      question: "Can I withdraw money from my digital wallet?",
      answer:
        "Yes, you can withdraw funds to your linked bank account. For minors, withdrawals may require parental approval depending on the account settings.",
    },
    {
      question: "How does the group savings feature work?",
      answer:
        "Group savings allows multiple users to contribute toward a shared goal, such as purchasing a course together. Each member can contribute funds, track progress, and receive notifications when the goal is reached.",
    },
    {
      question: "What happens if I forget my password?",
      answer:
        "You can reset your password through the 'Forgot Password' link on the login page. We'll send a password reset link to your registered email address.",
    },
  ]

  return (
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-5xl font-bold text-primary mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about EmpowerEd's features and services.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                <h3 className="text-xl font-bold text-primary mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-gray-50 p-8 rounded-lg text-center">
            <h2 className="text-2xl font-bold text-primary mb-4">Still Have Questions?</h2>
            <p className="text-gray-600 mb-6">
              Our support team is ready to help you with any other questions you might have about EmpowerEd.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-primary text-white font-bold py-3 px-8 rounded-lg hover:bg-secondary transition duration-300"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
