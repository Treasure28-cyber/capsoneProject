import "./ProductDetailsRight.css";

const ProductDetailsRight = () => {
  return (
    <div className="product-details-right">
      
      {/* TOP LABEL BUTTONS */}
      <div className="top-labels">
        <span className="official-store">Official Store</span>
        <span className="pay-delivery">Pay on Delivery</span>
      </div>

      {/* PRODUCT NAME */}
      <h2 className="product-title">
        Skyrun 46 Litres Single Door Fridge (BCD-50MY)
      </h2>
      <p className="product-color">Silver</p>

      {/* BRAND LINE */}
      <p className="brand-line">
        Brand: <span className="brand-name">Skyrun</span>{" "}
        <span className="brand-link"> Similar Products from Skyrun</span>
      </p>

      {/* FLASH SALE BOX */}
      <div className="flash-sale-box">
        <span className="flash-left">FLASH SALE</span>
        <span className="flash-right">
          Time Left: <span className="flash-timer">02h : 21m : 33s</span>
        </span>
      </div>

      {/* SHIPPING FEE */}
      <div className="shipping-info">
        <span className="ship-title">Shipping:</span>
        <span className="ship-value">₦ 3,500 Delivery Fee</span>
      </div>

      {/* RATINGS */}
      <div className="rating-section">
        <img src="/icons/star-full.png" alt="star" />
        <img src="/icons/star-full.png" alt="star" />
        <img src="/icons/star-full.png" alt="star" />
        <img src="/icons/star-full.png" alt="star" />
        <img src="/icons/star-half.png" alt="star" />
        <span className="rating-count">(124 ratings)</span>
      </div>

      {/* ADD TO CART BUTTON */}
      <button className="add-cart-btn">ADD TO CART</button>

      {/* PROMOTIONS HEADING */}
      <h3 className="promotions-title">Promotions</h3>

      {/* PROMOTION LIST */}
      <ul className="promo-list">
        <li className="promo-item">
          <span className="promo-icon">
            <img src="/icons/star-logo.png" alt="promo" />
          </span>
          <span className="promo-text">Pay with JumiaPay and get 5% off</span>
          <span className="promo-price">₦ 1,500</span>
        </li>

        <li className="promo-item">
          <span className="promo-icon">
            <img src="/icons/star-logo.png" alt="promo" />
          </span>
          <span className="promo-text">Buy 2 items, get ₦700 discount</span>
          <span className="promo-price">₦ 700</span>
        </li>

        <li className="promo-item">
          <span className="promo-icon">
            <img src="/icons/star-logo.png" alt="promo" />
          </span>
          <span className="promo-text">Sign up to get a voucher</span>
          <span className="promo-price">₦ 1,000</span>
        </li>
      </ul>
    </div>
  );
};

export default ProductDetailsRight;
