import React from 'react'


const ConfirmOrder = () => {
  return (
    <main className='confirmOrder'>
        <h1>
            Confirm Order
        </h1>
        <form>
            <div>
                <label>Cash On Delivery</label>
                <input type = 'radio' name='payment' />
            </div>
            <div>
                <label>Online</label>
                <input type = 'radio' name='payment' />
            </div>
            <button type ='submit'>Place Order</button>
        </form>
    </main>
  )
}

export default ConfirmOrder