import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useCart } from "../context/CartContext";
import { motion } from "framer-motion";
import { FaShoppingBag } from "react-icons/fa";

interface ProductType {
  id: number;
  productName: string;
  description: string;
  price: number;
  category: string;
  imageUrl: string;
  currency: string;
}

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

function ProductsPage() {
  const { addToCart, setIsCartOpen } = useCart();
  const { data, isLoading } = useQuery<ProductType[]>({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await axios.get("/mockdata/products.json");
      return res.data;
    },
  });

  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Cold Pressed Oils", "Wood Pressed Oils", "Ghee"];

  const filteredProducts =
    selectedCategory === "All"
      ? data
      : data?.filter((product) => product.category === selectedCategory);

  const handleAddToCart = (product: ProductType) => {
    addToCart({
      id: product.id,
      productName: product.productName,
      price: product.price,
      quantity: 1,
      imageUrl: product.imageUrl,
      currency: product.currency,
    });
    setIsCartOpen(true);
  };

  if (isLoading) return (
    <div className="flex justify-center items-center h-screen bg-loafer-50">
      <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-[#7B542F]"></div>
    </div>
  );

  return (
    <div className="min-h-screen bg-loafer-50 pt-32 pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h1 className="font-serif text-4xl font-medium text-[#2c3e2e] md:text-5xl">
            Our Collection
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Pure, authentic, and crafted with care.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mb-12 flex flex-wrap justify-center gap-4"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`rounded-full px-6 py-2 text-sm font-medium transition-all ${
                selectedCategory === category
                  ? "bg-[#2c3e2e] text-white shadow-lg"
                  : "bg-white text-gray-600 hover:bg-[#2c3e2e]/10"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Product Grid */}
        <motion.div 
          variants={container}
          initial="hidden"
          animate="visible"
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {filteredProducts?.map((product) => (
            <motion.div
              key={product.id}
              variants={item}
              whileHover={{ y: -5 }}
              className="group overflow-hidden rounded-2xl bg-white shadow-sm transition-all hover:shadow-xl hover:shadow-[#2c3e2e]/10"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-gray-100">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                  src={product.imageUrl}
                  alt={product.productName}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 flex items-end justify-center bg-gradient-to-t from-[#2c3e2e]/80 to-transparent p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleAddToCart(product)}
                    className="flex w-full items-center justify-center gap-2 rounded-full bg-white py-3 text-sm font-bold text-[#2c3e2e] hover:bg-[#C87941] hover:text-white"
                  >
                    <FaShoppingBag /> Add to Cart
                  </motion.button>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-serif text-lg font-bold text-[#2c3e2e]">
                  {product.productName}
                </h3>
                <p className="border-[#C87941] pt-2 text-lg font-medium text-[#C87941]">
                  {product.currency} {product.price}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {filteredProducts?.length === 0 && (
          <div className="py-20 text-center text-gray-500">
            No products found in this category.
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductsPage;

