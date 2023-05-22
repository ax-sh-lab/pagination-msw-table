
import axios from 'axios'
import {
  useQuery,
} from '@tanstack/react-query'
import React from 'react'
import {
  PaginationState,
} from '@tanstack/react-table'

function fetchData({}:PaginationState){
  return axios.get('/posts') 
}



export default function Home() {
  const [{ pageIndex, pageSize }, setPagination] =
    React.useState<PaginationState>({
      pageIndex: 0,
      pageSize: 10,
    })

  const fetchDataOptions = {
    pageIndex,
    pageSize,
  }

  const dataQuery = useQuery(
    ['data', fetchDataOptions],
    () => fetchData(fetchDataOptions),
    { keepPreviousData: true }
  )

  const defaultData = React.useMemo(() => [], [])

  const pagination = React.useMemo(
    () => ({
      pageIndex,
      pageSize,
    }),
    [pageIndex, pageSize]
  )
 

  return (
    <div>
     
    </div>
  )
}
