import { useState } from "react";
import "./ProductForm.css";
const ProductForm = () => {
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  /*   const [productData, setProductData] = useState({
    productName: "",
    productPrice: "",
    imageUrl: "",
  }); */

  const titleChangeHandler = (event) => {
    setProductName(event.target.value);
    /* setProductData({
      ...productData,
      productName: event.target.value,
    }); */
    /* setProductData((prevState) => {
      return { ...prevState, productName: event.target.value };
    }); */
  };

  const priceChangeHandler = (event) => {
    setProductPrice(event.target.value);
    /*  setProductData({
      ...productData,
      productPrice: event.target.value,
    }); 
    setProductData((prevState) => {
      return { ...prevState, productPrice: event.target.value };
    }); */
  };

  const imageChangeHandler = (event) => {
    setImageUrl(event.target.value);
    /*  setProductData({
      ...productData,
      imageUrl: event.target.value,
    }); 
    setProductData((prevState) => {
      return { ...prevState, imageUrl: event.target.value };
    }); */
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const newProductData = {
      productName,
      productPrice,
      imageUrl,
    };
    console.log(newProductData);
    setProductName("");
    setProductPrice("");
    setImageUrl("");
    //HTML sayfasındaki örneğin inputtan girilen bir değerin component'e, component'te tanımlana bir değerinde html sayfasına aktarım yani çift yönlü aktarım işlemine two-way binding deriz. Böylece güncellemeler anlık olarak ve otomatik bir şekilde gerçekleşir
  };

  return (
    <form className="product-form" onSubmit={submitHandler}>
      <div className="product-form-input">
        <label>Ürün Adı</label>
        <input
          type="text"
          placeholder="Ürün Adı Giriniz..."
          onChange={titleChangeHandler}
          value={productName}
        />
      </div>
      <div className="product-form-input">
        <label>Ürün Fiyatı</label>
        <input
          type="number"
          placeholder="Ürün Fiyatı Giriniz..."
          onChange={priceChangeHandler}
          value={productPrice}
        />
      </div>
      <div className="product-form-input">
        <label>Ürün Görseli</label>
        <input
          type="text"
          placeholder="Ürün Görseli Giriniz..."
          onChange={imageChangeHandler}
          value={imageUrl}
        />
      </div>
      <button className="product-form-button">Ürün Ekle</button>
    </form>
  );
};
export default ProductForm;
