import "./ProductItem.css";
function ProductsItem({ Product }) {
  const { imageUrl, productName, productPrice } = Product;
  return (
    <div className="product-item">
      <div className="product-image">
        <img src={imageUrl} alt="" />
      </div>
      <div className="product-info">
        <h2>{productName}</h2>
        <span>{productPrice}</span>
      </div>
    </div>
  );
}

export default ProductsItem;
