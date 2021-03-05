import React, { useState } from 'react'
import useApplyList from 'hook/useApplyList'
import RatingIcon from './RatingIcon'
import PropTypes from 'prop-types'
import './styles.css'

const Rating = ({ saveRatingHandle }) => {
  const { applyList } = useApplyList({ limit: 5 })
  const [rating, setRating] = useState(0)
  const [hoverRating, setHoverRating] = useState(0)

  const onMouseEnter = index => setHoverRating(index)
  const onMouseLeave = () => setHoverRating(0)
  const onSaveRating = index => {
    setRating(index)
    saveRatingHandle(index)
  }

  return (
    <div className='Rating-wrapper'>
      {
        applyList.map(index => (
          <RatingIcon
            key={index}
            index={index}
            rating={rating}
            hoverRating={hoverRating}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onSaveRating={onSaveRating}
          />
        ))
      }
    </div>
  )
}

Rating.propTypes = {
  saveRatingHandle: PropTypes.func.isRequired
}

export default Rating
