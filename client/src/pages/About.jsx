import React from "react";

export default function About() {
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto py-12 px-4">
        <h1 className="text-3xl font-semibold text-center mb-8">
          About SettleInn
        </h1>
        <p className="text-lg text-gray-800 leading-relaxed mb-12">
          SettleInn is committed to offering top-notch real estate solutions,
          whether you're in the market to buy, sell, or rent a property. Our aim
          is to streamline the entire process for you, ensuring a seamless
          experience. Our team comprises seasoned real estate professionals
          dedicated to assisting you in finding your ideal home or investment
          property.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <img
              src={"mission.jpg"}
              alt="Mission"
              className="mb-4 rounded-lg"
              style={{width:"100%"}}
            />

            <h2 className="text-xl font-semibold mb-4">Our Mission</h2>
            <p className="text-gray-700">
              At SettleInn, our mission is to simplify the real estate journey
              for our clients. We strive to surpass expectations by offering
              personalized service, expert guidance, and innovative solutions.
              Whether you're a first-time homebuyer or a seasoned investor,
              we're here to help you accomplish your objectives.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <img src={"team.jpg"} alt="Team" className="mb-4 rounded-lg" />

            <h2 className="text-xl font-semibold mb-4">Our Team</h2>
            <p className="text-gray-700">
              Our team comprises dedicated real estate professionals with
              extensive industry experience. We are committed to staying abreast
              of market trends and leveraging our expertise to deliver
              outstanding results for our clients. When you choose to work with
              SettleInn, rest assured, you're in capable hands.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
