import axios from "axios";
import { fetchBooks } from "./redux/actions";

export const fetchBooksFromApi = (dispatch) => {
  axios.get("https://www.dbooks.org/api/recent").then((response) => {
    dispatch(fetchBooks(response.data));
  });
};
