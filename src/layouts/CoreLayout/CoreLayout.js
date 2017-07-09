
import React, { PropTypes }       from 'react'
import classes                    from './CoreLayout.scss'
import '../../styles/core.scss'

function CoreLayout ({ children }) {
  return (
      <div className="container">
        {children}
      </div>
  )
}

CoreLayout.propTypes = {
  children: PropTypes.element
}

export default CoreLayout
