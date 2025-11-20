import Hamburger from "../atoms/Icon";
import Logo from "../atoms/Logo";
import SearchBar from "../atoms/SearchBar";
import SearchIcon from "../atoms/SearchIcon";

import ProfileMenu from "../molecules/ProfileMenu";
import HelpMenu from "../molecules/HelpMenu";
import CartMenu from "../molecules/CartMenu";

import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">

      {/* LEFT */}
      <div className="left-section">
        <Hamburger />
        <Logo />
      </div>

      {/* MIDDLE — Full search bar (Desktop only) */}
      <div className="middle-section desktop-search">
        <SearchBar />
        
      </div>

      {/* MIDDLE — Search Icon (Tablet/Mobile only) */}
      <div className="middle-section mobile-search">
        <SearchIcon />
      </div>

      {/* RIGHT */}
      <div className="right-section">
        <ProfileMenu />
        <HelpMenu className="help-menu" />
        <CartMenu />
      </div>

    </nav>
  );
};

export default Navbar;
