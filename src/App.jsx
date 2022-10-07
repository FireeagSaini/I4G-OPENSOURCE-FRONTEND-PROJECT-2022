import React from "react";
import EmailVerify from "./component/email/EmailVerify";
import AddNewProductPage1 from './AddNewProduct/pageOne/AddNewProductPage1'
import WishlistDeleteItem from "./Wishlist-SD/components/pages/WishlistDeleteItem"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <h1 className="text-3xl font-bold text-red-600">Home</h1>
              <Link to="/support">Help and Support</Link>
              <br />
              <Link to="/email-verification">Visit Email Verification Page</Link>
              <br />
              <Link to="/products">Add new product</Link>
              <br />
              <Link to="/wishlist">Delete Item From Wishlist</Link>

            </>
          }
        />
        <Route
          path="/email-verification"
          element={
            <>
              <EmailVerify />
            </>
          }
        />
        <Route
        path="/products"
        element={<AddNewProductPage1/>}
        />

        <Route
        path="/wishlist"
        element={<WishlistDeleteItem />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
