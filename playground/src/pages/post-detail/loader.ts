import { data } from 'react-router'

import { posts } from '../../posts'
import { delay } from '../../utils'
import { TSLoaderFunctionArgs } from 'react-router-tsx/data'
import { RouterContext } from '../../router-context'

export const loader = async ({ params }: TSLoaderFunctionArgs<RouterContext, any>) => {
  console.log('Started post detail loader...')
  const id = Number(params.id)

  await delay(500)
  const post = posts.find((post) => post.id === id)

  if (!post) {
    throw data({ code: 'not found' })
  }

  return post
}
