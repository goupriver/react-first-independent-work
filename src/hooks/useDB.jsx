import { useEffect } from 'react'

const useDB = (homeData, setData) => {
  useEffect(() => {
    if (!localStorage.getItem('saveData')) return
    const data = JSON.parse(localStorage.getItem('saveData'))
    setData(data)
  }, [])

  useEffect(() => {
    if (!homeData) return
    const data = JSON.stringify(homeData)
    localStorage.setItem('saveData', data)
  }, [homeData])
}

export default useDB