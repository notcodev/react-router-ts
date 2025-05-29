import { delay } from '../../shared/utils'

export const loader = async () => {
  console.log('Loader started...')
  await delay(500)
  console.log('Loader ended...')
}
