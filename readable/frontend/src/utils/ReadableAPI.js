
const api = "http://localhost:3001"

let token = localStorage.token
if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {

    "Content-Type" : "application/json",
    "Authorization" : token,
    "Accept":"application/json"
}

export const fetchAllCategories = () => {
    return fetch(`${api}/categories`, {
        headers: { ...headers }
    })
      .then(response => response.json())
      .catch(error => console.log(error))
}

export const fetchAllPosts = () => {
    return fetch(`${api}/posts`, {
        headers: {...headers}
    })
      .then(response => response.json())
      .catch(error => console.log(error))
}

export const fetchPostsByCategory = (category) => {
    return fetch(`${api}/${category}/posts`, {
        headers: { ...headers }
    })
      .then(response => response.json())
      .catch(error => console.log(error))
}

export const fetchPostById = (id) => {
    return fetch(`${api}/posts/${id}`, {
        headers: { ...headers }
    })
    .then(response => response.json())
}


export const getPostDetails = (id) => {

    return fetch(`${api}/posts/${id}`, {
      headers: {...headers}
    }).then(res => res.json())

  }

  export const createPost = (post) => {
    return fetch(`${api}/posts`, {
      method: 'POST',
      body:JSON.stringify(post),
      headers: {
        ...headers
      }
    })
  }

  export const deletePost = (id) => {
    return fetch(`${api}/posts/${id}`, {
      method: 'DELETE',
      headers: {
        ...headers
      }
    })
  }

  export const editPost = (id, post) => {
    return fetch(`${api}/posts/${id}`, {
      method: 'PUT',
      body: JSON.stringify(post),
      headers: {
        ...headers
      }
    })
  }





export const updateVoteScore = (id, vote) => {
 
   
    const body = {
        'option': vote
    }
    return fetch(`${api}/posts/${id}`, {
        method: 'POST',
        headers: { ...headers },
        body: JSON.stringify(body)
    })
      .then(response => response.json())
}

export const getCommentsPerPost = (id) => {
   
    return fetch(`${api}/posts/${id}/comments`, {
      headers: { ...headers }
    }).then(response => response.json())

  }

  export const updateCommentsVoteScore = (id,vote) => {
    const body = {
      'option': vote
    }
    return fetch(`${api}/comments/${id}`, {
      method: 'POST',
      headers: { ...headers },
      body: JSON.stringify(body)
    })
      .then(response => response.json())
      .then(data => data)
  }

  export const deleteComment = (id) => {

    return fetch(`${api}/comments/${id}`, {
      method: 'DELETE',
      headers: { ...headers }

    })
  }

  export const editComment = (id,comment) => {

    return fetch(`${api}/comments/${id}`, {
      method: 'PUT',
      headers: { ...headers},
      body: JSON.stringify(comment)
    })
  }

  export const getCommentDetails = (id) => {
    return fetch(`${api}/comments/${id}`, {
      headers: { ...headers }
    })
      .then(response => response.json())
  }



