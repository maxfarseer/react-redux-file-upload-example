import React, { PropTypes } from 'react'
require('./styles.scss')

const Preloader = ({ isFetching }) => (
  <img className={'preloader '  + (isFetching ? '':'none')} src='/static/i/service/gearcogs.png' />
)

Preloader.propTypes = {
  isFetching: PropTypes.bool.isRequired,
}

export default Preloader
