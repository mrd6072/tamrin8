import React from 'react';
import { Link } from 'react-router-dom';


import {useSelector , useDispatch} from 'react-redux';
//Component
import Cart from './Cart';



//redux
import {clear , checkout} from '../redux/cart/cartAction'
const ShopCart = () => {

    const dispatch = useDispatch();
    const state = useSelector(state => state.cartState)
    return (
        <div>
            <div>
                {
                    state.selecteditems.map(item => <Cart key={item.id} data={item}/>)
                } 
            </div>
            <div>
                {
                    state.selecteditems > 0 ? <p></p> : <div>
                        <p><span>Total item</span> {state.itemsCounter}</p>
                        <p><span>Total payments</span> {state.total}</p>

                    <div>
                    <button onClick={() => dispatch(clear())}>Clear</button>
                    <button onClick={() => dispatch(checkout())}>CheckOut</button>
                    </div>

                    </div>
                }
                {
                    state.checkout && <div>
                        <h3> Checked succesfuly</h3>
                        <Link to="/products">By more</Link>
                    </div>
                }
                {
                    !state.checkout && state.itemscounter === 0 && <div>
                        <h3> Whant to by ?</h3>
                        <Link to="/products">Go Back Shop</Link>
                    </div>
                }
            </div>
        </div>
    );
};

export default ShopCart;