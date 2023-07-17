import React from 'react'
import { Link } from 'react-router-dom'

const PaymentSuccess = () => {
  return (
  <section className='paymentsuccess'>
    <main>
        <h1>ORDER CONFIRMED</h1>
        <p>Order Placed Successfully</p>
        <Link to ='/myorders'>Check Status</Link>
    </main>

  </section>
  )
}

export default PaymentSuccess