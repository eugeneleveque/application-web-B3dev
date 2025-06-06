import React, { Suspense } from "react";
import { Route, Routes } from "react-router";

// lazy imports
const HomePage = React.lazy(() => import("../pages/HomePage"));
const ProductsPage = React.lazy(() => import("../pages/ProductsPage"));
const AboutPage = React.lazy(() => import("../pages/AboutPage"));
const SingleProductPage = React.lazy(() =>
  import("../pages/SingleProductPage")
);
const CartPage = React.lazy(() => import("../pages/CartPage"));
const CheckoutSuccessPage = React.lazy(() => import("../pages/CheckoutSuccessPage"));
const AuthPage = React.lazy(() => import("../pages/AuthPage"));


const ConfigRoutes = () => {
  return (
    <Suspense fallback={<div>Chargement en cours...</div>}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products/:id" element={<SingleProductPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout-success" element={<CheckoutSuccessPage />} />
        <Route path="/auth" element={<AuthPage />} />
      </Routes>
    </Suspense>
  );
};

export default ConfigRoutes;
