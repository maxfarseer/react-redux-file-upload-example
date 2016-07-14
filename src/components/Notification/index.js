import React, { Component, PropTypes } from 'react'
require('./styles.scss')

export default class Notification extends Component {
  render() {
    const { clickHandler, isShown, text, status } = this.props
    return (
      <section>
        <div className={'wrapper wrapper_' + status + ' ' + (isShown ? '':'none')}>
          <div className='row'>
            <div className='col-sm-12' onClick={clickHandler}>{text}</div>
          </div>
        </div>
      </section>
    )
  }
}

Notification.propTypes = {
  isShown: PropTypes.bool.isRequired,
  text: PropTypes.string,
  clickHandler: PropTypes.func.isRequired,
}
