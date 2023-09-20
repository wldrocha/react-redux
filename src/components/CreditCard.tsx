import { Fragment, useState } from 'react'
import '../assets/styles/components/CreditCard.scss'
import logo from '../assets/static/logo.png'
import card_chip from '../assets/static/card_chip.png'
import Formuser from '../components/FormUser'

import { useDeleteUserMutation } from '../services'
import FormUser from '../components/FormUser'

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
  
  const [rotate, setrotate] = useState(false)
  const [activateForm, setActivateForm] = useState(false)
  const [deleteUser] = useDeleteUserMutation()

  const setDelete = () => {
    deleteUser({ userId: id })
  }

  const background = () => `bg-${bg ? bgColor[bg] : bgColor.default}`

  return (
    <div className={`credit-card ${rotate ? 'active' : ''}`}>
      <div className={['front', background()].join(' ')} onClick={() => setrotate(!rotate)}>
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
        <div className={['back', background(bg)].join(' ')} onClick={() => setrotate(!rotate)}>
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
      {id && !rotate && (
        <Fragment>
          <div className={`container ${rotate ? 'hide-btn' : ''}`}>
            <button className="button" onClick={() => setActivateForm(!activateForm)}>
              <i className="fas fa-pencil-alt"></i>
            </button>
            <button className="button btn-danger" onClick={setDelete}>
              <i className="fas fa-times"></i>
            </button>
          </div>
          {activateForm && !rotate && (
            <Fragment>
              <FormUser activateForm={activateForm} userId={id} />
            </Fragment>
          )}
        </Fragment>
      )}
    </div>
  )
}
