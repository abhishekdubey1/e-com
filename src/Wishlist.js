import {} from "react";
import "./wishlist.css";

const Wishlist = () => {
  return (
    <div className="wishlist">
      <div className="wishlist-head">
        <span className="wishlist-back btn">
          <ion-icon name="arrow-back-outline"></ion-icon>
        </span>
        <div className="wishlist-header">
          <h1>Wishlist</h1>
          <h2>36 items</h2>
        </div>
        <span className="wishlist-backet btn">
          <ion-icon name="basket-outline"></ion-icon>{" "}
        </span>
      </div>
      <div className="wishlist-products">
        <div className="wishlist-product">
          <img
            src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/13.jpg"
            alt="t-shirt"
            className="wishlist-img"
          />
          <div className="wishlist-product-details">
            <h3>Product: T-shirt</h3>
            <h3>Price: 300$</h3>
          </div>
          <div className="wishlist-action-btns">
            <button>Add to cart</button>
            <button>Remove from cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
// #fbfbfb !important
