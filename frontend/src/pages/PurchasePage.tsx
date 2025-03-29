import { useNavigate, useParams } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useState } from 'react';
import { CartItem } from '../types/CartItem';
import WelcomeBand from '../components/WelcomeBand';

function PurchasePage() {
  const navigate = useNavigate();
  const { title, bookId, bookPrice } = useParams();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState<number>(0);

  const handleAddToCart = () => {
    const newItem: CartItem = {
      bookId: Number(bookId),
      title: title || 'No Books Found',
      quantity: quantity,
      price: Number(bookPrice),
    };
    addToCart(newItem);
    navigate('/cart');
  };

  return (
    <>
      <WelcomeBand />
      <h2>Purchase: {title}</h2>

      <h3>Price: ${bookPrice}</h3>

      <div>
        <label>Quantity: </label>
        <input
          type="number"
          placeholder="Enter quantity"
          value={quantity}
          onChange={(x) => setQuantity(Number(x.target.value))}
        />
        <button onClick={handleAddToCart}>Add to Cart</button>
      </div>

      <button onClick={() => navigate(-1)}>Go Back</button>
    </>
  );
}

export default PurchasePage;
