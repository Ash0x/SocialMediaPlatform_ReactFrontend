import React from 'react'

import UsersList from '../components/UsersList'

const Users = () => {
  const USERS = [
    {
      id: 'u1',
      name: 'Alex Galev',
      image:
        'https://nebulartribe.com/wp-content/uploads/2021/01/Macro2-scaled.jpg',
      places: '2',
    },
    {
      id: 'u2',
      name: 'Evelynn',
      image:
        'https://nebulartribe.com/wp-content/uploads/2021/01/Flowaz-scaled.jpg',
      places: '1',
    },
  ]
  return <UsersList items={USERS} />
}

export default Users
