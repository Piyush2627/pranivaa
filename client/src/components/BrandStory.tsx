import { motion } from "framer-motion";
import OurProcessSeed from "../assets/images/OurProcesskSeedToSpoon.png";
import {
  FaTemperatureLow,
  FaFlask,
  FaBan,
  FaLeaf,
  FaMapMarkerAlt,
  FaSeedling,
  FaBarcode,
} from "react-icons/fa";

// --- Section 1: Philosophy ---
const PhilosophySection = () => {
  return (
    <section className="relative overflow-hidden px-6 py-24 md:py-32">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 opacity-5">
        <FaSeedling size={400} />
      </div>

      <div className="mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="mb-6 inline-block border-b border-orange-400 pb-1 text-xs font-bold tracking-[0.3em] text-orange-600 uppercase">
            Why Pranivaa Exists
          </span>

          <h2 className="font-poppins mb-8 text-4xl leading-tight font-medium text-[#2c3e2e] md:text-6xl">
            Modern oils are refined for efficiency. <br />
            <span className="text-orange-600">
              Pranivaa is defined by intention.
            </span>
          </h2>

          <div className="mx-auto max-w-2xl space-y-6 text-lg leading-relaxed font-light text-slate-600">
            <p>
              We believe oil should nourish, not just fill. It should carry the
              character of the seed, the soil it grew in, and the care taken
              while pressing it.
            </p>
            <p>
              That belief led us back to traditional oil pressing — slower,
              smaller, and more respectful of nature.
            </p>
          </div>

          <div className="mt-12 flex justify-center">
            <div className="relative border-l-2 border-[#2c3e2e] py-4 pl-6 text-left">
              <p className="font-poppins text-2xl font-bold text-[#2c3e2e]">
                "PRANIVAA is not refined. <br /> By nature, it’s defined."
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// --- Section 2: Process ---
const ProcessSection = () => {
  const features = [
    {
      icon: FaTemperatureLow,
      title: "Low-Temperature Extraction",
      desc: "Preserving the delicate cellular structure and natural aroma.",
    },
    {
      icon: FaFlask,
      title: "Small-Batch Production",
      desc: "We press only what we can trace, ensuring absolute freshness.",
    },
    {
      icon: FaBan,
      title: "No Chemical Refining",
      desc: "Zero hexanes, zero bleaches. Just pure mechanical pressure.",
    },
    {
      icon: FaLeaf,
      title: "No Artificial Additives",
      desc: "Nothing added, nothing taken away. 100% single-origin oil.",
    },
  ];

  return (
    <section className="bg-[#2c3e2e] px-6 py-24 text-[#fdfbf7]">
      <div className="mx-auto grid max-w-6xl gap-16 md:grid-cols-2">
        {/* Text Side */}
        <div className="flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="font-poppins mb-6 text-3xl md:text-5xl">
              Traditional pressing. <br />
              <span className="text-orange-300 italic">Modern discipline.</span>
            </h3>
            <p className="mb-6 text-lg leading-relaxed font-light text-white/80">
              At PRANIVAA, oils are produced in small batches using wood-pressed
              or cold-pressed methods. This gentle extraction avoids excessive
              heat, helping preserve the oil’s natural structure, flavour, and
              nutrients.
            </p>
            <p className="border-l border-orange-400 pl-4 font-medium text-orange-100">
              Less intervention. More integrity.
            </p>
          </motion.div>
        </div>

        {/* Grid Side */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {features.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition-colors hover:bg-white/10"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-orange-500/20 text-orange-400">
                <item.icon size={20} />
              </div>
              <h4 className="font-poppins mb-2 text-lg font-bold">
                {item.title}
              </h4>
              <p className="text-sm text-white/60">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Section 3: Traceability ---
const TraceabilitySection = () => {
  return (
    <section className="bg-[#fdfbf7] px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="overflow-hidden rounded-3xl bg-white shadow-xl lg:grid lg:grid-cols-2">
          {/* Image Side */}
          <div className="relative h-64 lg:h-auto">
            <img
              src={OurProcessSeed}
              alt="Hands holding seeds"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent lg:bg-gradient-to-t"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <p className="text-sm font-bold tracking-widest text-orange-300 uppercase">
                Seed to Spoon
              </p>
              <h3 className="font-poppins text-2xl">
                Traceability you can trust
              </h3>
            </div>
          </div>

          {/* Content Side */}
          <div className="flex flex-col justify-center p-8 lg:p-16">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <h3 className="font-poppins mb-4 text-3xl text-[#2c3e2e]">
                Great oil begins long before the press.
              </h3>
              <p className="mb-8 text-slate-600">
                We work closely with responsible farmers and sourcing partners
                who value soil health and crop integrity. Each PRANIVAA bottle
                reflects a journey.
              </p>

              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#2c3e2e] text-white">
                    <FaSeedling size={14} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#2c3e2e]">The Seed</h4>
                    <p className="text-sm text-slate-500">
                      Heirloom varieties sourced directly from farmers.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#2c3e2e] text-white">
                    <FaMapMarkerAlt size={14} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#2c3e2e]">The Region</h4>
                    <p className="text-sm text-slate-500">
                      Soil-specific sourcing for optimal flavor profiles.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#2c3e2e] text-white">
                    <FaBarcode size={14} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#2c3e2e]">The Batch</h4>
                    <p className="text-sm text-slate-500">
                      Every bottle carries a unique identity.
                    </p>
                  </div>
                </li>
              </ul>

              <div className="mt-10 border-t border-slate-100 pt-6">
                <p className="font-poppins text-lg text-[#2c3e2e] italic">
                  "Because when you know where your food comes from, you cook
                  with more confidence."
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Main Container ---
const BrandStory = () => {
  return (
    <div className="font-poppins">
      <PhilosophySection />
      <ProcessSection />
      <TraceabilitySection />
    </div>
  );
};

export default BrandStory;
