import { useLoaderData } from 'react-router-dom'

function Github() {
  const data = useLoaderData()
  return (
    <div className='text-center m-4 bg-yellow-300 text-white p-4 text-3xl'>Github Followers: {data.followers ? data.followers : "Data not found"}
    <img src={data.avatar_url ? data.avatar_url : "Data not found"} alt='avatar' className='rounded-full w-32 h-32 mx-auto mt-4' />
    </div>
  )
}

export default Github

export const githubInfo = async () => {
  const response = await fetch("https://api.github.com/users/hiteshChoudhary")
  return response.json()
}
