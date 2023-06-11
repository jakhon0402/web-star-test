import AboutUs from "./components/AboutUs";
import BestProducts from "./components/BestProducts";
import CollectionSection from "./components/CollectionSection";
import Follow from "./components/Follow";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Subscribe from "./components/Subscribe";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <div className='flex flex-col w-screen items-center'>
      <div className='flex flex-col max-w-[1152px] w-full'>
        <Navbar />
        <Header />
        <CollectionSection />
        <AboutUs />
        <BestProducts />
        <Testimonials />
        <Subscribe />
        <Follow />
        <Footer />
      </div>
    </div>
  );
}

export default App;
