import React, { useEffect } from 'react'

const useDB = (nameDB, homeData, setData) => {
  useEffect(() => {
    if (!localStorage.getItem(nameDB)) return
    const data = JSON.parse(localStorage.getItem(nameDB))
    setData(data)
  }, [])

  useEffect(() => {
    if (!homeData) return
    const data = JSON.stringify(homeData)
    localStorage.setItem(nameDB, data)
  }, [homeData])
}

export default useDB