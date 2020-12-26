import {ADD_TO_CART,REMOVE_TO_CART} from '../../constants'


export const addToCart = (data)=>{
    console.log("Action",data);
  return {
      type: ADD_TO_CART,
      data:data
  }
};

export const removeToCart = (data)=>{
    console.log("Remove to cart Item",data)
  return {
      type: REMOVE_TO_CART,
      data:data
  }
};