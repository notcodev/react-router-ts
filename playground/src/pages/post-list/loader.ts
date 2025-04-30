import { posts } from '../../posts'
import { delay } from '../../utils'

export const loader = async () => {
  await delay(500)
  return posts
}
