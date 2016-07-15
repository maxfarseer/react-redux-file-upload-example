import React, { Component } from 'react'
import { connect } from 'react-redux'
import NotificationList from '../NotificationList'
import Preloader from '../../components/Preloader'
import UploadForm from '../../components/UploadForm'
import { uploadFile } from '../../actions/UploadActions'
import { getUploadedItems, isUploadFetching } from '../../reducers'

require('./reset.css')
require('./styles.scss')

class App extends Component {
  render() {
    return (
      <div className='container'>
        <NotificationList />
        <h4>Add file</h4>
        <div className='row'>
          <div className='col-xs-6 upload-form-wrapper'>
            <UploadForm handleSubmit={this.props.upload} />
          </div>
        </div>

        <h4 className='uploaded-header'>Uploaded files: <Preloader isFetching={this.props.isFetching}/> </h4>
          <ul>
            {
              this.props.files.map(item => {
                return (
                  <li key={item.key} className='uploaded-item'>
                    <i className='fa fa-floppy-o'></i>{' '}
                    <a href={item.link} target='_blank'>{item.link}</a>
                  </li>
                )
              })
            }
          </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  files: getUploadedItems(state),
  isFetching: isUploadFetching(state),
})

const mapDispatchToProps = (dispatch) => ({
  upload: (file) => dispatch(uploadFile(file)),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
