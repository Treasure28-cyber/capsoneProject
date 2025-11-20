// src/components/atoms/Logo.jsx
import "./logo.css";
import jumiaLogo from "../../assets/jumia-logo 1.png";

const Logo = () => {
  return (
    <div className="nav-logo">
      <img src={jumiaLogo} alt="Jumia Logo" className="logo-img" />
    </div>
  );
};

export default Logo;
