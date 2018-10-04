import { combineReducers } from 'redux'
import { categories } from './categories'
import { posts } from './posts'
import { comments } from './comments'
import { sortReducer } from './sortReducer'

const rootReducer = combineReducers({
    categories,
    posts,
    comments,
    sortReducer
})

export default rootReducer