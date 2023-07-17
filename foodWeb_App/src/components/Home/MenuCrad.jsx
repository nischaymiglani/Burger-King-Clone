import React from "react";
import "../../styles/menu.scss";
import { motion } from "framer-motion";

const MenuCrad = ({ itemNum, burgerSrc, title, price, handler, delay = 0 }) => {
  const options = {
    initial: { x: "-100%", opacity: 0 },
    whileInView: { x: 0, opacity: 1 },
    transition: { delay },
  };
  return (
    <motion.div className="menucard" {...options}>
      <div>item {itemNum}</div>
      <main>
        <img src={burgerSrc} alt={itemNum} />
        <h5>₹{price}</h5>

        <p>{title}</p>

        <button onClick={() => handler(itemNum)}>Buy Now</button>
      </main>
    </motion.div>
  );
};

export default MenuCrad;
