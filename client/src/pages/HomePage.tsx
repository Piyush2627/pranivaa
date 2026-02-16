import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  FaSpa,
  FaLeaf,
  FaArrowRight,
  FaShoppingBag,
  FaSeedling,
  FaSolarPanel,
  FaFilter,
} from "react-icons/fa";
import { MdOutlineHealthAndSafety, MdVerified } from "react-icons/md";
import { GiOilDrum } from "react-icons/gi";
import { useCart } from "../context/CartContext";
import ScrollVelocity from "../components/Cn/ScrollVelocity";
import HeroBackground from "../assets/images/HeroBackground.png";

const PRODUCTS = [
  {
    id: 1,
    name: "Groundnut Oil",
    desc: "Wood Pressed • 1L",
    price: 450,
    currency: "₹",
    image:
      "https://images.unsplash.com/photo-1474979266404-7cadd259d366?auto=format&fit=crop&q=80&w=600",
    tag: "Bestseller",
  },
  {
    id: 2,
    name: "Coconut Oil",
    desc: "Virgin Cold Pressed • 500ml",
    price: 399,
    currency: "₹",
    image:
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=600",
    tag: null,
  },
  {
    id: 3,
    name: "Black Sesame Oil",
    desc: "Traditional Ghani • 1L",
    price: 550,
    currency: "₹",
    image:
      "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?auto=format&fit=crop&q=80&w=600",
    tag: null,
  },
  {
    id: 4,
    name: "Mustard Oil",
    desc: "Kachi Ghani • 1L",
    price: 280,
    currency: "₹",
    image:
      "https://images.unsplash.com/photo-1596627670783-a798a3b567b4?auto=format&fit=crop&q=80&w=600",
    tag: "New Harvest",
  },
];

const PROCESS_STEPS = [
  {
    icon: <FaSeedling />,
    title: "Sourcing",
    desc: "Hand-picked high-quality heirloom seeds.",
  },
  {
    icon: <FaSolarPanel />,
    title: "Sun Drying",
    desc: "Naturally dried to remove moisture.",
  },
  {
    icon: <GiOilDrum />,
    title: "Wood Pressing",
    desc: "Slow pressed in 'Ghanis' without heat.",
  },
  {
    icon: <FaFilter />,
    title: "Bottling",
    desc: "Naturally sedimented and glass bottled.",
  },
];

const SectionHeader = ({
  sub,
  title,
  align = "center",
  light = false,
}: {
  sub: string;
  title: React.ReactNode;
  align?: "left" | "center";
  light?: boolean;
}) => (
  <div className={`mb-12 ${align === "center" ? "text-center" : "text-left"}`}>
    <span className={`font-mono text-xs font-bold tracking-[0.2em] uppercase ${light ? "text-orange-300" : "text-[#C87941]"}`}>
      {sub}
    </span>
    <h2 className={`mt-3 font-source-serif text-4xl font-medium md:text-5xl ${light ? "text-white" : "text-[#1A2F23]"}`}>
      {title}
    </h2>
  </div>
);

const BenefitCard = ({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, y: 30 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    }}
    whileHover={{ y: -10, transition: { duration: 0.2 } }}
    className="group rounded-2xl border border-[#1A2F23]/5 bg-white p-8 transition-all hover:border-[#1A2F23]/20 hover:shadow-xl hover:shadow-[#1A2F23]/5"
  >
    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-[#fbf9eb] text-2xl text-[#1A2F23] transition-colors group-hover:bg-[#1A2F23] group-hover:text-white">
      {icon}
    </div>
    <h3 className="mb-3 font-source-serif text-xl font-bold text-[#1A2F23]">
      {title}
    </h3>
    <p className="text-sm leading-relaxed text-[#1A2F23]/70">{desc}</p>
  </motion.div>
);

