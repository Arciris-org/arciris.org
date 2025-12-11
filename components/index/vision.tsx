export function VisionSection() {
    return (
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
    );
}