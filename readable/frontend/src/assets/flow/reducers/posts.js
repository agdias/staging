import {
    REQUEST_POSTS_BY_CATEGORY_SUCCESS,
    REQUEST_POST_BY_ID_SUCCESS,
    REQUEST_POSTS_SUCCESS,
    UPDATE_POST
} from '../types'


export const posts = (state = {} , action) => {
    const { posts } = action
    

    switch (action.type)  {
        
        case  REQUEST_POSTS_SUCCESS:

          let postsObj = {}
          for ( let post of posts) {
              postsObj[post.id] = post
          }
         return postsObj

        case REQUEST_POSTS_BY_CATEGORY_SUCCESS:
           
            let postsByCategoryObj = {}
            for ( let post of posts) {
                postsByCategoryObj[post.id] = post
            }
        return postsByCategoryObj
        
        case REQUEST_POST_BY_ID_SUCCESS:
            
            return Object.assign({}, state, action.post)

        case UPDATE_POST:
          return {...state, [action.id]: action.post}

        default:
          return state
    }
}