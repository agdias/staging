import {
    UPDATE_SORT_KEY
} from '../types'

export const sortReducer = (state={}, action) => {
 
    const { key } = action
   
    
    switch(action.type) {

        case UPDATE_SORT_KEY:
           return key

        default: 
          return state
    }
}