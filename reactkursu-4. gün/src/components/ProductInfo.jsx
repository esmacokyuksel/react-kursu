const ProductInfo = (props) => {
  return (
    <div className="product-info">
      <span style={{ marginBottom: "5px" }} className="ad"></span>
      {props.children}
    </div>
  );
};

export default ProductInfo;
