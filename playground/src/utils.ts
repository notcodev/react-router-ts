export const delay = (ms: number) => {
  return new Promise<void>((res) => {
    console.log('Delay started')
    setTimeout(() => {
      console.log('Delay resolved')
      res()
    }, ms)
  })
}
