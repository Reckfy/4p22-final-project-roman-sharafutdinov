import React from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import {BrowserRouter as Router} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import OverlayCart from "./components/OverlayCart";
import Home from "./pages/Home";
import CartPage from "./pages/CartPage";
import Registration from "./pages/Registration";
import Login from "./pages/Login";

function App() {

    const [cartOpen, setCartOpen] = React.useState(false);
    const [searchValue, setSearchValue] = React.useState('');
    const [cartItems, setCartItems] = React.useState([]);
    const [arrayCard, setArrayCard] = React.useState([]);
    

    React.useEffect(() => {
        async function fetchData() {
            const itemsResponse = await axios.get('https://636fe9324a801721e0fd5d39.mockapi.io/items');
            const cartResponse = await axios.get('https://636fe9324a801721e0fd5d39.mockapi.io/cart');
            setArrayCard(itemsResponse.data)
            setCartItems(cartResponse.data)
        }
        fetchData()
    }, []);

    const onAddToCart = async (obj) => {
        console.log(obj)
            if (cartItems.find((item) => item.title === obj.title)) {
                axios.delete(`https://636fe9324a801721e0fd5d39.mockapi.io/cart/${obj.id}`);
                setCartItems((prev) => prev.filter(item => Number(item.id) !== Number(obj.id)))
            } else {
                const { data } = await axios.post('https://636fe9324a801721e0fd5d39.mockapi.io/cart', obj);
                setCartItems(prev => [...prev, data]);
            }
    }

    const onRemoveItem = (id) => {
        axios.delete(`https://636fe9324a801721e0fd5d39.mockapi.io/cart/${id}`);
        setCartItems((prev) => prev.filter(item => Number(item.id) !== Number(id)))
        console.log(id)
    } 

    const onChangeSearch = (event) => {
        setSearchValue(event.target.value)
    }

    return (
        <div className="App">
            <div className='content'>
                {cartOpen ? <OverlayCart arrayCard={cartItems} onCloseCart={() => setCartOpen(false)} onRemove={onRemoveItem} /> : null}
                
                <Router basename="/main/4p22-final-project-roman-sharafutdinov">
                    <Routes>
                        <Route path="/" element={
                            <div>
                                <Header onClickCart={() => setCartOpen(true)}/>
                                <Home 
                                    arrayCard={arrayCard} 
                                    searchValue={searchValue} 
                                    setSearchValue={setSearchValue} 
                                    onChangeSearch={onChangeSearch} 
                                    onAddToCart={onAddToCart}
                                    cartItems={cartItems}
                                />
                            </div>
                        }/>
                        <Route path="/cartpage" element={
                            <div>
                                <Header onClickCart={() => setCartOpen(true)}/>
                                <CartPage arrayCard={cartItems}/>
                            </div>
                        }/>
                        <Route path="/registration" element={
                            <Registration />
                        }/>
                        <Route path="/login" element={
                            <Login />
                        }/>
                    </Routes>
                </Router>
            </div>
            <Footer />
        </div>
    );
}

export default App;
