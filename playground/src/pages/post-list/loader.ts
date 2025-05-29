import { getListPosts } from '../../shared/api/posts'

export const loader = async () => {
  console.log('Started post list loader...')
  return getListPosts()
}
