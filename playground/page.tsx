import React from 'react'
import { useLoaderData } from 'react-router'

import { loader } from './loader'

export const Page = () => {
  const data = useLoaderData<typeof loader>()

  return (
    <div>
      {data.a}
      {data.b}
      {data.c}
    </div>
  )
}
