import "./ProductDetailsRight.css";
import staIcon from "../../icons/star-full.png";
import starIcon from "../../icons/star-full-white.png";
import cartIcon from "../../assets/white-cart-icon.png";

const ProductDetailsRight = ({ product }) => {
  
  const usdToNgnRate = 1450.82; // converting to naira 
  
  const priceInNaira = Math.round(product.price * usdToNgnRate);
  
  // Calculate the old price for the discount
  const oldPriceInNaira = Math.round(priceInNaira * 1.4);


  if (!product) {
    return <div>Loading product...</div>;
  }


  return (
    <div className="pdr-container">

      {/* LABEL BUTTONS */}
      <div className="top-labels">
        <span className="official-store-org">Official Store</span>
        <span className="pay-delivery">Pay on Delivery</span>
      </div>

      {/* TITLE */}
      <h2 className="product-title1">
        {product.title}
      </h2>

      {/* BRAND */}
      <p className="brand-line">
        Brand: <span className="brand-link">{product.category}</span>
      </p>

      {/* FLASH SALE */}
      <div className="flash-sale-card">
        <div className="flash-header">
          <span className="fh-left">Flash Sales</span>
          <span className="fh-right">Time Left: <strong>02h : 09m : 56s</strong></span>
        </div>

        <div className="flash-body">
          <div className="price-row">
            <span className="new-price">₦ {priceInNaira}</span>
            <span className="old-price">₦ {oldPriceInNaira}</span>
            <span className="discount-tag">-29%</span>
          </div>
            <div className="stock-progress">
                <div className="stock-left">50 items left</div>

                <div className="progress-bar">
                    <div className="progress-fill"></div>
                </div>
            </div>
        </div>
      </div>

      {/* SHIPPING */}
      <div className="shipping-info">
        <span className="ship-cross">+</span>
        <span className="ship-value">
          Shipping from ₦ 2,730 to LEKKI-AJAH (SANGOTEDO)
        </span>
      </div>

      {/* RATINGS */}
      <div className="rating-section">
        <img src={staIcon} alt="star" />
        <img src={staIcon} alt="star" />
        <img src={staIcon} alt="star" />
        <img src={staIcon} alt="star" />
        <img src={staIcon} alt="star" />
        <span className="rating-count">(11 verified ratings)</span>
      </div>

      {/* ADD TO CART */}
      <button className="add-cart-btn">
        <img src={cartIcon} className="cart-icon" alt="cart" />
        <div className="cart-name">Add to cart</div> 
      </button>

      {/* PROMOTIONS */}
      <span className="promotions-title">PROMOTIONS</span>

      <ul className="promo-list">
        <li className="promo-item">
          <span className="promo-icon">
            <img src={starIcon} alt="promo" />
          </span>
          <span className="promo-text">Call 07006000000 To Place Your Order</span>
        </li>

        <li className="promo-item">
          <span className="promo-icon">
            <img src={starIcon} alt="promo" />
          </span>
          <span className="promo-text">
            Enjoy cheaper shipping fees when selecting a PickUp Station
          </span>
        </li>

        <li className="promo-item">
          <span className="promo-icon">
            <img src={starIcon} alt="promo" />
          </span>
          <span className="promo-text">
            Need money? Loan up to ₦500,000 on JumiaPay App
          </span>
        </li>
      </ul>
    </div>
  );
};

export default ProductDetailsRight;
