import React from 'react'

import UsersList from '../components/UsersList'

const Users = () => {
  const USERS = [
    {
      id: 'u1',
      name: 'Alex Galev',
      image:
      'https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      places: '2',
    },
    {
      id: 'u2',
      name: 'Evelynn',
      image:
        'https://images.pexels.com/photos/4703534/pexels-photo-4703534.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      places: '1',
    },
  ]
  return <UsersList items={USERS} />
}

export default Users
