import React, { useEffect, useState, createContext, useMemo } from 'react'
import Grid from '@mui/material/Grid'
import Filter from './filters/Filter'
import UsersData from './users/UsersData'
import { useSelector, useDispatch } from 'react-redux'
import { getUsers ,filterUser} from '../../redux/user/actions'
import { userSelector } from '../../redux/user/selector'


type Props = {}
export const UsersContext = createContext<any>([])
const UsersViewWrapper = (props: Props) => {

  const [filter, setFilter] = useState({
    country: '',
  })
  const { country } = filter
  let dispatch = useDispatch()
  useEffect(() => {
    dispatch(getUsers())
  }, [])

  const { user } = useSelector(userSelector)
  const handleChangeData = (data:object) => {
    console.log({data})
    return setFilter({
      ...filter,
      ...data
    })
  }

  const handleFilterData = async () => {
    return await dispatch(filterUser(country))
  }

  const handleReset = async () => {
     setFilter({
      country: '',
  
    })
    return await dispatch(filterUser(''))
  }
  let value = useMemo(() => [
    handleChangeData,handleFilterData,handleReset,filter]
    , [handleChangeData,handleFilterData,handleReset,filter])
  return (
    <UsersContext.Provider value={value}>
      <Grid container spacing={4} mt='2em'>
        <Grid item xs={12}>
          <Filter />
        </Grid>
        <Grid item xs={11}>
          {user?.map((item: any) => (
            <UsersData key={item._id} data={item} />
          ))}
        </Grid>
      </Grid>
    </UsersContext.Provider>
  )
}

export default UsersViewWrapper