import React, { Component } from 'react'

import { connect } from 'react-redux'
import { fetchPostById, fetchCommentsPerPost} from '../assets/flow/actions'
import Comment from './Comment'
import * as ReadableAPI from '../utils/ReadableAPI'
import sortBy from 'sort-by'

import {
  Alert,
    Badge,
    Col,
    Row, 
    Button,
    Glyphicon,
   
} from 'react-bootstrap'


import { epochToDateTime } from '../utils/Utils'

class PostDetails extends Component {


    state = {
        author: null,
        body: null
    }

    componentDidMount() {

        const { dispatch, match } = this.props
        console.log('componentDidMount')
        dispatch(fetchPostById(match.params.post_id))
        dispatch(fetchCommentsPerPost(match.params.post_id))
    }
    componentDidUpdate(prevProps) {
      console.log('componentDidUpdate')
      const { dispatch, match } = this.props
      prevProps.match.params.post_id !== match.params.post_id &&
        dispatch(fetchPostById(match.params.post_id))
        // dispatch(fetchCommentsPerPost(match.params.post_id))
        
    }


    upVote = (e,id) => {
      
        const { dispatch } = this.props
        ReadableAPI.updateVoteScore(id,'upVote')
        dispatch(fetchPostById(id))
      }
  
      downVote = (e, id) => {
        const { dispatch } = this.props
        ReadableAPI.updateVoteScore(id,'downVote')
        dispatch(fetchPostById(id))
      }
  


  render() {
      const { posts, comments, sortReducer } = this.props
      const showingComments = Object.values(comments)
      showingComments.sort(sortBy(sortReducer))

     
      
      return (
          <div className="post-details">
            <Row>
              <Col md={12}>
                <div className="post-header">
                  <strong>{posts.title}</strong>
                </div>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <div className="post-body">
                  <h4>{posts.body}</h4>
                </div>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <div className="post-note">
                  <p>Posted by {posts.author} @ {posts.category} on {epochToDateTime(posts.timestamp)}</p>
                </div>
              </Col>


            </Row>
            <Row>
              <Col md={8}>
                <div>
                <ul className="post-footer">
                <li>
                
                   <Button>
                     <Glyphicon glyph="comment" />
                   </Button>
                   <Badge>{posts.commentCount}</Badge>
                 </li>
                 <li>
                   <Button onClick={e => this.upVote(e, posts.id)}>
                     <Glyphicon glyph="thumbs-up" />
                   </Button>
                 </li>
                 <li>
                   <Button disabled>
                     {posts.voteScore}
                   </Button>
                 </li>
                 <li>
                   <Button onClick={e => this.downVote(e, posts.id)}>
                     <Glyphicon glyph="thumbs-down" />
                   </Button>
                 </li>
                 
                 <li>
                 <Button>
                   <Glyphicon glyph="edit" />
                 </Button>
               </li>
             
               <li>
                   <Button>
                    <Glyphicon glyph="trash" />
                   </Button>
               </li>
             
               </ul>
                </div>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                
                <form className='create-comment-form' onSubmit={this.onSubmitHandler}>
                    <input onChange={this.handleInputChange} type='text' placeholder='author' name='author'></input>
                    <input onChange={this.handleInputChange} type='text' placeholder='comment' name='body'></input>
                    <Button bsSize="lg">Send</Button>
                </form>

             
              </Col>
            </Row>
            <Row>
              <Col md={12}>
               <div>
                 <ul>
                   {showingComments.length > 0 
                    ?
                       showingComments.map((comment) => {
                         return (
                          <li className="comments" key={comment.id}>
                          <Comment  comment={comment} />
                         </li>
                         )
                        
                       }) 
                    :
                    <Alert className="comments" bsStyle="info">
                      No comments available yet
                    </Alert>
                     
                  
                   }
                               
                 </ul>
                 
                  
               </div>
              </Col>
            </Row>
          </div>
      )
  }
}
// const mapStateToProps = (({comments,posts}) => ({comments,posts}))

const mapStateToProps = ({posts,comments}) => {
  return ({
    posts,
    comments
  })
}


export default connect(mapStateToProps)(PostDetails)