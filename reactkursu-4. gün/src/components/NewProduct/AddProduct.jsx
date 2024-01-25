import React from "react";

const AddProduct = ({ setIsOpen }) => {
  return <button onClick={() => setIsOpen(true)}>Yeni Ürün Ekle</button>;
};

export default AddProduct;
