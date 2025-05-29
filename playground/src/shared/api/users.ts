import { delay } from '../utils'

export const getUser = async () => {
  await delay(300)
  return Math.random() >= 0.5 ? { id: '1', firstName: 'Ivan', lastName: 'Ivanov' } : null
}
