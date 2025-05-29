import { delay } from '../utils'

const posts = [
  { id: 1, name: 'Post 1', content: 'Content of Post 1' },
  { id: 2, name: 'Post 2', content: 'Content of Post 2' },
  { id: 3, name: 'Post 3', content: 'Content of Post 3' },
  { id: 4, name: 'Post 4', content: 'Content of Post 4' },
]

export const getListPosts = async () => {
  await delay(300)
  return posts
}

export const getPost = async (id: number) => {
  await delay(300)
  return posts.find((post) => post.id === id)
}
