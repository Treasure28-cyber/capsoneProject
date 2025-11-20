import "./ProductGallery.css";
import warrantyBadge from "../../assets/warranty-img.png";
import officialBadge from "../../assets/Official-Store-img.png";
const ProductGallery = ({ product }) => {

  if (!product) return <p>Loading...</p>;

  return (
    <div className="gallery-container">

      {/* TOP ROW WITH CATEGORY */}
      <div className="brand-row">
        <span className="brand-name">{product.category}</span>
        <img src={officialBadge} alt="official-store" width={115 }/>
        <img src={warrantyBadge} alt="warranty" width={100} />
      </div>

      {/* MAIN IMAGE */}
      <div className="main-image-wrapper">
        <img
          src={product.image}
          alt={product.title}
          className="main-product-image"
          width={300}
        />
        
      </div>

      {/* SHARE SECTION */}
      <div className="share-section">
        <p className="share-title">SHARE THIS PRODUCT</p>

        <div className="share-icons">

          {/* Facebook Icon */}
          <div className="icon-circle">
            <svg viewBox="0 0 24 24" className="share-icon">
              <path d="M22 12a10 10 0 1 0-11.5 9.9v-7H8v-3h2.5V9.5c0-2.5 1.5-3.9 3.7-3.9 
                       1.1 0 2.2.2 2.2.2v2.4H15c-1.2 0-1.6.8-1.6 1.6V12H17l-.4 3h-2.2v7A10 10 0 0 0 22 12"/>
            </svg>
          </div>

          {/* Twitter Icon */}
          <div className="icon-circle">
            <svg viewBox="0 0 24 24" className="share-icon">
              <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.3 4.3 0 0 0 
                       1.88-2.37 8.59 8.59 0 0 1-2.72 1.04 
                       4.28 4.28 0 0 0-7.4 3.9A12.1 12.1 0 0 1 
                       3.15 4.9a4.27 4.27 0 0 0 1.33 5.72 
                       4.24 4.24 0 0 1-1.94-.54v.06 
                       a4.28 4.28 0 0 0 3.43 4.2 4.3 4.3 0 0 1-1.93.07 
                       4.29 4.29 0 0 0 4 2.98A8.6 8.6 0 0 1 2 19.54 
                       12.1 12.1 0 0 0 8.29 21.3 
                       c7.55 0 11.68-6.26 11.68-11.7 
                       0-.18 0-.35-.01-.53A8.36 8.36 0 0 0 22.46 6z"/>
            </svg>
          </div>

        </div>
      </div>

    </div>
  );
};

export default ProductGallery;
