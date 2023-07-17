import React from 'react'
import MenuCrad from './MenuCrad'
import burger1 from '../../assets/burger1.png'
import burger2 from '../../assets/burger2.png'
import burger3 from '../../assets/burger3.png'
import '../../styles/menu.scss'

const Menu = () => {

    const addToCartHandler = (itemNum) =>{

    }
  return <section id = "menu">
    <h1>MENU</h1>
    <div>
        <MenuCrad itemNum={1} burgerSrc={burger1} price={169} title="Cheese Burger" handler={addToCartHandler} delay={0.1} />
        <MenuCrad itemNum={2} burgerSrc={burger2} price={179} title="Veg Burger" handler={addToCartHandler} delay={0.5} />
        <MenuCrad itemNum={3} burgerSrc={burger3} price={189} title="Makhani Burger" handler={addToCartHandler} delay={0.8} />
    </div>
  </section>
}

export default Menu