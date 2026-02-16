import React from "react";
import coconutBottle from "../assets/images/coconutBottle.png";
import { FaSeedling, FaFlask, FaLeaf, FaTint } from "react-icons/fa";

import videoBg from "../assets/images/7667230-uhd_3840_2160_30fps.mp4";

const WhyColdPressPage: React.FC = () => {
  return (
    <div className="font-source-serif bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <div className="relative h-screen">
        <video
          src={videoBg}
          autoPlay
          loop
          muted
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="bg-opacity-50 absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="font-source-serif text-7xl leading-tight font-extrabold tracking-widest">
              Why Cold-Pressed?
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-2xl font-light italic">
              Purity and goodness, the way nature intended.
            </p>
          </div>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="container mx-auto max-w-7xl px-4 py-16">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          <div className="text-center md:text-left">
            <h2 className="mb-4 text-4xl font-semibold text-green-800">
              The Essence of Purity
            </h2>
            <p className="text-lg leading-relaxed text-gray-700">
              Not all oils are created equal. The method of extraction makes all
              the difference. At Pranivaa, we believe cold pressing is the only
              way to retain the pure essence of seeds and nuts, without
              compromise.
            </p>
          </div>
          <div className="flex justify-center">
            <img
              src={coconutBottle}
              alt="Coconut Bottle"
              className="w-2/3 max-w-sm transform rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 md:w-full"
            />
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="mb-12 text-center">
            <span className="text-gray-400">——</span>
            <h2 className="inline-block px-4 text-4xl font-bold text-green-800">
              The Benefits of Cold-Pressed Oils
            </h2>
            <span className="text-gray-400">——</span>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* Card 1 */}
            <div className="flex flex-col items-center p-6 text-center">
              <FaSeedling className="mb-4 text-6xl text-green-700" />
              <h3 className="mb-3 text-2xl font-serif font-semibold text-gray-800">
                Nutrient Rich
              </h3>
              <p className="text-gray-600">
                Cold pressing preserves vital nutrients, antioxidants, and
                vitamins from the seeds.
              </p>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col items-center p-6 text-center">
              <FaFlask className="mb-4 text-6xl text-green-700" />
              <h3 className="mb-3 text-2xl font-serif font-semibold text-gray-800">
                Chemical-Free
              </h3>
              <p className="text-gray-600">
                No solvents, no hexane. Just pure, unaltered oil.
              </p>
            </div>

            {/* Card 3 */}
            <div className="flex flex-col items-center p-6 text-center">
              <FaLeaf className="mb-4 text-6xl text-green-700" />
              <h3 className="mb-3 text-2xl font-serif font-semibold text-gray-800">
                True Flavor
              </h3>
              <p className="text-gray-600">
                Experience oils that taste just like the seeds they came from.
              </p>
            </div>

            {/* Card 4 */}
            <div className="flex flex-col items-center p-6 text-center">
              <FaTint className="mb-4 text-6xl text-green-700" />
              <h3 className="mb-3 text-2xl font-serif font-semibold text-gray-800">
                Balanced Fats
              </h3>
              <p className="text-gray-600">
                Retains the natural balance of omegas and healthy fats.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* The Cold-Press Difference Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="mb-8 text-center">
            <span className="text-gray-400">——</span>
            <h2 className="inline-block px-4 text-4xl font-bold text-green-800">
              The Cold-Press Difference
            </h2>
            <span className="text-gray-400">——</span>
            <p className="mx-auto mt-4 max-w-3xl text-lg text-gray-600">
              True cold pressing uses slow, gentle extraction to ensure the oil
              remains untouched by heat or chemicals.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* Cold-Pressed Oils Column */}
            <div className="bg-[#D8E2D6] p-8 rounded-lg shadow-sm">
              <h3 className="mb-6 border-b border-green-800 pb-2 text-center text-3xl font-serif font-semibold text-green-900">
                Cold-Pressed Oils
              </h3>
              <ul className="space-y-4 text-lg text-gray-800">
                <li className="flex items-start">
                  <span className="mr-3 text-green-700">•</span>
                  Extracted without heat or solvents
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-green-700">•</span>
                  Rich in antioxidants, vitamins, and natural flavors
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-green-700">•</span>
                  Naturally settled and filtered
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-green-700">•</span>
                  No refining; no additives
                </li>
              </ul>
            </div>

            {/* Refined Oils Column */}
            <div className="bg-[#EADBC8] p-8 rounded-lg shadow-sm">
              <h3 className="mb-6 border-b border-amber-900 pb-2 text-center text-3xl font-serif font-semibold text-amber-900">
                Refined Oils
              </h3>
              <ul className="space-y-4 text-lg text-gray-800">
                <li className="flex items-start">
                  <span className="mr-3 text-amber-700">•</span>
                  Extracted using heat and chemicals
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-amber-700">•</span>
                  Stripped of nutrients and flavor
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-amber-700">•</span>
                  Bleached and deodorized
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-amber-700">•</span>
                  Refining, additives, and preservatives used
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="py-16">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
            <div className="flex justify-center">
              <img
                src="/src/assets/images/OurProcessIlus.png"
                alt="Our Process Illustrations"
                className="w-full max-w-lg rounded-lg shadow-lg"
              />
            </div>
            <div className="text-center md:text-left">
              <h2 className="mb-4 text-4xl font-semibold text-green-800">
                From Farm to Bottle
              </h2>
              <p className="text-lg leading-relaxed">
                We are committed to a transparent and sustainable process. Our
                ingredients are sourced from local farms, and our juices are
                bottled with care to ensure the highest quality. We believe in
                the power of nature to nourish and heal, and our cold-pressed
                juices are a testament to that philosophy.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Commitment Section */}
      <div className="bg-green-50 py-16">
        <div className="container mx-auto max-w-7xl px-4 text-center">
          <h2 className="mb-12 text-4xl font-bold text-green-800">
            Our Commitment
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div>
              <h3 className="mb-3 text-2xl font-semibold text-green-700">
                Quality Ingredients
              </h3>
              <p>
                We source the freshest, highest-quality organic produce from
                local farmers to ensure every bottle is bursting with flavor and
                nutrients.
              </p>
            </div>
            <div>
              <h3 className="mb-3 text-2xl font-semibold text-green-700">
                Sustainability
              </h3>
              <p>
                From our recyclable glass bottles to our composting program for
                pulp, we are dedicated to minimizing our environmental impact.
              </p>
            </div>
            <div>
              <h3 className="mb-3 text-2xl font-semibold text-green-700">
                Community
              </h3>
              <p>
                We believe in building a healthier community by promoting
                wellness and supporting local food systems.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Join the Movement CTA */}
      <div className="py-20 text-center">
        <div className="container mx-auto max-w-7xl px-4">
          <h2 className="mb-4 text-4xl font-bold text-gray-800">
            Join the Movement
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg">
            Ready to experience the difference? Explore our range of delicious
            cold-pressed juices and start your journey to a healthier you.
          </p>
          <a
            href="/productsPage"
            className="rounded-full bg-green-700 px-8 py-3 font-semibold text-white transition hover:bg-green-800"
          >
            Shop Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default WhyColdPressPage;
