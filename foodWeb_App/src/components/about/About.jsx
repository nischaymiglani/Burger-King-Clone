import React from 'react'
import {Link} from 'react-router-dom'
import {RiFindReplaceLine} from 'react-icons/ri'
const About = () => {
  return (
    <section className='about'>
        <main>
            <h1>About Us</h1>
            <article>
                <h4>Burger king</h4>
                <p>tasty burgers only</p>
                <p>Explore our menu. Click below to see the menu.</p>
                <Link to='/'>
                    <RiFindReplaceLine />
                </Link>
            </article>
            <div>
                <h2>Founder</h2>
                <article>
                    <div>
                        <img src='/' alt='user' />
                        <h3>Nischay</h3>
                    </div>
                    <p>Nischay</p>
                </article>
            </div>
        </main>
    </section>
  )
}

export default About