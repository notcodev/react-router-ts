import type React from 'react'

import { useInsertionEffect, useRef } from 'react'

export const useLatest = <T>(value: T): React.MutableRefObject<T> => {
  const ref = useRef(value)

  useInsertionEffect(() => {
    ref.current = value
  }, [value])

  return ref
}
