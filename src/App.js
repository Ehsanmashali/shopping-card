import "./App.css";
import Store from "./components/Store";
import { Routes, Route, Navigate } from "react-router-dom";

// Component
import ProductDetails from "./components/ProductDetails";
import Navbar from "./components/Shared/Navbar";
import ShopCart from "./components/Shared/ShopCart";

// Context
import ProductContextProvider from "./context/ProductContextProvider";
import CartContextProvider from "./context/CartContextProvider";

function App() {
  return (
    <ProductContextProvider>
      <CartContextProvider>
        <Navbar />
        <Routes>
          <Route path="/products" element={<Store />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<ShopCart />} />
          <Route path="/*" element={<Navigate to="/products" />} />
        </Routes>
      </CartContextProvider>
    </ProductContextProvider>
  );
}

export default App;
