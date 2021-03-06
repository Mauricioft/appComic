import { useState, useEffect } from 'react'
import ComicService from 'services/ComicService'

const useSingleComic = ({ id }) => {
  const [isLoading, setIsLoading] = useState(false)
  const [comic, setComic] = useState({ title: '', img: '' })

  useEffect(() => {
    setIsLoading(true)
    const comicService = new ComicService()
    comicService.getComic({ id })
      .then(response => {
        setIsLoading(false)
        setComic(response)
      })
      .catch(() => {
        setIsLoading(false)
      })

    return () => setIsLoading(false)
  }, [id])

  return { isLoading, comic }
}

export default useSingleComic
