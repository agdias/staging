import React, { Component } from 'react'
import { connect } from 'react-redux'
import sortBy  from 'sort-by'
import Post  from './Post'
import { fetchPosts } from '../assets/flow/actions'
import {
    Col,
    Row
} from 'react-bootstrap'



class Posts extends Component {

    componentDidMount() {
        const { dispatch } = this.props
        dispatch(fetchPosts())
    }

    render() {
        
        const { posts,sortReducer } = this.props
       
        const showingPosts = Object.values(posts)
        sortReducer && showingPosts.sort(sortBy(sortReducer))
        
        return(
            <div className="posts">
              <Row>
                <Col md={8}>
                 {showingPosts.length > 0 
                    ?
                      showingPosts.map((post) => {
                          return (
                              <Post key={post.id} post={post} />
                          )
                        
                        })
                    : <p className='posts'>There are no posts yet</p>
                  
                }
                </Col>
              
              </Row>
            </div>
        )
    }
}

const mapStateToProps = ({posts, sortReducer}) => ({posts, sortReducer})

export default connect(mapStateToProps)(Posts)

