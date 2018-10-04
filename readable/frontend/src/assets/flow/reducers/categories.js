import {
 REQUEST_CATEGORIES_SUCCESS,

} from '../types'

const initialState = {}

export const categories = (state = initialState, action) => {
   
    switch (action.type) {
       
       

        case REQUEST_CATEGORIES_SUCCESS: 
          const catObj = Object.values(action.categories).map(category => category)
          return Object.assign({}, state, catObj)
            
        default:
          return state
    }

}

