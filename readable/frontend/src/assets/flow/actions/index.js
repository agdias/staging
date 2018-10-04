import {
    REQUEST_POST_BY_ID_SUCCESS,
    REQUEST_CATEGORIES_FAILURE,
    REQUEST_CATEGORIES_SUCCESS,
    REQUEST_POSTS_FAILURE,
    REQUEST_POSTS_SUCCESS,
    UPDATE_SORT_KEY,
    REQUEST_POSTS_BY_CATEGORY_SUCCESS,
    REQUEST_COMMENTS_PER_POST_SUCCESS,
    UPDATE_POST,
    UPDATE_COMMENT
} from '../types'
import * as ReadableAPI from '../../../utils/ReadableAPI'




export const fetchCategoriesSuccess = (categories) => ({
    type: REQUEST_CATEGORIES_SUCCESS,
    categories
})

export const fetchCategoriesFailure = (error) => ({
    type: REQUEST_CATEGORIES_FAILURE,
    error
})

export const fetchCategories = () => dispatch => {
    return ReadableAPI.fetchAllCategories()
      .then(categories => dispatch(fetchCategoriesSuccess(categories.categories )))
      .catch(error => dispatch(fetchCategoriesFailure(error)))
}

export const fetchPostsSuccess = (posts,error) => ({
    type: REQUEST_POSTS_SUCCESS,
    posts,
    error
})

export const fetchPostByIdSuccess = (post) => ({
    type: REQUEST_POST_BY_ID_SUCCESS,
    post

})

export const fetchPostById = (id) => dispatch => {
    
    return ReadableAPI.getPostDetails(id)
      .then(data => dispatch(fetchPostByIdSuccess(data)))
}



export const fetchPostsByCategorySuccess = (posts) => ({
    type: REQUEST_POSTS_BY_CATEGORY_SUCCESS,
    posts
   
})

export const fetchPostsByCategory = (category) => dispatch => {
    return ReadableAPI.fetchPostsByCategory(category)
      .then(posts => dispatch(fetchPostsByCategorySuccess(posts)))

}



export const fetchPostsFailure = (posts,error) => ({
      type: REQUEST_POSTS_FAILURE,
      posts,
      error
})

export const fetchPosts = () => dispatch => {
   
    return ReadableAPI.fetchAllPosts()
      .then(posts => dispatch(fetchPostsSuccess(posts, null)))
     
}





  
export const updatePost = (id) => dispatch => {

    return ReadableAPI.getPostDetails(id)

      .then(data => dispatch(updatePostSuccess(data,id)))

}

export const updatePostSuccess = (post,id) => ({
    type: UPDATE_POST,
    post,
    id
})
export const updateSortKey = (key) => ({
    type: UPDATE_SORT_KEY,
    key

})

export const fetchCommentsPerPostSuccess = (comments) => ({
    type: REQUEST_COMMENTS_PER_POST_SUCCESS,
    comments
})

  export const fetchCommentsPerPost = (id) => dispatch => {
   
    return ReadableAPI.getCommentsPerPost(id)
      .then(data => dispatch(fetchCommentsPerPostSuccess(data)))
      .catch(error => console.log(error))
}

export const updateCommentSuccess = (comment, id) => ({
    type: UPDATE_COMMENT,
    comment,
    id
})

export const updateComment = (id) => dispatch => {
    return ReadableAPI.getCommentDetails(id)
      .then(data =>  dispatch(updateCommentSuccess(data,id)))

}









  

