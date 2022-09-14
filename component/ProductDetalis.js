import React from 'react';

import { Link } from 'react-router-dom';
//Redux
import { useSelector } from 'react-redux';

const ProductDetalis = (props) => {

    console.log(props)
    const id = props.match.params.id;
    const data = useSelector(state => state.productsState.products)
    const product = data[id - 1];
    const {image , title , price , description , category} = product;

    return (
        <div>
            <div>
                <img src={image} alt="product"/>
                <div>
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <p><span>Category:</span>{category}</p>
                    <div>
                        <p>{price} $</p>
                        <Link to="/products">Back to shop</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetalis;