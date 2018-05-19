
import thunk from 'redux-thunk'

import {createStore,applyMiddleware} from 'redux'

import reducer from './reducer'

const store=createStore(reducer,applyMiddleware(thunk))

export default store

// import {createStore} from 'redux'
// import reducer from './render'
// const store = createStore(reducer)

// export default store