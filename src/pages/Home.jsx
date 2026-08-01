import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import SearchBar from "../components/SearchBar";
import FeaturedTools from "../components/FeaturedTools";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <SearchBar />
      <FeaturedTools />
      <Footer />
    </>
  );
}