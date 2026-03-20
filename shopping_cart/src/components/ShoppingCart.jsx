import React from 'react'
import { addToCart, removeFromCart, clearCart } from '../features/shoppingSlice/index'
import { useDispatch, useSelector } from 'react-redux'

const ShoppingCart = () => {

    const dispatch = useDispatch()
    const products = useSelector((state) => state.shopping.products)
    const cart = useSelector((state) => state.shopping.cart)
    const totalPrice = cart.reduce((total, item) => total + item.price, 0)

    return (
        <div className='w-full h-screen flex overflow-hidden justify-center'>
            <div className='w-full h-full my-2 mx-auto p-5 bg-black rounded-xl text-white overflow-auto'>
                <div>
                    <h1 className='text-center text-xl font-bold  bg-gray-700 p-3 '>🛒 Shopping Cart</h1>
                </div>

                {/* product section */}
                <div className='my-5'>
                    <h2>🛍Products</h2>
                    <div className='flex gap-5'>
                        {products.map((item) => (
                            <div key={item.id}>
                                <div className='bg-blue-600 m-3 flex justify-between w-50 rounded p-2'>
                                    <span>{item.name}</span>
                                    <span>{item.price}</span>
                                </div>
                                <button onClick={() => dispatch(addToCart(item))} className='bg-green-500 rounded w-50 m-3 cursor-pointer'>Add to cart</button>
                            </div>
                        ))}
                    </div>
                    <hr />
                    {/* cart section */}
                    <div>
                        <h2>🛒 Your Cart</h2>
                        {cart.length==0?(
                            <p>No items</p>
                        ):(
                            <div>
                                {cart.map((i)=>(
                                   <div key={i.id} className='flex justify-center gap-5 bg-orange-400 w-1/5 m-2'>
                                    <span>Name: {i.name}</span>
                                    <span>Price: {i.price}</span>
                                    <button className='bg-red-500' onClick={()=> dispatch(removeFromCart(i.id))}>Remove</button>
                                   </div>
                                ))}
                            </div>
                        )}
                    </div>
                    <hr />
                    <div>
                        <p>Total items:</p>{cart.length}
                        <p>Total price:</p>{totalPrice}
                        <br />
                        <button className='bg-red-500' onClick={() => dispatch(clearCart())}>clear cart</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShoppingCart
