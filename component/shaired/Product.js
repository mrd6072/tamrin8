import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';


//Functions
import {shorten ,quantity ,isInCart } from '../../helper/function';

// //Icons
import trashIcon from '../../assets/icons/trash.svg'

//Styles
import styles from './Products.module.css';
//reducers
import { additem , removeitem , increase , decrease } from '../../redux/cart/cartAction';

const Product = ({productData}) => {
    const dispatch = useDispatch();
    const state = useSelector(state => state.cartState)
    return (
        <div className={styles.container}>
            <div>
                <img className={styles.image} src={productData.image} alt="product"/>
                <h3 className={styles.textContainer}>{shorten(productData.title)}</h3>
                <p className={styles.price}>{`${productData.price} $`}</p>
            </div>
            <div className={styles.linkContainer}>
                <Link to={`/products/${productData.id}`}>Detalis</Link>
            </div>
            <div>
            {quantity(state, productData.id) === 1 && <button className={styles.smallButton} onClick={() => dispatch(removeitem(productData))}><img src={trashIcon} alt="trash" /></button>}
                    {quantity(state, productData.id) > 1 && <button className={styles.smallButton} onClick={() => dispatch(decrease(productData))}>-</button>}
                    {quantity(state, productData.id) > 0 && <span className={styles.counter}>{quantity(state, productData.id)}</span>}
                {
                    isInCart (state , productData.id) ? 
                    <button onClick={() => dispatch(increase(productData))} >+</button>:
                    <button onClick={() => dispatch(additem(productData))}>Add to cart</button>
                }
            </div>
        </div>   
    );
};

export default Product;