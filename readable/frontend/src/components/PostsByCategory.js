import React, { Component } from 'react'
import { connect } from 'react-redux'
import  sortBy  from 'sort-by'
import { fetchPostsByCategory } from '../assets/flow/actions';
import Post from './Post'


class PostsByCategory extends Component {

    componentDidMount() {
        const { dispatch, match } = this.props
        dispatch(fetchPostsByCategory(match.params.category))
    }

    componentDidUpdate(prevProps) {
        const { dispatch, match } = this.props
        
        prevProps.match.params.category !== match.params.category &&  dispatch(fetchPostsByCategory(match.params.category))
    }
    render() {
        const { posts, sortReducer } = this.props
        const showingPosts = Object.values(posts)
        sortReducer && showingPosts.sort(sortBy(sortReducer))
        return (
           <div className="create-post">
           <ul>
            {showingPosts.length > 0
                &&
                showingPosts.map(post => {
                    return (
                        <li key={post.title}>
                          <Post  post={post} />
                        </li>
                        
                    )
                })
            }
           </ul>
            
           </div>
           
        )
    }
}
const mapStateToProps = ({posts,sortReducer}) => ({posts,sortReducer})
export default connect (mapStateToProps)(PostsByCategory)