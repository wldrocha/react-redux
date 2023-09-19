import '../assets/styles/components/Card.scss'
import '../assets/styles/Home.scss'

import CreditCard from '../components/CreditCard'
import { useGetAllUsersQuery } from '../services/UserApi'

const UserList = () => {
  const { data: users, error, isLoading } = useGetAllUsersQuery()

  return (
    <section className='wrapper wrapper--slide'>
      {users?.map((item) => (
        <CreditCard key={item.id} {...item} />
      ))}
    </section>
  )
}

export default UserList
