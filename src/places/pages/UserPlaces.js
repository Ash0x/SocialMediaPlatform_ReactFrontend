import React from 'react'
import { useParams } from 'react-router-dom'

import PlaceList from '../components/PlaceList'

const DUMMY_DATA = [
  {
    id: '1',
    title: 'Eiffel Tower',
    description: 'One of the most emblematic structures in Europe.',
    imageUrl: 'https://cdn.theculturetrip.com/wp-content/uploads/2018/05/eiffel-tower-3349075_1280-1.jpg',
    address:'Champ de Mars, 5 Avenue Anatole France, 75007 Paris, France',
    location: {
      lat: 48.8525155,
      lng: 2.3034894
    },
    creator: 'u1'
  },
  {
    id: '2',
    title: 'Arc de Triomphe',
    description: 'Iconic triumphal arch built to commemorate Napoleons victories, with an observation deck.',
    imageUrl: 'https://cdn.britannica.com/66/80466-050-2E125F5C/Arc-de-Triomphe-Paris-France.jpg',
    address:'Place Charles de Gaulle, 75008 Paris, France',
    location: {
      lat: 48.8737952,
      lng: 2.2928388
    },
    creator: 'u1'
  },
  {
    id: '3',
    title: 'Louvre Museum',
    description: 'Former historic palace housing huge art collection, from Roman sculptures to da Vincis Mona Lisa.',
    imageUrl: 'https://s.france24.com/media/display/ffb00d5c-5bcb-11ea-9b68-005056a98db9/w:1280/p:16x9/5ebdce7c4db36aa769d6edb94f5b288f18ac266c.webp',
    address:'Rue de Rivoli, 75001 Paris, France',
    location: {
      lat: 48.8606146,
      lng: 2.3354553
    },
    creator: 'u2'
  },
]

const UserPlaces = (props) => {


  const userID = useParams().userID
  const LoadedPlaces = DUMMY_DATA.filter(place => place.creator === userID)

  return <PlaceList items={LoadedPlaces} />
}

export default UserPlaces
