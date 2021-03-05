import React, { useMemo } from 'react'
import Star from 'components/Icons/Star'
import PropTypes from 'prop-types'

const RatingIcon = ({ index, rating, hoverRating, onMouseEnter, onMouseLeave, onSaveRating }) => {
  const fill = useMemo(() => {
    if (hoverRating >= index) {
      return 'yellow'
    } else if (!hoverRating && rating >= index) {
      return 'yellow'
    }
    return 'none'
  }, [rating, hoverRating, index])

  return (
    <div
      className="RatingIcon-wrapper"
      onMouseEnter={() => onMouseEnter(index)}
      onMouseLeave={() => onMouseLeave()}
      onClick={() => onSaveRating(index)}
    >
      <Star fill={fill} />
    </div>
  )
}

RatingIcon.propTypes = {
  index: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  hoverRating: PropTypes.number.isRequired,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
  onSaveRating: PropTypes.func.isRequired
}

export default RatingIcon
