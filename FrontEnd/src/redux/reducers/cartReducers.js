import * as actionType from '../constants/cartConstatant'

export const cartReducers=(state={cartItems:[]},action)=>{
     switch (action.type) {
        case actionType.ADD_TO_CART:
            const item=action.payload;
            const exist=state.cartItems.find(product=>product._id===item._id);

            if(exist){
                return { ...state,cartItems:state.cartItems.map(data=>data.product===exist.product ? item : data )}
            }else{
                return {...state,cartItems:[...state.cartItems,item]}
            }

        case actionType.REMOVE_FROM_CART:
            return {...state,cartItems: state.cartItems.filter(product=>product._id!==action.payload)}

        // case actionType.INCREMENT_QUANTITY:
        //     return {
        //         ...state,
        //         cartItems:state.cartItems.map((item)=>{
        //             item._id===action.payload ? {...item,quantity:item.quantity+1}
        //             : item
        //         })
        //     }
        default:
            return state
     }
}