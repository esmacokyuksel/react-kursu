import ProductsItem from "./ProductsItem";
import { productData } from "../components/ProductsData";
import "./Product.css";

function Product() {
  return (
    <div className="product-wrapper">
      <h1>Products</h1>
      <div className="products">
        {productData.map((Product) => {
          return <ProductsItem key={Product.productName} Product={Product} />;
        })}
      </div>
    </div>
  );
}
export default Product;
