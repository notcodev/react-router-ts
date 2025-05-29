import { useLayoutEffect, useRef } from 'react'

export type EventCallable<T> = (value: T) => void
export type Store<T> = { get: () => T; set: (value: T) => void }

export function createStore<T>(initialValue: T): Store<T> {
  let value = initialValue

  return {
    get() {
      return value
    },
    set(updated: T) {
      value = updated
    },
  }
}

export type Gate<Props = {}> = React.ComponentType<Props> & {
  open: EventCallable<Props>
  close: EventCallable<Props>
  status: Store<boolean>
  state: Store<Props>
  set: EventCallable<Props>
}

export function useGate<Props>({ open, close, set }: Gate<Props>, props: Props = {} as any) {
  const propsRef = useRef<{ value: Props; count: number }>({
    value: null!,
    count: 0,
  })

  useLayoutEffect(() => {
    console.log('[DEBUG] Gates openned')
    open(propsRef.current.value)
    return () => close(propsRef.current.value)
  }, [open, close])

  if (!shallowCompare(propsRef.current.value, props)) {
    propsRef.current.value = props
    propsRef.current.count += 1
  }

  useLayoutEffect(() => {
    console.log('[DEBUG] Gates value updated:', propsRef.current.value)
    set(propsRef.current.value)
  }, [propsRef.current.count, set])
}

function shallowCompare(a: any, b: any) {
  if (a === b) return true
  if (typeof a === 'object' && a !== null && typeof b === 'object' && b !== null) {
    const aKeys = Object.keys(a)
    const bKeys = Object.keys(b)
    if (aKeys.length !== bKeys.length) return false
    for (let i = 0; i < aKeys.length; i++) {
      const key = aKeys[i]
      if (a[key] !== b[key]) return false
    }
    return true
  }
  return false
}

export function createGate<T>(options?: { defaultState?: T }) {
  const state = createStore<T>((options?.defaultState || {}) as T)
  const status = createStore(false)

  const open = () => status.set(true)
  const close = () => status.set(false)
  const set = (props: T) => state.set(props)

  function GateComponent(props: T) {
    useGate(GateComponent as any, props)
    return null
  }

  GateComponent.open = open
  GateComponent.close = close
  GateComponent.status = status
  GateComponent.state = state
  GateComponent.set = set

  return GateComponent
}
