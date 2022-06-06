import React, { useState, useCallback } from 'react'

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const sendHttpRequest = useCallback(async (config, applyData) => {
    setIsLoading(true)

    try {
      const response = await fetch(config.url, {
        method: config.method ? config.method : 'GET',
        headers: config.headers ? config.headers : {},
        body: config.body ? JSON.stringify(config.body) : null,
      })
      if (!response.ok) {
        throw new Error('something went wrong')
      }

      const data = await response.json()

      applyData(data)
    } catch (error) {
      setError(String(error))
    }
    setIsLoading(false)
  }, [])

  return {
    isLoading,
    error,
    sendHttpRequest,
  }
}

export default useHttp
