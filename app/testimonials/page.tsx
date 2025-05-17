import Image from "next/image"
import Link from "next/link"

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "My daughter has learned more about money management in 3 months with EmpowerEd than I could teach her in years!",
      name: "Sarah Johnson",
      role: "Parent",
      image: "/8_img.jpg?height=48&width=48",
    },
    {
      quote:
        "The milestone rewards motivated me to save consistently, and I used my voucher to take a coding course that helped me land an internship.",
      name: "Michael Chen",
      role: "Student, Age 17",
      image: "/7_img.jpg?height=48&width=48",
    },
    {
      quote:
        "As an educator, I appreciate how EmpowerEd makes financial literacy accessible and engaging for young people.",
      name: "Dr. Angela Martinez",
      role: "High School Teacher",
      image: "/8_img.jpg?height=48&width=48",
    },
    {
      quote:
        "The group savings feature helped our school club raise funds for a specialized course that we all wanted to take together.",
      name: "Jason Williams",
      role: "Student, Age 16",
      image: "/7_img.jpg?height=48&width=48",
    },
    {
      quote:
        "I can finally track my son's spending and help guide his financial decisions without micromanaging. The parental controls are excellent.",
      name: "Robert Patel",
      role: "Parent",
      image: "/7_img.jpg?height=48&width=48",
    },
    {
      quote:
        "The financial literacy games made learning about money fun for the first time. I actually look forward to completing the modules!",
      name: "Emma Rodriguez",
      role: "Student, Age 15",
      image: "/8_img.jpg?height=48&width=48",
    },
  ]

  const successStories = [
    {
      title: "From Savings to Scholarship",
      content:
        "After using EmpowerEd for 8 months, I developed consistent saving habits and completed several financial literacy courses. The skills I learned helped me write a compelling scholarship essay, and I was awarded a $5,000 scholarship for college.",
      name: "Sophia Lee",
      role: "Student, Age 18",
      image: "/8_img.jpg?height=80&width=80",
    },
    {
      title: "Building a Tech Career",
      content:
        "I used my EmpowerEd savings to purchase coding courses that weren't available at my school. After completing them, I built a portfolio that helped me secure a paid internship at a local tech company during my senior year of high school.",
      name: "David Garcia",
      role: "Student, Age 17",
      image: "/7_img.jpg?height=80&width=80",
    },
  ]

  return (
    <main className="pt-24">
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-5xl font-bold text-primary mb-4">What Our Users Say</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from students and parents who have transformed their financial and educational journeys with
              EmpowerEd.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="text-secondary text-2xl mr-2">
                    <i className="fas fa-quote-left"></i>
                  </div>
                  <p className="text-gray-600 italic">"{testimonial.quote}"</p>
                </div>
                <div className="flex items-center">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-gray-500 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-primary mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how EmpowerEd has made a significant impact on our users' lives and futures.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {successStories.map((story, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-lg shadow-md flex flex-col">
                <h3 className="text-2xl font-bold text-primary mb-4">{story.title}</h3>
                <p className="text-gray-600 mb-6 flex-grow">{story.content}</p>
                <div className="flex items-center mt-4">
                  <Image
                    src={story.image || "/placeholder.svg"}
                    alt={story.name}
                    width={80}
                    height={80}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-bold">{story.name}</h4>
                    <p className="text-gray-500">{story.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-primary mb-4">Video Testimonials</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Watch our users share their experiences with EmpowerEd.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center mb-4">
                <i className="fas fa-play-circle text-5xl text-primary"></i>
              </div>
              <h3 className="text-xl font-bold mb-2">How EmpowerEd Changed My Financial Habits</h3>
              <p className="text-gray-600">
                Jessica shares how the app helped her develop better money management skills and save for college.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center mb-4">
                <i className="fas fa-play-circle text-5xl text-primary"></i>
              </div>
              <h3 className="text-xl font-bold mb-2">A Parent's Perspective on EmpowerEd</h3>
              <p className="text-gray-600">
                Mark discusses how the platform has helped him teach his children about financial responsibility.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Growing Community</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Experience the benefits that thousands of students and parents are already enjoying with EmpowerEd.
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
