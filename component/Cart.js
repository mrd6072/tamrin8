import React from 'react';


//Context
import { shorten } from '../helper/function';

//Icons
import trashIcon from '../assets/icons/trash.svg';

//redux
import {useDispatch} from 'react-redux'
import {decrease , removeitem , increase} from '../redux/cart/cartAction'
const Cart = (props) => {

    const dispatch = useDispatch();
    const {image, price , title , quantity} = props.data;
    return ( 
        <div>
            <div> 
                <img src={image} alt="product"/>
                <div>
                    <p>{shorten(title)}</p>
                    <p><span>{price}$</span></p>
                </div>
                <div>
                    <p>{quantity}</p>
                </div>
            </div>
            {

                quantity > 1 ?
                <button onClick={() => dispatch(decrease(props.data))}>-</button>
                :
                <button onClick={() => dispatch(removeitem(props.data))}><img src={trashIcon} alt="product"/></button>
            }
            <button onClick={() => dispatch(increase(props.data))}>+</button>
        </div>

    );

};

export default Cart;