import React, { useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { CartContext } from "./Cart/cartContext";

function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const cart = useContext(CartContext);

  const handleClick = () => {
    console.log("Remove product")
  }
  const handleCheckoutClick = () => {
    setIsModalOpen(true);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <nav className="bg-gray-800 p-4 flex justify-between items-center sticky top-0 z-10">
      <div className="text-white text-lg font-bold">Shopping Site</div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={openModal}
      >
        Your Cart
      </button>
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-8 w-3/4">
            <div className="flex justify-between">
              <h2 className="text-xl font-bold mb-4">Checkout Modal</h2>
              <button
                className="text-gray-500 mb-10 hover:text-gray-700"
                onClick={closeModal}
              >
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </div>
            {cart.items.length === 0 ? (
              <p>No items in cart</p>
            ) : (
              <>
              <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                  <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                    <th scope="col" class="px-6 py-3">
                        Product ID
                      </th>
                      <th scope="col" class="px-6 py-3">
                        Product name
                      </th>
                      <th scope="col" class="px-6 py-3">
                        Quantity
                      </th>
                      <th scope="col" class="px-6 py-3">
                        Price
                      </th>
                      <th scope="col" class="px-6 py-3">
                        Total Price
                      </th>
                      <th scope="col" class="px-6 py-3">
                        <span class="sr-only">Remove</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      cart.items.map((item, index) => (
                    <tr key={index} 
                    class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                      <td class="px-6 py-4">{item.id}</td>

                      <th
                        scope="row"
                        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {item.title}
                      </th>
                      <div className=" flex flex-wrap px-6 py-4">
                      <button onClick={() => cart.addOneToCart(item.id)}>+</button>
                      <td className="px-6">{item.quantity}</td>
                      <button onClick={() => cart.removeOneFromCart(item.id)}>-</button>
                      </div>
                      <td class="px-6 py-4">{item.price}</td>
                      <td class="px-6 py-4">{item.quantity * item.price}</td>
                      <td class="px-6 py-4 text-right">
                        <button
                          className="font-medium text-red-600 dark:text-red-500 hover:underline"
                          onClick={() => cart.deleteFromCart(item.id)}
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                      ))
                    }
                  </tbody>
                </table>
              </div>
              <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold mt-5 py-2 px-4 rounded"
            >
              Checkout
            </button>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
