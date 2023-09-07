import { createContext, useContext, useEffect, useReducer, useState } from "react";
import { getData } from "../api";

const StateContext = createContext();

// eslint-disable-next-line react/prop-types
export const StateContextProvider = ({children}) =>{

    const [productList, setProductList] = useState([]);
    
    const [search, setSearch] = useState("");


    const initialState ={
        products: [],
     };

    const reducer = (state, action) => {
        switch(action.type) {
            case "GET_PRODUCTS":
                return {...state, products: action.payload};
            default:
                return state;
        }
    }
    
    const [state, dispatch] = useReducer(reducer, initialState);
    
    const getProducts = async() => {
        const data = await getData("/products");
        setProductList(data);
    };
    
    useEffect(() => {
        getProducts();
    },[])
    
    useEffect(() => {
        dispatch({type: "GET_PRODUCTS", payload: productList});
        const filterProducts = productList.filter(product => {return product.title.toLowerCase().includes(search.toLocaleLowerCase())});
        dispatch({type: "GET_PRODUCTS", payload: filterProducts});
    },[productList, search]);
    
    
    const data = {state, search, setSearch};
    return(
        <StateContext.Provider value={data}>
            {children}
        </StateContext.Provider>
    )
}
// eslint-disable-next-line react-refresh/only-export-components
export const useStateContext = () =>useContext(StateContext);