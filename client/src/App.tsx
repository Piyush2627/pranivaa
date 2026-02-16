import Router from "./router/Router";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { CartProvider } from "./context/CartContext";

const queryClient = new QueryClient();
function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <CartProvider>
          <Router />
        </CartProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;

