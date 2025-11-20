import { useEffect, useState } from "react";
import ProductDisplay from "./ProductDisplay";
import "./ProductLayout.css";
import RightSidebar from "./RightSideBar";

const ProductLayout = () => {

  // STORE ALL PRODUCTS
  const [products, setProducts] = useState([]);

  // STORE CURRENTLY SELECTED PRODUCT
  const [selectedProduct, setSelectedProduct] = useState(null);

  // FETCH PRODUCTS ON PAGE LOAD
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();

        console.log("Fetched Products:", data);  // 👈 Verify here

        setProducts(data);

        // Pick a RANDOM PRODUCT to show first
        const randomProduct = data[Math.floor(Math.random() * data.length)];
        setSelectedProduct(randomProduct);

        console.log("Selected Random Product:", randomProduct);

      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="product-layout">

      {/* LEFT — MAIN PRODUCT DISPLAY */}
      <div className="product-info">
        <ProductDisplay product={selectedProduct} />
      </div>

      {/* RIGHT — RECOMMENDED PRODUCTS */}
      <div className="right-column">
        <RightSidebar 
          products={products} 
          onSelectProduct={setSelectedProduct}
        />
      </div>

    </div>
  );
};

export default ProductLayout;
