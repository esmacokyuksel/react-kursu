import ProductItem from "./ProductItem";
import "./Product.css";
import NewProduct from "./NewProduct/NewProduct";
import { useState } from "react";

const Product = () => {
  const [products, setProducts] = useState([]);
  /*   if (products.length === 0) {
    return <p>Hiç Ürün Yok.</p>;
  }
 */
  console.log("products", products);
  return (
    <div className="product-wrapper">
      <NewProduct products={products} setProducts={setProducts} />
      <h1>Products</h1>
      <div className="products">
        {products.length === 0 ? (
          <p>Hiç Ürün Yok.</p>
        ) : (
          products.map((product) => (
            <ProductItem
              product={product}
              key={product.id}
              setProducts={setProducts}
              products={products}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Product;
