import AboutUs from "../features/HomePage/AboutUs";
import Features from "../features/HomePage/Features";
import Hero from "../features/HomePage/Hero";
import TopCabins from "../features/HomePage/TopCabins";

function Home() {
  return (
    <div>
      <Hero />
      <Features />
      <TopCabins />
      <AboutUs />
    </div>
  );
}

export default Home;
