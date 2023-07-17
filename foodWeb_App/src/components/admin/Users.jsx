import React from 'react'

const Users = () => {
    const arr = [1,2,3,4]
  return (
    <section className='tableClass'>
        <main>
            <table>
                <thead>
                    <tr>
                        <th>User ID</th>
                        <th>Name</th>
                        <th>Photo</th>
                        <th>Role</th>
                        <th>Since</th>
                    </tr>
                </thead>
                <tbody>
                  {arr.map(i => (
                      <tr key={i}>
                      <td>gfc43</td>
                      <td>Abhi</td>
                      <td>
                        <img src='/' alt = 'user' />
                      </td>
                      <td>23</td>
                      <td>Admin</td>
                      <td>{"23-12-2023"}</td> 
                  </tr>
                  ))}
                </tbody>
            </table>
        </main>

    </section>
  )
}

export default Users