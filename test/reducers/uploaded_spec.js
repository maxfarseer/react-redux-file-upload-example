import {expect} from 'chai'

import {
  UPLOAD_REQUEST,
  UPLOAD_FAILURE,
  UPLOAD_SUCCESS,
} from '../../src/constants/Upload'

import reducer from '../../src/reducers/uploaded'

describe('Uploaded reducer', () => {

  it('UPLOAD_REQUEST', () => {

    const initialState = {
      items: [],
      isFetching: false,
    }

    const action = {
      type: UPLOAD_REQUEST,
    }

    const nextState = reducer(initialState, action)

    expect(nextState).to.deep.equal({
      items: [],
      isFetching: true,
    })
  })

  it('UPLOAD_FAILURE', () => {

    const initialState = {
      items: [],
      isFetching: true,
    }

    const action = {
      type: UPLOAD_FAILURE,
    }

    const nextState = reducer(initialState, action)

    expect(nextState).to.deep.equal({
      items: [],
      isFetching: false,
    })
  })

  it('UPLOAD_SUCCESS', () => {

    const initialState = {
      items: ['a'],
      isFetching: true,
    }

    const action = {
      type: UPLOAD_SUCCESS,
      data: 'b',
    }

    const nextState = reducer(initialState, action)

    expect(nextState).to.deep.equal({
      items: ['a','b'],
      isFetching: false,
    })
  })

})
