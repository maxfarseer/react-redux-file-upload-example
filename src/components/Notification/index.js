import React, { Component, PropTypes } from 'react'
require('./styles.scss')

export default class Notification extends Component {
  render() {
    const { clickHandler, text, status } = this.props
    return (
      <div className={'notification notification_' + status}>
        <div className='row'>
          <div className='col-sm-12'>
            {text}
            <i className='fa fa-times notfication-close' onClick={clickHandler}></i>
          </div>
        </div>
      </div>
    )
  }
}

Notification.propTypes = {
  text: PropTypes.string,
  status: PropTypes.string,
  clickHandler: PropTypes.func.isRequired,
}
