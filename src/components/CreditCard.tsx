import { useState } from 'react'
import '../assets/styles/components/CreditCard.scss'
import logo from '../assets/static/logo.png'
import card_chip from '../assets/static/card_chip.png'

import { MdEdit, MdDelete } from 'react-icons/md'

import { useDeleteUserMutation } from '../services'
import { FormUser } from './FormUser'

const bgColor = {
  cyan: 'cyan-green',
  magenta: 'magent-cyan',
  default: 'blue-purple',
}

interface geo {
  lat: string
  lng: string
}
interface CreditCardProps {
  id: string
  name: string
  username: string
  email: string
  address: {
    city: string
    street: string
    suite: string
    zipCode: string
    geo: geo
  }
  phone: string
  website: string
  company: {
    name: string
  }
  bg: 'cyan' | 'magenta' | 'default'
}

export const CreditCard = ({ id, name, phone, company, username, email, address, website, bg }: CreditCardProps) => {
  const [rotate, setRotate] = useState(false)
  const [activateForm, setActivateForm] = useState(false)
  const [deleteUser] = useDeleteUserMutation()

  const setDelete = () => {
    deleteUser({ userId: id })
  }

  const handleRotate = () => {
    id && setRotate(!rotate)
  }

  const background = () => `bg-${bg ? bgColor[bg] : bgColor.default}`

  return (
    <div className={`credit-card ${rotate ? 'active' : ''} ${id ? 'pointer' : ''} `}>
      <div className={['front', background()].join(' ')} onClick={() => handleRotate()}>
        <figure className="brand">
          {company && company.name.length > 0 ? <p>{company.name}</p> : <img src={logo} alt="" />}
        </figure>
        <img src={card_chip} className="chip" alt="" />
        <div className="info">
          <div className="info__group">
            <p className="label-info__group">Number</p>
            <p className="text-info__group">{phone || '#### #### #### ####'}</p>
          </div>
          <div className="info__bottom">
            <div className="info__group">
              <p className="label-info__group">Name</p>
              <p className="text-info__group">{(name && name) || 'Jhon Doe'}</p>
            </div>

            <div className="info__group">
              <p className="label-info__group">Exp</p>
              <p className="text-info__group">
                <span className="month">MM</span> /<span className="year">YY</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      {id && (
        <div className={['back', background()].join(' ')} onClick={() => handleRotate()}>
          <div className="info">
            <div className="info__group">
              <p className="label-info__group">User</p>
              <p className="text-info__group">{username || '#### #### #### ####'}</p>
            </div>
            <div className="info__bottom">
              <div className="info__group">
                <p className="label-info__group">E-mail</p>
                <p className="text-info__group">{(email && email) || 'Jhon Doe'}</p>
              </div>
            </div>
          </div>
          <p className="direction">{`City: ${address.city}`}</p>
          <a href="#" target="_blank" rel="noopener noreferrer">
            {website}
          </a>
        </div>
      )}
      {id && (
        <>
          <div className={`container container__button ${rotate ? 'hide-btn' : ''}`}>
            <button className="button" onClick={() => setActivateForm(!activateForm)}>
              <MdEdit />
            </button>
            <button className="button btn-danger" onClick={setDelete}>
              <MdDelete />
            </button>
          </div>
          {activateForm && !rotate && <FormUser userId={id} />}
        </>
      )}
    </div>
  )
}
