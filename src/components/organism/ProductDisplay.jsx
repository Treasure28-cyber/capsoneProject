import ProductGallery from "../molecules/ProductGallery";
import ProductDetailsRight from  "../molecules/ProductDetailsRight"
import ProductDescription from  "../molecules/ProductDescription"
import "./ProductDisplay.css";

const ProductDisplay = ({ product }) => {
  
  if (!product) return <p>Loading product...</p>; // 👈 Prevents crashing

  return (
    <div className="product-description">
      <div className="product-top">
        
        {/* LEFT SIDE — IMAGE + BADGES */}
        <div className="product-gallery">
          <ProductGallery product={product} />
        </div>

        {/* RIGHT SIDE — TITLE + PRICE + RATING */}
        <div className="product-details-wrapper">
          <ProductDetailsRight product={product} />
        </div>
      </div>

      {/* DESCRIPTION BELOW */}
      <div className="product-description-wrapper">
        <ProductDescription product={product} />
      </div>
    </div>
  );
};

export default ProductDisplay;
