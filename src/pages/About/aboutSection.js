

export default function AboutSection() {
  return (
    <section className="px-6 md:px-16 lg:px-24 py-12">
      {/* Section 1 */}
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Left Images */}
        <div className="grid grid-cols-2 gap-4">
          <img
            src="https://picsum.photos/400/300?1"
            alt="tour"
            className="rounded-xl object-cover"
          />
          <img
            src="https://picsum.photos/400/300?2"
            alt="tour"
            className="rounded-xl object-cover"
          />
          <img
            src="https://picsum.photos/400/300?3"
            alt="tour"
            className="rounded-xl object-cover col-span-2"
          />
        </div>

        {/* Right Text */}
        <div>
          <h2 className="text-3xl font-bold leading-snug">
            Get To Know Our Agency And{" "}
            <span className="text-green-600">What We Are Offering</span>
          </h2>

          {/* Stats */}
          <div className="flex gap-6 mt-6">
            <div className="bg-green-50 px-6 py-4 rounded-lg shadow-sm">
              <p className="text-green-600 text-xl font-bold">10</p>
              <p className="text-sm text-gray-600">Year Experience</p>
            </div>
            <div>
              <p className="text-xl font-bold">100+</p>
              <p className="text-sm text-gray-600">Tour Guide</p>
            </div>
            <div>
              <p className="text-xl font-bold">500+</p>
              <p className="text-sm text-gray-600">Traveler Connect</p>
            </div>
          </div>

          <p className="mt-6 text-gray-600">
            One Duis rutrum nisl urna. Maecenas vel libero faucibus nisi
            venenatis hendrerit a id lectus. Suspendissendt blandit interdum.
          </p>
        </div>
      </div>

      {/* Section 2 */}
      <div className="grid md:grid-cols-2 gap-10 items-center mt-20">
        {/* Left Text */}
        <div>
          <h2 className="text-3xl font-bold leading-snug">
            Our Completed Tours In{" "}
            <span className="text-green-600">Turio</span>
          </h2>

          <div className="mt-6 space-y-4">
            <div className="border border-green-200 rounded-lg p-4 shadow-sm">
              <h3 className="text-green-600 font-bold text-lg">500+</h3>
              <p className="font-semibold">Awesome Tour</p>
              <p className="text-gray-600 text-sm">
                Duis rutrum nisl urna. Maecenas vel libero faucibus nisi
                venenatis hendrerit.
              </p>
            </div>

            <div className="border border-green-200 rounded-lg p-4 shadow-sm">
              <h3 className="text-green-600 font-bold text-lg">300+</h3>
              <p className="font-semibold">Destinations</p>
              <p className="text-gray-600 text-sm">
                Duis rutrum nisl urna. Maecenas vel libero faucibus nisi
                venenatis hendrerit.
              </p>
            </div>

            <div className="border border-green-200 rounded-lg p-4 shadow-sm">
              <h3 className="text-green-600 font-bold text-lg">150+</h3>
              <p className="font-semibold">Mountains</p>
              <p className="text-gray-600 text-sm">
                Duis rutrum nisl urna. Maecenas vel libero faucibus nisi
                venenatis hendrerit.
              </p>
            </div>
          </div>
        </div>

        {/* Right Images */}
        <div className="grid grid-cols-2 gap-4">
          <img
            src="https://picsum.photos/400/300?4"
            alt="tour"
            className="rounded-xl object-cover"
          />
          <img
            src="https://picsum.photos/400/300?5"
            alt="tour"
            className="rounded-xl object-cover"
          />
          <img
            src="https://picsum.photos/400/300?6"
            alt="tour"
            className="rounded-xl object-cover"
          />
          <img
            src="https://picsum.photos/400/300?7"
            alt="tour"
            className="rounded-xl object-cover"
          />
        </div>
      </div>
    </section>
  );
}
