"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
} from "react";

import type { Product } from "@/types/product";


export interface CartItem {

  product: Product;

  quantity: number;

}


interface CartContextType {

  items: CartItem[];

  addToCart(product:Product):void;

  removeFromCart(id:string):void;

  increaseQuantity(id:string):void;

  decreaseQuantity(id:string):void;

  clearCart():void;

  total:number;

}



const CartContext =
createContext<CartContextType | undefined>(
  undefined
);



export function CartProvider({
  children,
}:{
  children:ReactNode;
}){


const [items,setItems] =
useState<CartItem[]>([]);



function addToCart(
 product:Product
){


const exists =
items.find(
 item =>
 item.product.id === product.id
);



if(exists){

setItems(
items.map(
item =>
item.product.id === product.id
?
{
...item,
quantity:item.quantity + 1
}
:
item
)
);


return;

}



setItems([
...items,
{
product,
quantity:1
}
]);


}



function removeFromCart(
id:string
){

setItems(
items.filter(
item =>
item.product.id !== id
)
);

}




function increaseQuantity(
id:string
){

setItems(
items.map(
item =>
item.product.id === id
?
{
...item,
quantity:item.quantity+1
}
:
item
)
);

}

function clearCart(){

  setItems([]);

}

function decreaseQuantity(
id:string
){

setItems(
items.map(
item =>
item.product.id === id &&
item.quantity > 1
?
{
...item,
quantity:item.quantity-1
}
:
item
)
);

}




const total =
items.reduce(
(sum,item)=>
sum +
(item.product.price * item.quantity),
0
);



return (

<CartContext.Provider

value={{

items,

addToCart,

removeFromCart,

increaseQuantity,

decreaseQuantity,

clearCart,

total,

}}

>

{children}

</CartContext.Provider>

);


}




export function useCart(){

const context =
useContext(CartContext);


if(!context){

throw new Error(
"useCart must be used inside CartProvider"
);

}


return context;

}
