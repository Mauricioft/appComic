import React from 'react'
import Comic from 'components/Comic'
import useSingleComic from 'hook/useSingleComic'

const Home = () => {
  const { comic, isLoading } = useSingleComic({ id: 2432 })
  if (isLoading) {
    return <h4>Cargando...</h4>
  }
  return (
    <Comic
      title={comic.title}
      url={comic.img}
    />
  )
}

export default Home
