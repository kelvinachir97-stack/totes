import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import OtherStock from "./components/OtherStock";
import ExploreSection from "./components/ExploreSection";
import Footer from "./components/Footer";
import Cart from "./pages/Cart";
import Shopping from "./pages/Shopping";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <OtherStock />
              <ExploreSection />
            </>
          }
        />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Shopping />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;