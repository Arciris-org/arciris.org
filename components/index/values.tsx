export function ValueSection() {
    return (
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
              <h3 className="text-2xl font-semibold mb-4">Open &amp; Flat Culture</h3>
              <p className="text-lg font-light text-gray-600 dark:text-gray-400">
                We foster an environment where everyone&apos;s voice matters equally.
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
    );
}