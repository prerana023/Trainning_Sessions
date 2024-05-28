import React, { useState, useContext } from 'react'; 
import { CartContext } from './Cart/cartContext';
import { toast } from 'react-toastify';

function ProductCard({ id, title, price, imageUrl }) {
  const cart = useContext(CartContext);
  const productQuantity = cart.getProductQuantity(id);
  const [quantity, setQuantity] = useState(productQuantity); 

  return (
    <div className="bg-white rounded-lg shadow-lg hover:shadow-xl p-4 m-6">
      <div className="w-full h-auto mb-4">
        <img src={imageUrl} alt={title} className="w-3/6 h-auto" />
      </div>
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="text-gray-700">Price: ${price}</p>
      <div className="flex items-center">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2"
          onClick={() => {
            cart.addOneToCart(id, title, price);
            toast.success("Item added to cart successfully!")
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
