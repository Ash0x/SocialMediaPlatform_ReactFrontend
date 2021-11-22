import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useForm } from '../../shared/hooks/form-hook'
import Input from '../../shared/components/FormElements/Input'
import Button from '../../shared/components/FormElements/Button'
import Card from '../../shared/components/UIElements/Card'
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
} from '../../shared/util/validators'
import './PlaceForm.css'

const DUMMY_DATA = [
  {
    id: 'p1',
    title: 'Eiffel Tower',
    description: 'One of the most emblematic structures in Europe.',
    imageUrl:
      'https://cdn.theculturetrip.com/wp-content/uploads/2018/05/eiffel-tower-3349075_1280-1.jpg',
    address: 'Champ de Mars, 5 Avenue Anatole France, 75007 Paris, France',
    location: {
      lat: 48.8525155,
      lng: 2.3034894,
    },
    creator: 'u1',
  },
  {
    id: 'p2',
    title: 'Arc de Triomphe',
    description:
      'Iconic triumphal arch built to commemorate Napoleons victories, with an observation deck.',
    imageUrl:
      'https://cdn.britannica.com/66/80466-050-2E125F5C/Arc-de-Triomphe-Paris-France.jpg',
    address: 'Place Charles de Gaulle, 75008 Paris, France',
    location: {
      lat: 48.8737952,
      lng: 2.2928388,
    },
    creator: 'u1',
  },
  {
    id: 'p3',
    title: 'Louvre Museum',
    description:
      'Former historic palace housing huge art collection, from Roman sculptures to da Vincis Mona Lisa.',
    imageUrl:
      'https://s.france24.com/media/display/ffb00d5c-5bcb-11ea-9b68-005056a98db9/w:1280/p:16x9/5ebdce7c4db36aa769d6edb94f5b288f18ac266c.webp',
    address: 'Rue de Rivoli, 75001 Paris, France',
    location: {
      lat: 48.8606146,
      lng: 2.3354553,
    },
    creator: 'u2',
  },
]

const UpdatePlace = () => {
  const [isLoading, setIsLoading] = useState(true)
  const placeId = useParams().placeId

  const [formState, inputHandler, setFormData] = useForm(
    {
      title: {
        value: '',
        isValid: true,
      },
      description: {
        value: '',
        isValid: true,
      },
    },
    false
  )

  const identifiedPlace = DUMMY_DATA.find((p) => p.id === placeId)

  useEffect(() => {
    if (identifiedPlace) {
      setFormData(
        {
          title: {
            value: identifiedPlace.title,
            isValid: true,
          },
          description: {
            value: identifiedPlace.description,
            isValid: true,
          },
        },
        true
      )
    }

    setIsLoading(false)
  }, [setFormData, identifiedPlace])

  const placeUpdateSubmitHandler = (event) => {
    event.preventDefault()
    console.log(formState.inputs)
  }

  if (!identifiedPlace) {
    return (
      <div className='center'>
        <Card>
          <h2>Could not find place!</h2>
        </Card>
      </div>
    )
  }

  if (isLoading) {
    return (
      <div className='center'>
        <h2>Loading . . .</h2>
      </div>
    )
  }

  return (
    <form className='place-form' onSubmit={placeUpdateSubmitHandler}>
      <Input
        id='title'
        element='input'
        type='text'
        label='Title'
        validators={[VALIDATOR_REQUIRE()]}
        errorText='Please enter a valid title.'
        onInput={inputHandler}
        initialValue={formState.inputs.title.value}
        initialValid={formState.inputs.title.isValid}
      />
      <Input
        id='description'
        element='textarea'
        label='Description'
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText='Please enter a valid description(min. 5 characters).'
        onInput={inputHandler}
        initialValue={formState.inputs.description.value}
        initialValid={formState.inputs.description.isValid}
      />
      <Button type='submit' disabled={!formState.isValid}>
        UPDATE PLACE
      </Button>
    </form>
  )
}

export default UpdatePlace
