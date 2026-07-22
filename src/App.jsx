import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import CategoryFilter from "./components/CategoryFilter/CategoryFilter";
import ProductGrid from "./components/ProductGrid/ProductGrid";
import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs";
import Testimonials from "./components/Testimonials/Testimonials";
import Newsletter from "./components/Newsletter/Newsletter";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <CategoryFilter />
      <ProductGrid />
      <WhyChooseUs />
      <Testimonials />
      <Newsletter />
      <Footer />
    </>
  );
}

export default App;