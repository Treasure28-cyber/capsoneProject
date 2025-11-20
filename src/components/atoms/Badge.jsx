import "./Badge.css";

const Badge = ({ image }) => {
  return (
    <img src={image} alt="badge" className="badge-icon" />
  );
};

export default Badge;
