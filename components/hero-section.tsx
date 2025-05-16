import Link from "next/link"
import Image from "next/image"

export default function HeroSection() {
  return (
    <section id="home" className="hero-gradient pt-32 pb-20 text-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Empowering Youth Through Financial Education</h1>
            <p className="text-xl mb-8">
              EmpowerEd combines digital banking with financial literacy to help young people develop smart money habits
              while accessing quality education.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                href="/features"
                className="bg-white text-primary font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition duration-300 text-center"
              >
                Explore Features
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white font-bold py-3 px-6 rounded-lg hover:bg-white hover:text-primary transition duration-300 text-center"
              >
                Get Started
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <Image
              src="/Starting_img.jpg?height=600&width=800"
              alt="Digital wallet and education app interface"
              width={800}
              height={600}
              className="rounded-lg shadow-2xl max-w-md w-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
