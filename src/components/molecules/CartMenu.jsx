import cartIcon from "../../assets/cart-icon.png";
import"./CartMenu.css"

const CartMenu = () => {
  return (
    <div className="cart-menu">
      <img src={cartIcon} alt="Shopping cart icon" className="cart-icon" />
        <span className="cart-span">Cart</span>
    </div>
  );
};

export default CartMenu;
