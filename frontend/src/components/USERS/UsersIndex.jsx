import {getUsers, fetchUsers} from '../../store/users'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import "./UsersIndex.css"
import Loader from '../LOADER/Loader'
const UsersIndex = () => {

  const dispatch = useDispatch()
  const users = useSelector(getUsers)
  // const [loaded, setLoaded] = useState(false)

  useEffect(() => {

    dispatch(fetchUsers())

  }, [dispatch])


  return (
    <ul>
      {users.map((user) => <li id={user.id}>{user}</li>)}
    </ul>
  )

}

export default UsersIndex