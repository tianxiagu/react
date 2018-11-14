import {createStore,combineReducers} from 'redux'
import CartManage from './action'
import {cartReducer} from './reducer' 

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
const allReducer = {
    reducer: cartReducer
}
const rootReducer = combineReducers(allReducer)
const store = createStore(rootReducer)
export default store
// let undispatchar = store.subscribe(() => {
//     console.log(store.getState());
// });
// store.dispatch(new CartManage().AddToCart(3, 'MSI微星笔记本', 1, 30));
// store.dispatch(new CartManage().DelToCart(2));
// undispatchar();


