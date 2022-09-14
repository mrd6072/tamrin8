import './App.css';
import{ Switch , Route  , Redirect} from 'react-router-dom';
import { Provider } from 'react-redux'

import StoreRedux from './redux/Store';

//componet
import Store from './component/Store';
import Navbar from './component/Navbar';
import ShopCart from './component/ShopCart'
import ProductDetalis from './component/ProductDetalis';
function App() {
  return (  
    <Provider store={StoreRedux}>
      <Navbar/>
      <Switch>
        <Route path="/products/:id" component={ProductDetalis}/>
        <Route path="/carts" component={ShopCart} />
        <Route path="/products" component={Store}/>
        <Redirect to="/products"/>
      </Switch>
    </Provider>
  );
}

export default App;

