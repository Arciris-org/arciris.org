import { Button } from "@/components/ui/button";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white dark:bg-black pt-16">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-32">
          <div className="absolute inset-0 bg-linear-to-b from-blue-50/50 to-white dark:from-blue-950/20 dark:to-black" />
          <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
            <h1 className="text-5xl sm:text-6xl md:text-8xl font-semibold mb-8 bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent leading-tight pb-2">
              Arciris org
            </h1>
            <p className="text-xl md:text-3xl font-light text-gray-600 dark:text-gray-400 mb-12">
              Innovating the Future,<br />One Line of Code at a Time
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button asChild size="lg" className="rounded-full px-8 text-base">
                <Link href="mailto:info@mail.arciris.org">
                  Join Us
                </Link>
              </Button>
              <Button variant="outline" asChild size="lg" className="rounded-full px-8 text-base">
                <Link href="https://github.com/Arciris-org" target="_blank">
                  GitHub
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-32 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl md:text-6xl font-semibold mb-8">
              About
            </h2>
            <p className="text-xl md:text-2xl font-light text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
              Arciris org is an organization that shapes the future through technology and creativity.
            </p>
            <p className="text-xl md:text-2xl font-light text-gray-600 dark:text-gray-400 leading-relaxed">
              We provide an environment where even young talents can take on challenges, 
              and we drive projects that pursue elegance and integration.
            </p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-32 px-4 bg-gray-50 dark:bg-gray-950">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
            <div className="text-center md:text-left">
              <h3 className="text-4xl font-semibold mb-6">Mission</h3>
              <p className="text-xl font-light text-gray-600 dark:text-gray-400 leading-relaxed">
                Our mission is to innovate the future through code and ideas.
              </p>
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-4xl font-semibold mb-6">Vision</h3>
              <p className="text-xl font-light text-gray-600 dark:text-gray-400 leading-relaxed">
                We aim to create a world where young talents can thrive and fully unleash 
                their creativity and technical skills.
              </p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-32 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-semibold mb-20 text-center">
              Values
            </h2>
            <div className="grid md:grid-cols-3 gap-12">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-linear-to-br from-blue-500 to-purple-500 rounded-2xl" />
                <h3 className="text-2xl font-semibold mb-4">Elegance & Integration</h3>
                <p className="text-lg font-light text-gray-600 dark:text-gray-400">
                  We pursue beauty in code and seamless integration of technologies.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-linear-to-br from-purple-500 to-pink-500 rounded-2xl" />
                <h3 className="text-2xl font-semibold mb-4">Open & Flat Culture</h3>
                <p className="text-lg font-light text-gray-600 dark:text-gray-400">
                  We foster an environment where everyone's voice matters equally.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-linear-to-br from-pink-500 to-orange-500 rounded-2xl" />
                <h3 className="text-2xl font-semibold mb-4">Autonomy & Responsibility</h3>
                <p className="text-lg font-light text-gray-600 dark:text-gray-400">
                  Members take ownership of their work and drive innovation independently.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section className="py-32 px-4 bg-gray-50 dark:bg-gray-950">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl md:text-6xl font-semibold mb-8">
              Projects
            </h2>
            <p className="text-xl md:text-2xl font-light text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
              We are exploring various technologies and ideas.
            </p>
            <p className="text-xl md:text-2xl font-light text-gray-600 dark:text-gray-400 leading-relaxed">
              What projects will take shape in the future depends on our members.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
