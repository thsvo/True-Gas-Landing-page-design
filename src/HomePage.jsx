import Component from "./pricing-table";
import Hero from "./Hero";
import Header from "./Header";
import Offer from "./Offer";
import Prices from "./pricing-packages";
import Contract from "./Form";
import Footer from "./Footer";
import Faqs from "./faqs";
import Cta from "./Cta";
import About from "./About";
import Benifit from "./Benifit";
import Testimonials from "./Testimonials";
import Cont from "./Contact";
import Why from "./Why";

const HomePage = () => {
  return (
    <div>
      {/* <Header /> */}

      <Hero></Hero>

      {/* <Contract /> */}
      <Benifit></Benifit>
      {/* <Offer /> */}
      <About></About>

      <Component />
      <Prices />
      <Cont />

      <Testimonials></Testimonials>
      <Why></Why>
      <Faqs />

      <Cta></Cta>
      <Footer></Footer>
    </div>
  );
};

export default HomePage;
