import '../assets/styles/containers/App.scss'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Header } from '../components/Header'
import Home from '../pages/Home'
import UserList from '../components/UsersList'
import { store } from '../store/store'

export const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/users' element={<UserList />} />
        </Routes>
      </Router>
    </Provider>
  )
}