const ProductCard = ({ product, onAdd }: { product: (typeof PRODUCTS)[0], onAdd: (p: any) => void }) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, y: 30 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    }}
    whileHover="hover"
    initial="initial"
    viewport={{ once: true }}
    className="group relative flex flex-col overflow-hidden rounded-2xl bg-white/40 backdrop-blur-sm border border-white/20 transition-all hover:shadow-2xl hover:shadow-[#1A2F23]/10"
  >
    <div className="relative aspect-[4/5] overflow-hidden">
      {product.tag && (
        <span className="absolute top-4 left-4 z-10 bg-[#1A2F23] px-3 py-1 text-[10px] font-bold tracking-widest text-white uppercase">
          {product.tag}
        </span>
      )}
      <motion.img
        variants={{
          initial: { scale: 1 },
          hover: { scale: 1.1, transition: { duration: 0.6 } },
        }}
        src={product.image}
        alt={product.name}
        className="h-full w-full object-cover"
      />
      {/* Quick Add Overlay */}
      <motion.div 
        variants={{
          initial: { opacity: 0, y: 20 },
          hover: { opacity: 1, y: 0, transition: { duration: 0.3 } },
        }}
        className="absolute inset-0 flex items-end justify-center bg-gradient-to-t from-[#1A2F23]/80 to-transparent p-6"
      >
        <motion.button 
          whileTap={{ scale: 0.95 }}
          onClick={() => onAdd(product)}
          className="flex w-full items-center justify-center gap-2 rounded-full bg-white py-3 text-sm font-bold text-[#1A2F23] hover:bg-[#C87941] hover:text-white shadow-lg transition-colors"
        >
          <FaShoppingBag /> Add to Cart
        </motion.button>
      </motion.div>
    </div>
    <div className="flex flex-1 flex-col p-5">
      <h3 className="font-source-serif text-lg font-bold text-[#1A2F23]">
        {product.name}
      </h3>
      <p className="text-xs font-medium tracking-wider text-[#1A2F23]/50 uppercase">
        {product.desc}
      </p>
      <div className="mt-auto pt-4 text-lg font-medium text-[#C87941]">
        {product.currency} {product.price}
      </div>
    </div>
  </motion.div>
);

