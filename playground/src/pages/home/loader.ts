import { RouterContext } from '../../router-context'
import { TSLoaderFunctionArgs } from 'react-router-tsx/data'

export const loader = ({ context }: TSLoaderFunctionArgs<RouterContext, any>) => {
  console.log('Home loader called...')
  console.log('Custom context value:', context)
  return context
}
