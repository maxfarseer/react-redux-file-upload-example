import React, { Component, PropTypes } from 'react'
import { findDOMNode } from 'react-dom'

export default class UploadForm extends Component {
  submit(e) {
    e.preventDefault()
    const myFile = findDOMNode(this.refs.myFile).files[0]
    this.props.handleSubmit(myFile)
  }
  render() {
    return (
      <form className='add-product' onSubmit={::this.submit}>
        <div className='form-group'>
          <input
            type='file'
            ref='myFile'
            className='form-control' />
        </div>
        <button
          type='submit'
          className='btn btn-success' >
          Upload
        </button>
      </form>
    )
  }
}

UploadForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
}
