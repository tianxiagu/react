import {ADD_TO_CART,UPD_TO_CART,DEL_TO_CART,SEL_TO_CART} from './config'
const InitDefaultState={
    cart:[
        {
            id:1,
            product:'苹果笔记本',
            number:3,
            money:100
        },
        {
            id:2,
            product:'戴尔笔记本',
            number:2,
            money:50
        }
    ]
}

export const cartReducer=(state=InitDefaultState,action)=>{
    switch(action.type){
        case ADD_TO_CART:
            state.cart.push(action.payload);
            return state;
        break;
        case DEL_TO_CART:
            state.cart.map((item,index)=>{
                if(item.id===action.payload['id']){
                    state.cart.splice(index,1);
                }
            })
            return state;
        break;
        case UPD_TO_CART:
            state.cart.map((item, index) => {
                if(item.id===action.id){
                    state.cart[index]=action.payload;
                    state.cart[index].id=item.id;
                }
            })
            return state;
        break;    
        default:
            return state;
    }
}