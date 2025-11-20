import { FaRegQuestionCircle, FaChevronDown } from "react-icons/fa";
import"./HelpMenu.css"

const HelpMenu = () => {
  return (
    <div className="help-menu">
      <FaRegQuestionCircle className="icon" />
      <span>Help</span>
      <FaChevronDown className="dropdown-icon" />
    </div>
  );
};

export default HelpMenu;
