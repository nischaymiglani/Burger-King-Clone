import React from "react";
import { motion } from "framer-motion";
import burger2 from '../../assets/burger2.png'
// import "../../styles/contact.scss"

const Contact = () => {
  const options = {
    initial: { x: "-100vw", opacity: 0 },
    animate: { x: 0, opacity: 1 },
  };
  return (
    <section className="contact">
      <motion.form {...options}>
        <h2>Contact US</h2>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="email" />
        <textarea placeholder="Message...." cols="30" rows="10"></textarea>
        <button type="submit">Send</button>
      </motion.form>
      <motion.div className="contactformborder"   initial= {{ x: "100vw", opacity: 0 }}
    animate ={{ x: 0, opacity: 1 }}>
        <motion.div initial= {{x:"-50%", y: "-100vw", opacity: 0 }}
    animate ={{x:"50%", y: "-50%", opacity: 1}} transition ={{delay:0.8}}>
          <img src={burger2} alt='Burger' />
        </motion.div>

      </motion.div>
    </section>
  );
};

export default Contact;
