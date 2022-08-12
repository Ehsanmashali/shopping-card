import "./App.css";
import Store from "./components/Store";
import { Routes, Route, Navigate } from "react-router-dom";

// Component
import ProductDetails from "./components/ProductDetails";

// Context
import ProductContextProvider from "./context/ProductContextProvider";

function App() {
  return (
    <ProductContextProvider>
      <Routes>
        <Route path="/product" element={<Store />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/*" element={<Navigate to="/product" />} />
      </Routes>
    </ProductContextProvider>
  );
}

export default App;
