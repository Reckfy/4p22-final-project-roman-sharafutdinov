import Card from "../components/Card";

function Home({arrayCard, searchValue, setSearchValue, onChangeSearch, onAddToCart, cartItems}) {
    return(
        <div className="catalog">
            <div className="catalog__h-search">
                <h1>{searchValue ? `Поиск по запросу: "${searchValue}"` : 'Все товары'}</h1>
                <div className="search-form">
                    <img width={20} src="./img/search.png" alt="search"/>
                    {searchValue && <img className="search-form__clear" onClick={() => setSearchValue('')} width={12} height={12} src="./img/cross.png" alt="remove search" />}
                    <input onChange={onChangeSearch} placeholder="Поиск" value={searchValue}></input>
                </div>
            </div>
            <div  className="catalog__cards">
                {arrayCard.filter(item => item.title.toLowerCase().includes(searchValue)).map((obj,index) => (
                    <Card
                        key={index}
                        id={index + 1}
                        title={obj.title} 
                        price={obj.price}
                        imgUrl={obj.imgUrl}
                        onPlus={(obj) => onAddToCart(obj)}
                        added={cartItems.some(item => item.title === obj.title)}
                        {...obj}
                    />
                ))}
            </div>
        </div>
    )
};

export default Home;