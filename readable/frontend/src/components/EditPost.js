import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Button,
  Col,
  Row,

} from 'react-bootstrap'

class PostEdit extends Component {


    render() {
      const { post } = this.props.location.state
        return(
            <div className="posts">

            <Row>
             <Col md={6}>
              <h4 class="post-edit-title"> Post Edit </h4>
             </Col>
            </Row>
            <Row>
              <Col md={12}>

                <form className='create-comment-form' onSubmit={this.onSubmitHandler}>
                    <input defaultValue={post.title} type='text' placeholder='Title' name='title'></input>
                    <input defaultValue={post.body} type='text' placeholder='Text' name='text'></input>
                    <Button bsStyle="default" bsSize="lg">Send</Button>
                </form>


              </Col>
            </Row>

            </div>
        )

    }
}

const mapStateToProps = ({posts}) => ({posts})
export default connect(mapStateToProps)(PostEdit)
 