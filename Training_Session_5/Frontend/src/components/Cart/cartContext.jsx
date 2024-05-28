import { createContext, useState } from "react";
import { productsArray,  getProductData} from "../../data/storeProducts";

export const CartContext = createContext({
    items: [],
    getProductQuantity : () => {},
    addOneToCart: () => {},
    removeOneFromCart: () => {},
    deleteFromCart: () => {},
    getTotalPrice: () => {}
})

export function CartProvider({children}){

    const [cartProducts, setCartProducts] =useState([]);

    function getProductQuantity(id){
        const quantity = cartProducts.find(product =>product.id === id )?.quantity
        console.log(quantity, id)
        if( quantity === undefined){
            return 0;
        }

        return quantity;
      }

    function addOneToCart(id, title, price ){
        const quantity = getProductQuantity(id);
        if(quantity === 0){
            setCartProducts([
                ...cartProducts,{
                    id:id,
                    title: title,
                    price: price,
                    quantity: quantity || 1,
                }]
            )
        }
        else {
            setCartProducts(
                cartProducts.map( product => product.id === id 
                    ? {...product, quantity: product.quantity +1}
                    : product   

                )
            )
        }

    }

    function deleteFromCart(id){
        setCartProducts(
            cartProducts => cartProducts.filter( currentProduct => {
                return currentProduct.id !=id;
            }
        ))
    }

    function removeOneFromCart(id){
        const quantity = getProductQuantity(id);

        if(quantity == 1 ){
            deleteFromCart(id);
        }
        else{
            setCartProducts(
                cartProducts.map( product => product.id === id 
                    ? {...product, quantity: product.quantity - 1}
                    : product   

                )
            )
        }
    }

    function getTotalPrice(){
        let totalCost = 0;
        cartProducts.map((cartItem) => {
            const productData = getProductData(cartItem.id);
            totalCost +=(productData.price * cartItem.quanity);
        })
        return totalCost

    }
    const contextValue = {
        items: cartProducts,
        getProductQuantity,
        addOneToCart,
        removeOneFromCart,
        deleteFromCart,
        getTotalPrice
    }
    return(
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;