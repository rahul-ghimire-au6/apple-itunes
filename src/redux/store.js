import { createStore,applyMiddleware } from 'redux'
import reducer from './reducers/root_reducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'
import { watch_fetch_artist } from './sagas/saga'

const sagaMiddleware=createSagaMiddleware()
const store = createStore(reducer,composeWithDevTools(applyMiddleware(sagaMiddleware)))
sagaMiddleware.run(watch_fetch_artist)

export default store