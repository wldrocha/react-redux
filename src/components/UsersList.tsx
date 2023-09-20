import '../assets/styles/components/Card.scss'
import '../assets/styles/Home.scss'

import { useGetAllUsersQuery } from '../services/UserApi'
import { CreditCard } from './CreditCard'

const UserList = () => {
  const { data: users } = useGetAllUsersQuery()

  return (
    <section className="wrapper wrapper--slide">
      {users?.map((item) => (
        <CreditCard key={item.id} {...item} />
      ))}
    </section>
  )
}

export default UserList
