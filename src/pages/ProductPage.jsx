import Navbar from "../components/organism/NavBar";
import ProductLayout from "../components/organism/ProductLayout";
import"./ProductPage.css"

const ProductPage = () => {
  return (
    <>
        <div className="nav-bar-display">
            <Navbar />
        </div>
        <ProductLayout />
    </>
  );
};

export default ProductPage;
