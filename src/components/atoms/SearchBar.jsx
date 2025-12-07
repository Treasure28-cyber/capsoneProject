// src/components/atoms/SearchBar.jsx
import Button from "./Button";
import "./searchBar.css";
import searchIcon from "../../assets/search.png";

const SearchBar = () => {
  return (
    <div className="search-parent">
      <div className="search-bar">
        <img src={searchIcon} alt="search icon" className="search-icon" />

        <input
          type="text"
          placeholder="Search products, brands and categories"
        />
      </div>

      <Button />
    </div>
  );
};

export default SearchBar;
