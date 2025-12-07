import "./RightSideBar.css";

const RightSidebar = ({ products, onSelectProduct }) => {
  return (
    <div className="sidebar-container">

      <h3 className="sidebar-title">PRODUCTS</h3>

      {products.length === 0 ? (
        <p>Loading...</p>
      ) : (
        products.map((item) => (
          <div 
            key={item.id} 
            className="sidebar-card"
          >
            <img 
              src={item.image} 
              alt={item.title} 
              className="sidebar-img" 
            />

            <div className="sidebar-info">
              <p className="sidebar-name">{item.title}</p>
              <p className="sidebar-category">{item.category}</p>
              <p className="sidebar-price">₦{item.price}</p>

              <button 
                className="sidebar-btn"
                onClick={() => onSelectProduct(item)}   // 👈 Update main product
              >
                View product
              </button>
            </div>

          </div>
        ))
      )}

    </div>
  );
};

export default RightSidebar;
