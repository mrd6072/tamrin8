import axios from 'axios';

const fetchProductRequest = () => {
    return {
        type: "FETCH_PRODUCT_REQUEST"
    }
}
const fetchProductSucces = product => {
    return{
        type: "FETCH_PRODUCT_SUCCES",
        payload:product
    }
}
const fetchProductFilure = error => {
    return{
        type: "FETCH_PRODUCT_FILURE",
        payload:error
    }
}

export const fetchproducts = () => {
    return(dispatch) => {
        dispatch(fetchProductRequest());
        axios.get("https://fakestoreapi.com/products")
        .then(response => {
            const products = response.data
            dispatch(fetchProductSucces(products))
        })
        .catch(error => {
            const errorMSG = error.message
            dispatch(fetchProductFilure(errorMSG))
        })
    }
}