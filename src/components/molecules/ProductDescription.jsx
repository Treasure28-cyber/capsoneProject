import "./ProductDescription.css";

const ProductDescription = () => {
  return (
    <div className="description-container">

      <h3 className="description-title">DESCRIPTION</h3>

      <p className="description-text">
        Brand story: SKYRUN was established in 2005. It is a local manufacturing 
        company in Nigeria. There are 6 high-efficiency production plants in the 
        country. Products include TVs, Washing Machines, Refrigerators, Air 
        Conditioners, Smart Electric Meters, Small Appliances, etc. And the Smart 
        Electric Meters received a manufacturing certificate issued by NERC in 2016. 
        SKYRUN is a leading supplier of technology and services in Nigeria. SKYRUN 
        has a nationwide sales network and after-sales service system, and always 
        puts user experience first. SKYRUN’s brand philosophy is "Make a better life".
      </p>

      <p className="report-link">
        Report incorrect product information
      </p>

    </div>
  );
};

export default ProductDescription;
