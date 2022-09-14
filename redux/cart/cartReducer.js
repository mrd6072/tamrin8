
const initialState = {
    selecteditems:[],
    itemsCounter:0,
    total:0,
    checkout:false,
}
const sumitems = item => {
    const itemsCounter = item.reduce((total ,product) => total + product.quantity , 0)
    const total = item.reduce((total , product) => total + product.price * product.quantity , 0).toFixed(2)
    return {itemsCounter , total};
}
const cartRedeucer = (state = initialState , action) => {
    switch(action.type) {
        case "ADD_ITEM" :
            if(!state.selecteditems.find(item => item.id === action.payload.id)){
                state.selecteditems.push({
                    ...action.payload,
                    quantity:1
                })
            }
            return{
                ...state,
                selecteditems:[...state.selecteditems],
                checkout: false,
                ...sumitems(state.selecteditems)
            }
            case "REMOVE_ITEM":
            const newSelectedItems = state.selecteditems.filter(item => item.id !== action.payload.id);
            return {
                ...state,
                selecteditems: [...newSelectedItems],
                ...sumitems(newSelectedItems)

            }
                case "INCREASE": 
                const indexI = state.selecteditems.findIndex(item => item.id === action.payload.id)
                state.selecteditems[indexI].quantity++;
                return{
                    ...state,
                    ...sumitems(state.selecteditems),
                    checkout:false
                }
                case "DECREASE": 
                const indexD = state.selecteditems.findIndex(item => item.id === action.payload.id)
                state.selecteditems[indexD].quantity--;
                return{
                    ...state,
                    ...sumitems(state.selecteditems),
                    checkout:false
                }
                case "CHECKOUT" : {
                    return{
                    selecteditems: [],
                    itemscounter:0,
                    total:0,
                    checkout:true,}
        
                }
                case "CLEAR" : {
                    return{ 
                        selecteditems: [],
                        itemscounter:0,
                        total:0,
                        checkout:false,
                    }
                }
                default : 
                    return state;
    }
}
export default cartRedeucer;