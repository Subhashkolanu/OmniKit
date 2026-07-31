import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import SearchBar from "../components/SearchBar";
import FeaturedTools from "../components/FeaturedTools";
import Categories from "../components/Categories";
import WhyUs from "../components/WhyUs";
import Stats from "../components/Stats";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <SearchBar />
      <FeaturedTools />
      <Categories />
      <WhyUs />
      <Stats />
      <CTA />
      <Footer />
    </>
  );
}