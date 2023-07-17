import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import burger from "../../assets/burger1.png";

const Profile = () => {
  const options = {
    initial: { y: "-100%", opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };
  return (
    <section className="profile">
      <main>
        <motion.img src={burger} alt="photo" {...options} />
        <motion.h5 {...options} transition={{ delay: 0.3 }}>
          Sanyam
        </motion.h5>
        <motion.div {...options} transition={{ delay: 0.3 }}>
          <Link to="/admin/dashboard">Dashboard</Link>
        </motion.div>
        <motion.div
          initial={{ x: "-100vw", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <Link to="/myorders">My Orders</Link>
          </motion.div>
          <motion.button>LOGOUT</motion.button>
     
      </main>
    </section>
  );
};

export default Profile;
