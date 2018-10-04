import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import {
    Badge,
    Button,
    Glyphicon,
    Panel
} from 'react-bootstrap'
import * as ReadableAPI from '../utils/ReadableAPI'
import { updatePost } from '../assets/flow/actions'

import { epochToDateTime } from '../utils/Utils'

class Post extends Component {

    upVote = (e,id) => {
      const { dispatch } = this.props
      ReadableAPI.updateVoteScore(id,'upVote')
      dispatch(updatePost(id))
    }

    downVote = (e, id) => {
      const { dispatch } = this.props
      ReadableAPI.updateVoteScore(id,'downVote')
      dispatch(updatePost(id))
    }

 

    
    render() {
        const { post } = this.props
        return (
            <Panel >
              <Panel.Heading  className='panel-heading'>
                <Link to={{
                  pathname:  `/${post.category}/${post.id}`,
                  state: { id: post.id}
                }}>
                  <strong>{post.title}</strong>
                </Link>
              </Panel.Heading>
              <Panel.Body>
                <h3>{post.body}</h3>
                <p> <strong>{post.category} </strong> Posted on {epochToDateTime(post.timestamp)} by {post.author}</p>
              </Panel.Body>
              <Panel.Footer>
                <ul className="post-footer">
                 <li>
                 
                    <Button>
                      <Glyphicon glyph="comment" />
                    </Button>
                    <Badge>{post.commentCount}</Badge>
                  </li>
                  <li>
                    <Button onClick={e => this.upVote(e, post.id)}>
                      <Glyphicon glyph="thumbs-up" />
                    </Button>
                  </li>
                  <li>
                    <Button disabled>
                      {post.voteScore}
                    </Button>
                  </li>
                  <li>
                    <Button onClick={e => this.downVote(e, post.id)}>
                      <Glyphicon glyph="thumbs-down" />
                    </Button>
                  </li>
                  
                  <li>
                  <Button>
                    <Link to={{
                            pathname: '/editpost',
                            state: {id: post.id, post:post}
                          }} 
                    >
                     <Glyphicon glyph="edit" />
                   </Link>
                  </Button>
                </li>
              
                <li>
                    <Button>
                     <Glyphicon glyph="trash" />
                    </Button>
                </li>
              
                </ul>
              </Panel.Footer>
            </Panel>

        )
    }
}
const mapStateToProps = ({state}) => ({state})
export default connect(mapStateToProps)(Post)