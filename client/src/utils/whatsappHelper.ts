import type { CartItem } from "../context/CartContext";

const WHATSAPP_NUMBER = "919876543210"; // REPLACE WITH ACTUAL BUSINESS NUMBER

export const formatWhatsAppMessage = (cart: CartItem[], total: number) => {
  let message = "*New Order from Pranivaa Website*\n\n";
  message += "----------------------------\n";
  
  cart.forEach((item, index) => {
    message += `${index + 1}. *${item.productName}*\n`;
    message += `   Qty: ${item.quantity}\n`;
    message += `   Price: ${item.currency}${item.price * item.quantity}\n\n`;
  });

  message += "----------------------------\n";
  message += `*Total Amount: ₹${total}*\n\n`;
  message += "Please confirm my order. Thank you!";

  return encodeURIComponent(message);
};

export const openWhatsApp = (cart: CartItem[], total: number) => {
  const message = formatWhatsAppMessage(cart, total);
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
  window.open(url, "_blank");
};
