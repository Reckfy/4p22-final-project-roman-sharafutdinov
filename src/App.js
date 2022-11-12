import React from "react";
import Card from "./components/Card";
import Header from "./components/Header";
import OverlayCart from "./components/OverlayCart";

const arrayCard=[

    {title: 'Victus By HP 16-D1023nia I5-12500H', 
    price: 74599, 
    imgUrl:"/img/card/HP-16-e0427nw-Victus.jpg"
    },

    {title: 'AMD Processor Ryzen 7 5800X3D', 
    price: 37299, 
    imgUrl:"/img/card/AMD-Ryzen-7-5800X3D.jpg"
    },

    {title: 'PC Ryzen 7 5800X3D+ RTX 3070 8GB', 
    price: 142299, 
    imgUrl:"/img/card/thermalatake-divider.jpg"
    },

    {title: 'AVerMedia DUALCAM PW313D', 
    price: 11399, 
    imgUrl:"/img/card/PW313D-Avermedia-dualcam.jpg"
    },

    {title: 'Asus AX5700 Gigabit Router RT-AX86U', 
    price: 21299, 
    imgUrl:"/img/card/Asus-Gigabit-Router-RT-AX86S.jpeg"
    },

    {title: 'Gigabyte GAMING OC RTX 4090 24 GB', 
    price: 229499, 
    imgUrl:"/img/card/GeForce-RTX174-4090-GAMING-OC-24G.jpg"
    },

    {title: 'HPE Aruba 1830 Gigabit Switch 48-Port JL814A', 
    price: 35799, 
    imgUrl:"/img/card/JL814A-HPE-aruba.jpg"
    },

    {title: 'Samsung 990 Pro SSD 1TB', 
    price: 16999, 
    imgUrl:"/img/card/Samsung-990PRO.jpg"
    },

]

function App() {

    const onRemoveItem = (title) => {
        setCartItems((prev) => prev.filter(obj => obj.title !== title))
    } 

    const [cartOpen, setCartOpen] = React.useState(false);

    const [cartItems, setCartItems] = React.useState([
        
    ]);

    const onAddToCart = (obj) => {
        if (cartItems.find((item) => item.title === obj.title)) {
            setCartItems(prev => prev.filter(item => item.title !== obj.title));
        } else {
            setCartItems(prev => [...prev, obj])
        }
        
    }

    return (
        <div className="App">
            <div className='content'>
                {cartOpen ? <OverlayCart arrayCard={cartItems} onCloseCart={() => setCartOpen(false)} onRemove={onRemoveItem} /> : null}
                <Header onClickCart={() => setCartOpen(true)}/>
                <div className="catalog">
                    <h1>Все товары</h1>
                    <div className="catalog__cards">
                        {arrayCard.map((obj) => (
                            <Card
                                key={obj.title}
                                title={obj.title} 
                                price={obj.price}
                                imgUrl={obj.imgUrl}
                                onPlus={(obj) => onAddToCart(obj)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
