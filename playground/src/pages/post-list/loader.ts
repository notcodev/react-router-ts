import { posts } from '../../posts'
import { delay } from '../../utils'

export const loader = async () => {
  console.log('Started post list loader...')
  await delay(500)
  return posts
}
