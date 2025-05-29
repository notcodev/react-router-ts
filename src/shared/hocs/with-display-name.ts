import type { ComponentType } from 'react'

export const withDisplayName = <T extends ComponentType<any>>(name: string, component: T): T => {
  component.displayName = name
  return component
}
