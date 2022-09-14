const initialState = {
    Loading : false,
    products : [],
    error: ""
}

const ProductReducer = (state = initialState , action) => {
    switch(action.type) {
        case  "FETCH_PRODUCT_REQUEST" : 
            return{
                ...state,
                Loading : true

                }
                case "FETCH_PRODUCT_SUCCES" : 
                return {
                    ...state,
                    Loading: false,
                    products: action.payload
                }
                case "FETCH_PRODUCT_FILURE" : 
                return {
                    ...state,
                    Loading: false,
                    error: action.payload
                }
                default : return state;        
    }
}

export default ProductReducer