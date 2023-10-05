const cartReducer = (state = [], action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            return [...state, action.payload];
        case "REMOVE_FROM_CART":
            return state.filter((book) => book.id !== action.payload);
        default:
            return state;
    }
};

const bookReducer = (state = [], action) => {
    switch (action.type) {
        case "FETCH_BOOKS":
            return action.payload;
        default:
            return state;
    }
};

export {cartReducer, bookReducer};