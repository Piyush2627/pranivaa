import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ProductType {
  id: number;
  productName: string;
  source: string;
  category: string;
  quantity: string;
  price: number;
  currency: string;
  origin: string;
  organic: boolean;
  imageUrl: string;
}

export default function ProductCarousel() {
  const [slideCurrent, setSliderCurrent] = useState(0);

  const { data, isLoading } = useQuery<ProductType[]>({
    queryKey: ["products-carousel"],
    queryFn: async () => {
      const res = await axios.get("/mockdata/mockproductdata.json");
      return res.data;
    },
  });

  const slides = data?.slice(0, 3) ?? [];

  // ✅ Hook ALWAYS runs
  useEffect(() => {
    if (slides.length === 0) return;

    const interval = setInterval(() => {
      setSliderCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, [slides.length]);

  // ... (previous code)

  // ✅ Safe to return after hooks
  if (isLoading) return <div>Loading...</div>;
  if (!data) return null;

  return (
    <div className="relative h-[600px] w-full overflow-hidden rounded-2xl shadow-xl">
      <AnimatePresence mode="wait">
        <motion.img
          key={slideCurrent}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          src={slides[slideCurrent]?.imageUrl}
          alt={slides[slideCurrent]?.productName}
          className="absolute inset-0 h-full w-full object-cover"
        />
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      
      <div className="absolute bottom-8 left-8 text-white">
        <motion.h3 
          key={`title-${slideCurrent}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-3xl font-bold font-serif"
        >
          {slides[slideCurrent]?.productName}
        </motion.h3>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setSliderCurrent(index)}
            className={`h-3 w-3 rounded-full ${
              index === slideCurrent ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
