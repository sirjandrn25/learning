import React, { useState, useCallback, useEffect } from 'react'

const api = 'https://blog-api7991.herokuapp.com/blog-api/posts/'

const BackEndHandle = () => {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const fetchMovieHandle = useCallback(async () => {
    setLoading(true)
    try {
      const response = await fetch(api)

      if (!response.ok) {
        throw new Error('something went wrong')
      }
      const data = await response.json()

      setMovies(
        data.results.map((movie) => {
          return {
            id: movie.id,
            title: movie.title,
            movieCrawller: movie.description,
            release_date: movie.created_at,
          }
        })
      )
    } catch (error) {
      setError(String(error))
    }

    setLoading(false)
  }, [])
  useEffect(() => {
    fetchMovieHandle()
  }, [fetchMovieHandle])

  let content = <p>movies not found</p>

  if (loading) {
    content = <p>loading ....</p>
  }

  if (error) {
    content = <p>{error}</p>
  }

  if (movies.length) {
    content = (
      <ul>
        {movies.map((movie) => {
          return (
            <li key={movie.id} className='p-3 border-b-2'>
              <h1>{movie.title}</h1>
              <p>{movie.movieCrawller}</p>
              <p>{movie.release_date}</p>
            </li>
          )
        })}
      </ul>
    )
  }
  return (
    <div>
      <p></p>
      <button onClick={fetchMovieHandle} className='border-2'>
        fetch movies
      </button>
      <div>{content}</div>
    </div>
  )
}

export default BackEndHandle
