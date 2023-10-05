import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../redux/actions";

const Cart = () => {
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();


    const handleRemoveFromCart = (book) => {
        dispatch(removeFromCart(book));
    };

    return (
        <div>
            <h1>Корзина</h1>
            <ul>
                {cart.map((book) => (
                    <li key={book.id}>
                        {book.title}
                        <button onClick={() => handleRemoveFromCart(book.id)}>
                            Удалить с корзины
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )

}



export default Cart;