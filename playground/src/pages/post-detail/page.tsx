import { useLoaderData } from 'react-router'

import { loader } from './loader'

export const PostDetailPage = () => {
  const post = useLoaderData<typeof loader>()

  return (
    <div>
      <h1>Post Detail</h1>
      <p>{post.content}</p>
    </div>
  )
}
