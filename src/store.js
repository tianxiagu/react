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


