import React from 'react'
import "../../styles/Founder.scss"
import { motion } from "framer-motion";

const Founder = () => {
    const options = {
        initial: { x: "-100%", opacity: 0 },
        whileInView: { x: 0, opacity: 1 },
      };
  return (
    <section className='founder'>
    <motion.div {...options}>
    <p>PHOTO</p>   
    </motion.div>   
    </section>
  )
}

export default Founder