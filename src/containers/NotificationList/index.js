import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { getArrayNotifications } from '../../reducers'
import Notification from '../../components/Notification'
import {
  hideNotification,
} from '../../actions/NotificationActions'

require('./styles.scss')

class NotificationList extends Component {
  render() {
    const { notifications, hideNotification } = this.props
    return (
      <div className='notification-list'>
        {notifications.map(item =>
          <Notification
            key={item.id}
            text={item.text}
            status={item.status}
            clickHandler={() => hideNotification(item.id)}
          />
        )}
      </div>
    )
  }
}

NotificationList.propTypes = {
  notifications: PropTypes.array.isRequired,
}

const mapStateToProps = (state) => ({
  notifications: getArrayNotifications(state),
})

const mapDispatchToProps = (dispatch) => ({
  hideNotification: (id) => dispatch(hideNotification(id)),
})

NotificationList = connect(mapStateToProps,mapDispatchToProps)(NotificationList)

export default NotificationList
