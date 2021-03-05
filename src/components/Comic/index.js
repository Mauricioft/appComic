import React from 'react'
import Rating from 'components/Rating'
import PropTypes from 'prop-types'
import './styles.css'

const Comic = ({ title, url }) => {
  const saveRatingHandle = (value) => {
    alert(`Su calificación fue ${value}`)
  }
  return (
    <div className='Comic-wrapper'>
      <div className='Comic'>
        <h1 className='text-center'>{ title }</h1>
        <img
          loading='lazy'
          src={url}
          title={title}
          alt={title}
        />
        <Rating saveRatingHandle={saveRatingHandle} />
      </div>
    </div>
  )
}

Comic.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
}

export default Comic
