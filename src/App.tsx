"use client";

import { Authenticated, Unauthenticated } from "convex/react";

import { SignInForm } from "./SignInForm";
import { Home } from "./Home/Home";
import { Route, Routes } from "react-router-dom";
import { About } from "./About/About";
import { Products } from "./Products/Products";
import { Cart } from "./Cart/Cart";
import { ErrorPage } from "./Error/ErrorPage";
import { AppProvider } from "./useContext/AppProvider";
import { Header } from "./Header/Header";
import { Footer } from "./Footer/Footer";
import { ProductDetail } from "./ProductDetail/ProductDetail";
import { Toaster } from "react-hot-toast";

export default function App() {
  return (
    <AppProvider>
      <Header />
      <Authenticated>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
          <Toaster />
        </main>
      </Authenticated>
      <Unauthenticated>
        <SignInForm />
      </Unauthenticated>
      <Footer />
    </AppProvider>
  );
}
