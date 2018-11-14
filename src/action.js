import {ADD_TO_CART,UPD_TO_CART,DEL_TO_CART,SEL_TO_CART} from './config'

class CartManage{}

CartManage.prototype={
    AddToCart(id,product,number,money){
        return{
            type:ADD_TO_CART,
            payload:{
                id,
                product,
                number,
                money
            }
        }
    },
    DelToCart(id){
        return{
            type:DEL_TO_CART,
            payload:{
                id
            }
        }
    }
}
export default CartManage;