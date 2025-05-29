import { data } from 'react-router'

import { getPost } from '../../shared/api/posts'
import { LoaderFunctionArgs } from 'react-router'

export const loader = async ({ params }: LoaderFunctionArgs) => {
  console.log('Started post detail loader...')
  const id = Number(params.id)

  const post = await getPost(id)

  if (!post) {
    throw data({ code: 'not found' })
  }

  return post
}
