import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { CartItem } from '../types/CartItem';

function CartPage() {
  const navigate = useNavigate();
  const { cart, removeFromCart } = useCart();

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Your Cart</h2>
      <div className="row">
        <div className="col-md-8">
          {cart.length === 0 ? (
            <p className="alert alert-warning">You cart is empty</p>
          ) : (
            <ul className="list-group">
              {cart.map((item: CartItem) => (
                <li
                  key={item.bookId}
                  className="list-group-item d-flex justify-content-between align-items-center"
                >
                  <div>
                    <strong>{item.title}</strong> <br />
                    Quantity: {item.quantity} | Price: ${item.price.toFixed(2)}{' '}
                    <br />
                    Subtotal:{' '}
                    <strong>${(item.price * item.quantity).toFixed(2)}</strong>
                  </div>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => removeFromCart(item.bookId)}
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Sidebar for total and buttons */}
        <div className="col-md-4">
          <div className="card p-3">
            <h3>Total: ${calculateTotal().toFixed(2)}</h3>
            <button className="btn btn-primary btn-block mt-3">Checkout</button>
            <button
              className="btn btn-secondary btn-block mt-2"
              onClick={() => navigate('/')}
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