const HomePage = () => {
  const { addToCart, setIsCartOpen } = useCart();
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  const handleAddToCart = (product: any) => {
    addToCart({
      id: product.id,
      productName: product.name,
      price: product.price,
      quantity: 1,
      imageUrl: product.image,
      currency: product.currency,
    });
    setIsCartOpen(true);
  };

  return (
    <div className="bg-[#fbf9eb] min-h-screen w-full font-poppins text-[#1A2F23] overflow-x-hidden">
      {/* 1. Hero Section */}
      <header ref={heroRef} className="relative h-screen w-full overflow-hidden flex items-center justify-center">
        <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/30 z-10" />
            <img 
            src={HeroBackground}
            alt="Hero Background"
            className="w-full h-full object-cover"
            />
        </motion.div>

        <div className="relative z-20 container mx-auto px-6 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <span className="mb-4 block font-mono text-xs md:text-sm font-bold tracking-[0.3em] text-orange-200 uppercase">
                Est. 2024 • Earth to Bottle
            </span>
            <h1 className="font-source-serif text-5xl md:text-7xl lg:text-9xl font-medium leading-tight mb-8">
              Nature's Purest <br />
              <span className="italic text-orange-100">Essence.</span>
            </h1>
            <p className="max-w-xl mx-auto text-lg md:text-xl text-white/90 font-light mb-12 leading-relaxed">
               Cold pressed oils crafted with traditional wisdom. <br className="hidden md:block"/> No heat. No chemicals. Just pure nutrition.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#bestsellers"
                className="group relative overflow-hidden rounded-full bg-white px-8 py-4 text-sm font-bold tracking-wider text-[#1A2F23] transition-all hover:bg-orange-100"
              >
                 <span className="relative z-10 flex items-center gap-2">Shop Collection <FaArrowRight /></span>
              </a>
              <Link
                to="/OurProcess"
                className="group relative overflow-hidden rounded-full border border-white/30 px-8 py-4 text-sm font-bold tracking-wider text-white backdrop-blur-sm transition-all hover:bg-white/10"
              >
                Our Process
              </Link>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Marquee Section */}
      <div className="bg-[#1A2F23] py-4 border-y border-white/5 overflow-hidden">
        <ScrollVelocity
            parallaxClassName="text-white/20"
            scrollerClassName="text-white/20"
            texts={["Cold Pressed • 100% Organic • Traditional • Pure • Natural • Healthy • No Heat •"]} 
            velocity={30} 
            className="text-4xl md:text-6xl font-source-serif italic"
        />
      </div>


      {/* 2. Philosophy Section */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-green-200/20 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <FaLeaf className="mx-auto mb-6 text-3xl text-[#C87941]" />
            <h2 className="font-source-serif text-3xl md:text-5xl leading-snug text-[#1A2F23] mb-8">
              "We believe oil should remain oil. <br/> No shortcuts. Just seeds, patience, and pressure."
            </h2>
          </motion.div>
        </div>
      </section>

      {/* 3. Health Benefits */}
      <section className="py-24 bg-white/50 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            sub="Holistic Wellness"
            title="Why Choose Wood-Pressed?"
          />

          <div className="grid gap-6 md:grid-cols-3">
            <BenefitCard
              icon={<MdOutlineHealthAndSafety />}
              title="Heart Health"
              desc="Rich in monounsaturated fats and antioxidants that maintain healthy cholesterol levels."
            />
            <BenefitCard
              icon={<MdVerified />}
              title="Boosts Immunity"
              desc="Packed with natural nutrients and Vitamin E acting as powerful antioxidants."
            />
            <BenefitCard
              icon={<FaSpa />}
              title="Skin & Hair"
              desc="The cold-press process preserves essential fatty acids that deeply nourish skin."
            />
          </div>
        </div>
      </section>

      {/* 4. Our Process (Visual Step-by-Step) */}
      <section className="bg-[#1A2F23] py-24 text-[#F5F2EB] relative overflow-hidden">
         <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')]"></div>
         
        <div className="mx-auto max-w-7xl px-6 relative z-10">
          <SectionHeader
            sub="From Farm to Bottle"
            title="Purity in Every Drop"
            light={true}
          />

          <div className="relative mt-20">
            {/* Connecting Line (Desktop) */}
            <div className="absolute top-12 left-0 hidden h-0.5 w-full bg-[#F5F2EB]/10 lg:block"></div>

            <div className="grid gap-12 lg:grid-cols-4">
              {PROCESS_STEPS.map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2, duration: 0.6 }}
                  className="relative z-10 flex flex-col items-center text-center group"
                >
                  <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full border-4 border-[#1A2F23] bg-[#F5F2EB] text-4xl text-[#1A2F23] shadow-lg shadow-black/20 transition-transform group-hover:scale-110">
                    {step.icon}
                  </div>
                  <h4 className="mb-2 font-source-serif text-xl">{step.title}</h4>
                  <p className="text-sm text-[#F5F2EB]/60">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Bestsellers */}
      <section id="bestsellers" className="py-24 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end mb-16">
            <div className="text-left">
                 <span className="font-mono text-xs font-bold tracking-[0.2em] text-[#C87941] uppercase">
                  Shop Favorites
                </span>
                <h2 className="mt-3 font-source-serif text-4xl font-medium text-[#1A2F23] md:text-5xl">
                       Our Best Sellers
                </h2>
            </div>
            
            <Link
              to="/productsPage"
              className="group flex items-center gap-2 font-bold text-[#C87941] hover:text-[#1A2F23] transition-colors"
            >
              View All Products{" "}
              <FaArrowRight className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {PRODUCTS.map((prod) => (
              <ProductCard key={prod.id} product={prod} onAdd={handleAddToCart} />
            ))}
          </div>
        </div>
      </section>

      {/* 6. Footer / Stats (Our Roots) */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-[3rem] bg-[#2c3e2e] p-12 lg:p-24 text-[#fdfbf7] relative overflow-hidden">
             {/* Background Pattern */}
            <div className="absolute top-0 right-0 -mt-32 -mr-32 h-96 w-96 rounded-full bg-orange-500/10 blur-3xl"></div>


            <div className="relative z-10 flex flex-col items-center gap-12 lg:flex-row">
              <div className="flex-1 text-center lg:text-left">
                <span className="mb-4 block font-mono text-xs font-bold tracking-widest text-orange-300 uppercase">
                  Our Roots
                </span>
                <h2 className="font-source-serif text-4xl leading-tight font-medium md:text-5xl mb-6">
                  Traditional Wisdom, <br /> Modern Purity.
                </h2>
                <p className="text-lg text-white/70 max-w-lg mx-auto lg:mx-0">
                  We partner directly with farmers in Rajasthan and Gujarat,
                  ensuring that every seed pressed is of the heirloom variety.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-12 border-t sm:border-t-0 sm:border-l border-white/10 pt-12 sm:pt-0 sm:pl-12">
                <div className="text-center sm:text-left">
                  <div className="font-source-serif text-5xl font-bold text-white mb-2">
                    500+
                  </div>
                  <div className="text-xs font-bold tracking-wider text-orange-300 uppercase">
                    Partner Farmers
                  </div>
                </div>
                <div className="text-center sm:text-left">
                  <div className="font-source-serif text-5xl font-bold text-white mb-2">
                    100%
                  </div>
                  <div className="text-xs font-bold tracking-wider text-orange-300 uppercase">
                    Traceable
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
