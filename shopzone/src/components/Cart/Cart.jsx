import { useCart } from "../../context/CartContext";
import "./Cart.css";
import { Trash2 } from "lucide-react";
function Cart() {
  const {
    cartItems,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
  } = useCart();

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-page">
      <h1>Shopping Basket</h1>

      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <h2>Your basket is empty</h2>
          <p>Add some products to your basket.</p>
        </div>
      ) : (
        <div className="cart-container">

          <div className="cart-products">
            {cartItems.map((item) => (
              <div className="cart-item" key={item.id}>

                <img
                  src={item.image}
                  alt={item.name}
                  className="cart-item-image"
                />

                <div className="cart-item-info">
                  <h2>{item.name}</h2>
                  <p className="cart-price">${item.price}</p>

                  <div className="quantity">
                    <button
                      onClick={() => decreaseQuantity(item.id)}
                    >
                      −
                    </button>

                    <span>{item.quantity}</span>

                    <button
                      onClick={() => increaseQuantity(item.id)}
                    >
                      +
                    </button>
                  </div>

                  <button
                    className="remove-btn"
                    onClick={() => removeFromCart(item.id)}
                    title="Remove"
                  >
                    <Trash2 size={20} />
                  </button>
                </div>

                <div className="item-total">
                  ${(item.price * item.quantity).toFixed(2)}
                </div>

              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h2>Order Summary</h2>

            <div className="summary-row">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>

            <div className="summary-row">
              <span>Shipping</span>
              <span className="free">Free</span>
            </div>

            <hr />

            <div className="total-row">
              <span>Total</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>

            <button className="checkout-btn">
              Proceed to Checkout
            </button>
          </div>

        </div>
      )}
    </div>
  );
}

export default Cart;