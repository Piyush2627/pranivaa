import {
  FaTint,
  FaArrowRight,
  FaSun,
  FaHeart,
  FaSeedling,
} from "react-icons/fa";
import backgroundVideo from "../assets/images/7667230-uhd_3840_2160_30fps.mp4";
import ScrollVelocity from "../components/Cn/ScrollVelocity";
import aboutImageSection1 from "../assets/images/aboutPranivaaSection1.png";

// Placeholder images (Unsplash)
const IMAGES = {
  hero: "https://images.unsplash.com/photo-1474979266404-7cadd259d366?q=80&w=2070&auto=format&fit=crop",
  pressing:
    "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?q=80&w=2000&auto=format&fit=crop",
  farmer:
    "https://images.unsplash.com/photo-1595856419036-7945d7f1d39b?q=80&w=2070&auto=format&fit=crop",
  bottles:
    "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=1887&auto=format&fit=crop",
};

const AboutPage = () => {
  return (
    <div className="font-poppins bg-[#fdfbf7] text-white selection:bg-orange-100">
      {/* --- HERO SECTION --- */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Parallax Background */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${IMAGES.hero})`,
            backgroundAttachment: "fixed",
          }}
        >
          <div className="video-background">
            <video autoPlay loop muted className="video-element">
              <source src={backgroundVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            {/* Other components/content will go here */}
            <div className="content font-poppins">
              <h1>Your Content Here</h1>
            </div>
          </div>
          <div className="absolute inset-0 bg-black/30 bg-gradient-to-b from-white/60 via-transparent to-black/60" />
        </div>

        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-white">
          <div className="animate-fade-in-up max-w-4xl space-y-6">
            <div className="flex justify-center gap-3 text-sm font-bold tracking-[0.3em] text-orange-200 uppercase">
              <span>Est. 2024</span>
              <span>•</span>
              <span>Earth to Bottle</span>
            </div>

            <h1 className="text-6xl leading-tight font-medium tracking-tight md:text-8xl">
              Rooted in the Soil. <br />
              <span className="text-orange-100 italic">
                Verified by Tradition.
              </span>
            </h1>

            <p className="mx-auto max-w-2xl text-lg leading-relaxed font-light text-white/90 md:text-xl">
              We believe the finest oils aren't manufactured; they are nurtured.
              Zero heat. Zero shortcuts. Just pure, liquid gold.
            </p>

            <div className="animate-bounce pt-12">
              <FaArrowRight className="mx-auto rotate-90 text-3xl text-white/60" />
            </div>
          </div>
        </div>
      </section>

      {/* --- TRUST TICKER (Social Proof) --- */}
      <div className="overflow-hidden border-b border-white/5 bg-[#2c3e2e] py-6 text-white">
        <ScrollVelocity
          parallaxClassName="text-white"
          scrollerClassName="text-white "
          texts={[
            "100% Organic Certified",
            "Cold Wood Pressed",
            "Fair Trade Sourcing",
          ]}
          velocity={50}
          className="custom-scroll-text text-5xl"
        />
      </div>

      {/* --- STORY SECTION --- */}
      <section className="px-6 py-24 md:py-32">
        <div className="mx-auto grid max-w-[1200px] items-center gap-16 md:grid-cols-2">
          <div className="order-2 space-y-8 md:order-1">
            <h2 className="text-4xl leading-tight text-[#2c3e2e] md:text-6xl">
              Purity over <br />
              <span className="text-orange-600 italic">Productivity.</span>
            </h2>

            <div className="space-y-6 text-lg leading-relaxed font-light text-slate-600">
              <p>
                In a world obsessed with speed, we chose to slow down. Our
                wood-pressing process (known as <em>Ghani</em>) is deliberate,
                rhythmic, and uncompromising. We don't chase industrial yields;
                we chase the perfect drop.
              </p>
              <p>
                By removing the intense heat of modern extraction, we protect
                the fragile cellular structure of the seeds.
              </p>
              <p>
                This ensures every bottle contains the full spectrum of nature’s
                intelligence—flavor, aroma, and nutrients intact.
              </p>
            </div>

            <button className="group flex items-center gap-2 text-sm font-bold tracking-widest text-orange-700 uppercase transition-all hover:gap-4">
              Read our full manifesto <FaArrowRight />
            </button>
          </div>

          <div className="group relative order-1 md:order-2">
            <img
              src={aboutImageSection1}
              alt="Slow wood-pressing process"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>
        </div>
      </section>

      {/* --- WHY WOOD? (Value Props) --- */}
      <section className="relative overflow-hidden bg-[#2c3e2e] px-6 py-24 text-[#fdfbf7]">
        {/* Background Pattern */}
        <div className="absolute top-0 right-0 -mt-32 -mr-32 h-64 w-64 rounded-full bg-orange-500/10 blur-3xl"></div>

        <div className="relative z-10 mx-auto max-w-[1200px]">
          <div className="mb-16 items-end justify-between border-b border-white/10 pb-8 md:flex">
            <div className="max-w-2xl">
              <h3 className="mb-4 text-3xl md:text-5xl">
                The Craft of the Vaidya
              </h3>
              <p className="text-lg text-white/60">
                Why we stick to the 5,000 year old method of extraction.
              </p>
            </div>
            <div className="hidden md:block">
              <FaSeedling className="text-6xl text-orange-400 opacity-80" />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* Feature 1 */}
            <div className="group rounded-2xl border border-white/5 bg-white/5 p-8 transition-all duration-300 hover:bg-white/10">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-orange-500/20 text-2xl text-orange-400">
                <FaSun />
              </div>
              <h4 className="mb-3 text-xl font-bold">Zero Heat Generation</h4>
              <p className="leading-relaxed text-white/60">
                Industrial pressing reaches 200°C. Our wood-pressing stays at
                room temperature, preventing the oxidation that turns healthy
                oils toxic.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="group rounded-2xl border border-white/5 bg-white/5 p-8 transition-all duration-300 hover:bg-white/10">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-orange-500/20 text-2xl text-orange-400">
                <FaHeart />
              </div>
              <h4 className="mb-3 text-xl font-bold">Nutrient Density</h4>
              <p className="leading-relaxed text-white/60">
                Retains naturally occurring Vitamin E, Vitamin K, and Omega
                fatty acids that are usually stripped away (or bleached out) in
                refinery processes.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="group rounded-2xl border border-white/5 bg-white/5 p-8 transition-all duration-300 hover:bg-white/10">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-orange-500/20 text-2xl text-orange-400">
                <FaTint />
              </div>
              <h4 className="mb-3 text-xl font-bold">Superior Viscosity</h4>
              <p className="leading-relaxed text-white/60">
                Experience the deep, nutty, and authentic flavor profile. It’s
                thicker, richer, and you actually need to use less while
                cooking.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- HUMAN CONNECTION (Sourcing) --- */}
      <section className="bg-orange-50/50 px-6 py-24">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl text-[#2c3e2e] md:text-5xl">
              From Their Hands to Yours
            </h2>
            <p className="mx-auto max-w-2xl text-slate-600">
              We source 100% of our seeds directly from heritage farmers,
              removing middlemen and ensuring fair wages.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="group relative h-96 cursor-pointer overflow-hidden rounded-2xl shadow-lg">
              <img
                src={IMAGES.farmer}
                alt="Farmer"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/90 via-black/20 to-transparent p-10">
                <h4 className="mb-2 text-2xl font-bold text-white">
                  Direct Trade
                </h4>
                <p className="text-white/80">
                  We pay 20% above market rate to incentivize organic farming.
                </p>
              </div>
            </div>

            <div className="group relative h-96 cursor-pointer overflow-hidden rounded-2xl shadow-lg">
              <img
                src={IMAGES.bottles}
                alt="Bottles"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/90 via-black/20 to-transparent p-10">
                <h4 className="mb-2 text-2xl font-bold text-white">
                  Plastic-Free Supply Chain
                </h4>
                <p className="text-white/80">
                  Packed in glass and tin. Good for you, good for the soil.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- CTA SECTION (Shop Hook) --- */}
      <section className="relative overflow-hidden px-6 py-24">
        <div className="absolute inset-0 bg-[#2c3e2e]"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>

        <div className="relative z-10 mx-auto max-w-4xl text-center text-white">
          <h2 className="mb-8 text-5xl leading-tight md:text-7xl">
            Taste the <br />{" "}
            <span className="text-orange-300 italic">Difference.</span>
          </h2>
          <p className="mx-auto mb-10 max-w-lg text-xl text-white/80">
            Ready to swap your refined oils for something real? Your kitchen
            (and your body) will thank you.
          </p>

          <div className="flex flex-col justify-center gap-4 md:flex-row">
            <button className="flex items-center justify-center gap-2 rounded-full bg-orange-500 px-10 py-5 text-lg font-bold text-white shadow-lg transition-all hover:bg-orange-600 hover:shadow-orange-500/50">
              Shop All Oils <FaArrowRight />
            </button>
            <button className="rounded-full border-2 border-white/20 bg-transparent px-10 py-5 text-lg font-bold text-white transition-all hover:bg-white/10">
              View Lab Reports
            </button>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
    </div>
  );
};

export default AboutPage;
