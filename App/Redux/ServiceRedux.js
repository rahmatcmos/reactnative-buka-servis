import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  add: ['data'],
  update: ['data', 'serviceId'],
  delete: ['serviceId'],

  serviceSuccess: ['payload'],
  serviceFailure: ['error'],
}, { prefix: 'Service/' })

export const ServiceTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  fetching: null,
  error: null
})

/* ------------- Selectors ------------- */

export const ServiceSelectors = {
  getData: state => state.data
}

/* ------------- Reducers ------------- */

export const request = (state, { data }) =>
  state.merge({ ...state, fetching: true, error: null })

export const success = (state) =>
  state.merge({ ...state, fetching: false, error: null })

export const successFetch = (state, { services }) =>
  state.merge({ fetching: false, error: null, services })

export const failure = (state, { error }) =>
  state.merge({ ...state, fetching: false, error })

export const reset = state =>
  state.merge({ services: [] })

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.ADD]: request,
  [Types.UPDATE]: request,
  [Types.DELETE]: request,
  [Types.SERVICE_SUCCESS]: success,
  [Types.SERVICE_FAILURE]: failure,
})
