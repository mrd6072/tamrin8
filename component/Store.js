import React , {useEffect} from 'react';
import {useSelector , useDispatch} from 'react-redux';

//Api
import { fetchproducts } from '../redux/products/productsAction';

//component
import Product from './shaired/Product';
import Loader from './shaired/Loader'

//style
import styles from './Store.module.css'
const Store = () => {

    const dispatch = useDispatch();
    const productsState = useSelector(state => state.productsState);

    useEffect(() => {
        if(!productsState.products.length) dispatch(fetchproducts())
    }, [])
    return (
        <div>
              <div className={styles.container} > 
               {
                productsState.loading ?
                <Loader />:
                productsState.error ?
                <p>somtime a werong sorry</p> :
                productsState.products.map(product => <Product
                    key={product.id}
                    productData={product}
                /> )
               }
            </div>
        </div>
    );
};

export default Store;