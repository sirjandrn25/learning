import React, { useEffect, useState } from 'react'

const useHttp = () => {
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const sendHttpRequest = async (config) => {
    setIsLoading(true)
    try {
      const response = await fetch(config.url, {
        method: config.method ? config.method : 'GET',
        headers: config.headers ? config.headers : {},
        body: config.body ? JSON.stringify(config.body) : null,
      })
      if (!response.ok) {
        throw new Error('something went to wrong')
      }
      const data = await response.json()
      setIsLoading(false)
      return data
    } catch (error) {
      setError(String(error))
      setIsLoading(false)
      return false
    }
  }

  return {
    sendHttpRequest,
    error,
    isLoading,
  }
}

export default useHttp
