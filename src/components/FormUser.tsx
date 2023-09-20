import { Fragment, useState } from 'react'
import '../assets/styles/components/FormUSer.scss'
import { useGetUserQuery, useUpdateUserMutation } from '../services'
// import { getUSerAction, updateUserAction } from '../redux/userDucks'

export const FormUser = ({ userId }) => {
  const [user, setUser] = useState({
    id: '',
    name: '',
    phone: '',
    company: '',
    username: '',
    email: '',
    address: {
      city: '',
    },
    website: '',
  })

  const { data: userData } = useGetUserQuery(userId)
  const [updateUser] = useUpdateUserMutation()

  const updateInfo = (e) => {
    e.preventDefault()
    updateUser(user)
  }

  const inputChangedHandler = (e) => {
    const { name, value } = e.target

    setUser((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  return (
    <form action="" className={`form-user active-form`}>
      <input
        type="text"
        className="input-form"
        name="name"
        placeholder="Name"
        // value={user && user.name}
        onChange={(event) => inputChangedHandler(event)}
      />
      <input
        type="text"
        className="input-form"
        name="phone"
        placeholder="Number phone"
        // value={user && user.phone}
        onChange={(event) => inputChangedHandler(event)}
      />
      <input
        type="text"
        className="input-form"
        name="company"
        placeholder="Company"
        // value={user && user.company}
        onChange={(event) => inputChangedHandler(event)}
      />
      <input
        type="text"
        className="input-form"
        name="username"
        placeholder="User name"
        // value={user && user.username}
        onChange={(event) => inputChangedHandler(event)}
      />
      <input
        type="text"
        className="input-form"
        name="email"
        placeholder="Email"
        // value={user && user.email}
        onChange={(event) => inputChangedHandler(event)}
      />
      <input
        type="text"
        className="input-form"
        name="address.city"
        placeholder="City"
        // value={user && user.address.city}
        onChange={(event) => inputChangedHandler(event)}
      />
      <input
        type="text"
        className="input-form"
        name="website"
        placeholder="website"
        // value={user && user.website}
        onChange={(event) => inputChangedHandler(event)}
      />
      <button className="button-form" onClick={updateInfo}>
        Update
      </button>
    </form>
  )
}
