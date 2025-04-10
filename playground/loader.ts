const delay = (ms: number) => {
  return new Promise((res) => setTimeout(res, ms))
}

export const loader = async () => {
  await delay(500)
  console.log('(@) Data loaded')
  return { a: 1, b: 2, c: 3 }
}
