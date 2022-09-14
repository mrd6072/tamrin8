import React  from 'react';
import { Link } from 'react-router-dom';

//Redux
import { useSelector } from 'react-redux';

//Icons
import shopIcon from '../assets/icons/shop.svg'
const Navbar = () => {

    const state = useSelector(state => state.cartState);
    
    return (
        <div>
            <div>
                <Link to="/products" >Products</Link>
            </div>
            <div>
                <Link to="/carts"><img src={shopIcon} alt="product"/></Link>
                <p><span>{state.itemsCounter}</span></p>
            </div>
        </div>
    );
};

export default Navbar;