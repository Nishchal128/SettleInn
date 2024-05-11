import React from "react";

function Testimonials() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <h2 className="text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Testimonials
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 md:gap-8">
          <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
            <p className="mt-0.5 text-lg font-medium text-gray-900">
              "Settle Inn made finding my dream home a breeze! The user-friendly interface and comprehensive search options helped me land the perfect property in no time."
            </p>
            <footer className="mt-4 text-base font-medium">
              — Nishchal Vyas
            </footer>
          </blockquote>

          <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
            <p className="mt-0.5 text-lg font-medium text-gray-900">
              "I've been using Settle Inn for both renting and buying properties, and I couldn't be happier with the results. The process is seamless, and the support team is always there to assist!"
            </p>
            <footer className="mt-4 text-base font-medium">
              — Devansh Goyal
            </footer>
          </blockquote>

          <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
            <p className="mt-0.5 text-lg font-medium text-gray-900">
              "Thanks to Settle Inn, I found a rental property that perfectly fits my needs. The ability to communicate directly with landlords through the platform streamlined the entire process."
            </p>
            <footer className="mt-4 text-base font-medium">
              — Priyal Agrawal
            </footer>
          </blockquote>

          <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
            <p className="mt-0.5 text-lg font-medium text-gray-900">
              "Settle Inn's extensive property listings and detailed descriptions saved me countless hours of searching. I found my new home quickly and easily, thanks to this amazing web app!"
            </p>
            <footer className="mt-4 text-base font-medium">
              — Hitesh Rathod
            </footer>
          </blockquote>

          <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
            <p className="mt-0.5 text-lg font-medium text-gray-900">
              "As a first-time homebuyer, I was overwhelmed with the options available. Settle Inn simplified the process, guiding me through each step and helping me find the ideal home for my family."
            </p>
            <footer className="mt-4 text-base font-medium">
              — Peter Parker
            </footer>
          </blockquote>

          <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
            <p className="mt-0.5 text-lg font-medium text-gray-900">
              "Settle Inn not only helped me find a great rental property but also provided valuable insights into the neighborhood and amenities. It's now my go-to platform for all things real estate!"
            </p>
            <footer className="mt-4 text-base font-medium">
              — Tony Stark
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
