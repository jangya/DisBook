import { combineReducers } from 'redux'
import BookReducer from '../components/books/BookReducer'

const rootReducer = combineReducers({
  books: BookReducer
})

export default rootReducer
