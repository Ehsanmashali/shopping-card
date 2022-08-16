import "./App.css";
import Store from "./components/Store";
import { Routes, Route, Navigate } from "react-router-dom";

// Component
import ProductDetails from "./components/ProductDetails";

// Context
import ProductContextProvider from "./context/ProductContextProvider";
import CartContextProvider from "./context/CartContextProvider";

function App() {
  return (
    <ProductContextProvider>
      <CartContextProvider>
        <Routes>
          <Route path="/products" element={<Store />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/*" element={<Navigate to="/products" />} />
        </Routes>
      </CartContextProvider>
    </ProductContextProvider>
  );
}

export default App;
