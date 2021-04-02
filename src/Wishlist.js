import {} from "react";
import { useCart } from "./cart-context";
import "./wishlist.css";

const Wishlist = ({ setRoute }) => {
  const { items, setItems } = useCart();
  let length = items.reduce(function (n, val) {
    return n + (val.wishlist === true);
  }, 0);
  return (
    <div className="wishlist">
      <div className="wishlist-head">
        <span
          className="wishlist-back btn"
          onClick={() => {
            setRoute("products");
          }}
        >
          <ion-icon name="arrow-back-outline"></ion-icon>
        </span>
        <div className="wishlist-header">
          <h1>Wishlist</h1>
          <h2>{length} items</h2>
        </div>
        <span
          className="wishlist-backet btn"
          onClick={() => {
            setRoute("cart");
          }}
        >
          <ion-icon name="basket-outline"></ion-icon>{" "}
        </span>
      </div>
      <div className="wishlist-products">
        {items.map(
          ({ id, name, price, wishlist, count }) =>
            wishlist &&
            !count && (
              <div className="wishlist-product" key={id}>
                <img
                  src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/13.jpg"
                  alt="t-shirt"
                  className="wishlist-img"
                />
                <div className="wishlist-product-details">
                  <h3>Product: {name}</h3>
                  <h3>Price: {price}$</h3>
                </div>
                <div className="wishlist-action-btns">
                  <button
                    onClick={() => {
                      let temp = items.map((el) =>
                        el.id === id ? { ...el, count: el.count + 1 } : el
                      );
                      setItems(temp);
                    }}
                  >
                    Add to cart
                  </button>
                  <button
                    onClick={() => {
                      let temp = items.map((el) =>
                        el.id === id ? { ...el, wishlist: !el.wishlist } : el
                      );
                      setItems(temp);
                    }}
                  >
                    Remove from wishlist
                  </button>
                </div>
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default Wishlist;
// #fbfbfb !important
