import React from 'react'

import {AiFillInstagram,AiFillYoutube,AiFillTwitterSquare} from "react-icons/ai"
const Footer = () => {
  return (
    <footer>
        <div>
            <h2>
                BURGER KING
            </h2>
            <p>delivering you the best </p>
            <br />
            <em>We Give Attention To Geniune Feedback</em>
            <strong>All right reserved</strong>
        </div>
        <aside>
            <h4>Follow Us</h4>
            <a href='"http://youtube.com'><AiFillYoutube /></a>
            <a href='"http://instagram.com'><AiFillInstagram /></a>
            <a href='"http://twitter.com'><AiFillTwitterSquare /></a>
        </aside>
    </footer>
  )
}

export default Footer