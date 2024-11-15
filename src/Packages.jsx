import Footer from "./Footer";
import Header from "./Header";
import Prices from "./pricing-packages";
import Component from "./pricing-table";

const Packages = () => {
  return (
    <div>
      <Header></Header>
      <Prices></Prices>
      <Component></Component>
      <Footer></Footer>
    </div>
  );
};

export default Packages;
