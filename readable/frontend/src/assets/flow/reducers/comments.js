
import {
    REQUEST_COMMENTS_PER_POST_SUCCESS,
    UPDATE_COMMENT
} from '../types'

export const comments = (state ={}, action ) => {
    const { comments } = action
   

    switch(action.type) {

        case REQUEST_COMMENTS_PER_POST_SUCCESS:
          
            const commentsObj = {}
            for (let comment of comments ) {
                commentsObj[comment.id] = comment
            }
            return commentsObj

        case UPDATE_COMMENT:
          return {
            ...state,
            [action.id]:action.comment }

        default:
          return state
    }
}

export default comments