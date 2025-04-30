import { data, LoaderFunctionArgs } from 'react-router'

import { posts } from '../../posts'
import { delay } from '../../utils'

export const loader = async ({ params }: LoaderFunctionArgs) => {
  await delay(500)
  const id = Number(params.id)
  const post = posts.find((post) => post.id === id)

  if (!post) {
    throw data({ code: 'not found' })
  }

  return post
}
