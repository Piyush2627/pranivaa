import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MdClose, MdDelete, MdAdd, MdRemove } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { useCart } from "../context/CartContext";
import { openWhatsApp } from "../utils/whatsappHelper";

// ... (imports remain the same)

const sidebarVariants = {
  hidden: { x: "100%" },
  visible: { 
    x: 0, 
    transition: { 
      type: "spring", 
      damping: 25, 
      stiffness: 200,
      staggerChildren: 0.1
    } as any 
  },
  exit: { 
    x: "100%",
    transition: { ease: "easeInOut", duration: 0.3 } as any
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -20 }
};

const CartSidebar: React.FC = () => {
  const { cart, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, totalPrice, totalItems } = useCart();

  return (
    <AnimatePresence mode="wait">
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm"
          />

          {/* Sidebar */}
          <motion.div
            variants={sidebarVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed top-0 right-0 z-[70] flex h-full w-full max-w-md flex-col bg-white shadow-2xl dark:bg-[#121212]"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b p-6 dark:border-white/10">
              <div>
                <h2 className="font-serif text-2xl font-bold text-[#2c3e2e] dark:text-white">Your Cart</h2>
                <p className="text-sm text-gray-500">{totalItems} items</p>
              </div>
              <motion.button
                whileHover={{ rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsCartOpen(false)}
                className="rounded-full p-2 hover:bg-black/5 dark:hover:bg-white/10"
              >
                <MdClose className="text-2xl text-[#2c3e2e] dark:text-white" />
              </motion.button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6">
              {cart.length === 0 ? (
                <div className="flex h-full flex-col items-center justify-center text-center">
                  <motion.div 
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="mb-4 text-6xl opacity-20"
                  >
                    🛒
                  </motion.div>
                  <h3 className="text-lg font-medium text-gray-500">Your cart is empty</h3>
                  <button
                    onClick={() => setIsCartOpen(false)}
                    className="mt-4 font-bold text-[#7B542F] hover:underline"
                  >
                    Start Shopping
                  </button>
                </div>
              ) : (
                <motion.div className="space-y-6">
                  <AnimatePresence mode="popLayout">
                    {cart.map((item) => (
                      <motion.div 
                        key={item.id} 
                        layout
                        variants={itemVariants}
                        className="flex gap-4"
                      >
                        <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-lg border bg-gray-50 dark:border-white/10">
                          <img
                            src={item.imageUrl}
                            alt={item.productName}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div className="flex flex-1 flex-col">
                          <div className="flex justify-between">
                            <h4 className="font-medium text-[#2c3e2e] dark:text-white">{item.productName}</h4>
                            <button
                              onClick={() => removeFromCart(item.id)}
                              className="text-gray-400 hover:text-red-500"
                            >
                              <MdDelete />
                            </button>
                          </div>
                          <p className="mt-1 text-sm font-bold text-[#7B542F]">
                            {item.currency}{item.price}
                          </p>
                          <div className="mt-auto flex items-center gap-3">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="flex h-6 w-6 items-center justify-center rounded border hover:bg-gray-100 dark:border-white/10 dark:hover:bg-white/5"
                            >
                              <MdRemove className="text-xs" />
                            </button>
                            <span className="text-sm font-medium">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="flex h-6 w-6 items-center justify-center rounded border hover:bg-gray-100 dark:border-white/10 dark:hover:bg-white/5"
                            >
                              <MdAdd className="text-xs" />
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </motion.div>
              )}
            </div>

            {/* Footer */}
            {cart.length > 0 && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="border-t p-6 dark:border-white/10"
              >
                <div className="mb-6 flex items-center justify-between">
                  <span className="text-lg font-medium">Subtotal</span>
                  <span className="text-xl font-bold text-[#2c3e2e] dark:text-white">
                    ₹{totalPrice}
                  </span>
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => openWhatsApp(cart, totalPrice)}
                  className="flex w-full items-center justify-center gap-3 rounded-full bg-[#25D366] py-4 font-bold text-white transition-transform"
                >
                  <FaWhatsapp className="text-2xl" />
                  Order on WhatsApp
                </motion.button>
                <p className="mt-4 text-center text-xs text-gray-500">
                  Tax and shipping calculated at checkout via WhatsApp
                </p>
              </motion.div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartSidebar;
