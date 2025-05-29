import { LoaderFunctionArgs } from 'react-router'

export const loader = ({ context }: LoaderFunctionArgs) => {
  console.log('Home loader called...')
  console.log('Current loader context:', context)
  return context
}
