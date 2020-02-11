import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'
import { selectSubreddit, fetchPosts } from './redux/actions/actions';
import rootReducer from './redux/reducers/reducers';
const loggerMiddleware = createLogger()
const store = createStore(
  rootReducer,
  applyMiddleware(
    thunkMiddleware, // lets us dispatch() functions
     // neat middleware that logs actions
  )
)

const next = store.dispatch
store.dispatch = function dispatchAndLog(action) {
  console.log('dispatching', action)
  let result = next(action)
  console.log('next state', store.getState())
  return result
}

const extendObject = valueToAdd => objectToExtend => {
  objectToExtend[valueToAdd] = valueToAdd;

  return objectToExtend;
}

console.log(extendObject(234))

console.log(extendObject('234')({}));


store.dispatch({ type: "Testy" })
store.dispatch(selectSubreddit('reactjs'))
store.dispatch(fetchPosts('reactjs')).then(() => console.log(store.getState()))