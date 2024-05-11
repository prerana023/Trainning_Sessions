// function Cart({ cartItems, removeFromCart }) {
//   const getTotalQuantity = () => {
//     return cartItems.reduce((total, item) => total + item.quantity, 0);
//   };

//   const getTotalPrice = () => {
//     return cartItems.reduce(
//       (total, item) => total + item.price * item.quantity,
//       0
//     );
//   };

//   return (
//     <>
//       <div>
//         <h2>Cart</h2>
//         <ul>
//           {cartItems.map((item) => (
//             <li key={item.id}>
//               {item.title} - ${item.price} - Quantity: {item.quantity}
//               <button onClick={() => removeFromCart(item.id)}>Remove</button>
//             </li>
//           ))}
//         </ul>
//         <p>Total Quantity: {getTotalQuantity()}</p>
//         <p>Total Price: ${getTotalPrice()}</p>
//       </div>
//     </>
//   );
// }

// export default Cart;
