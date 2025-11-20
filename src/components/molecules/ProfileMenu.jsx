import { FaRegUser, FaChevronDown } from "react-icons/fa";
import"./ProfileMenu.css"
import profile from "../../assets/profile-icon.png";

const ProfileMenu = () => {
  return (
    <div className="profile-menu">
      <img src={profile} alt="profile-icon" className="profile-icon"/>
      <div className="span-dropdown">
        <span>Hi, Mukorode</span>
        <FaChevronDown className="dropdown-icon" />
      </div>
      
    </div>
  );
};

export default ProfileMenu;
