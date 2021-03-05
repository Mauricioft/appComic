import React from 'react'
import Comic from 'components/Comic'
import useSingleComic from 'hook/useSingleComic'

const Home = () => {
  const { isLoading } = useSingleComic({ id: 2432 })
  if (isLoading) {
    return <h4>Cargando...</h4>
  }
  return (
    <Comic
      title='Manage Your Preferences'
      url='https://imgs.xkcd.com/comics/manage_your_preferences.png'
    />
  )
}

export default Home
