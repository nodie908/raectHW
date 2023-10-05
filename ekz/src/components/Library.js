import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../redux/actions";

const Library = () => {
    const books = useSelector((state) => state.books);
    const dispatch = useDispatch();

    const handleAddToCart = (book) => {
        dispatch(addToCart(book))
    };


    return (
        <div>
            <h1>Библиотека</h1>
            <ul>
                {books.map((book) => (
                    <li key={book.id}>
                        {book.title}
                        <button onClick={() => handleAddToCart(book)}>
                            Добавить в корзину
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )

}



export default Library;