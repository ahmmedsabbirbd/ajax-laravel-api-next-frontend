import SingleUser from '@/components/SingleUser/SingleUser'
import useSWR from 'swr'

const  Page = () => {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error } = useSWR('https://apiv1.mamungroup.net/api/students', fetcher)

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div> 

  return (
    <div>
      {
        data.data.map(user=> <SingleUser key={user.id} user={user} />)
      }
    </div>
  )
}

export default Page;