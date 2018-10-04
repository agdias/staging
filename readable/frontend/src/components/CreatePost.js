import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
    Button,
    Col,
    FormControl,
    FormGroup,
    Panel,
    Row,
} from 'react-bootstrap'

import { genUUID } from '../utils/Utils'
import * as ReadableAPI from '../utils/ReadableAPI'



class CreatePost extends Component {

    state  = {
        author: null,
        id:null,
        timestamp: null,
        title:null,
        body:null,
        category: 'Select a category...'
    }

    handleInputChange = (event) => {
        const target = event.target
        const value = target.value
        const name = target.name;
        this.setState({
          [name]: value
        })
        console.log(this.state)
    }

    onSubmitHandler = (event) => {
        event.preventDefault()
        console.log('onsubmit')
        const id = genUUID()
        const timestamp = Date.now()
        const post = {
          author: this.state.author,
          id: id,
          timestamp: timestamp,
          title: this.state.title,
          body: this.state.body,
          category: this.state.category
        }
        ReadableAPI.createPost(post)
        this.props.history.push('/')
      }
    
    render() {
      const { categories } = this.props
      const showingCategories = Object.values(categories)
        return(
          <div className="create-post">
            <Row>
              <Col md={8}>
                <Panel>
              
                 <Panel.Body>
                    <form onSubmit={this.onSubmitHandler}>
                        <FormGroup>
                            
                            <FormControl
                                name="category"
                                componentClass="select"
                                placeholder="Select a category"
                                defaultValue={this.state.category}
                                onChange={this.handleInputChange}
                            >
                            <option disabled>Select a category...</option>
                            {showingCategories.length > 0 &&
                            showingCategories.map(category => {
                                return (
                                    <option value={category.name}>{category.name}</option>
                                )
                            })
                            }
                            </FormControl>
                        
                            <FormControl
                                type="text"
                                name="author"
                                placeholder="Author"
                                onChange={this.handleInputChange}
                            />
                            <FormControl
                                type="text"
                                name="title"
                                placeholder="Title"
                                onChange={this.handleInputChange}
                        />
                            
                            <FormControl
                                name="body"
                                type="textarea"
                                bsSize="lg"
                                placeholder="Enter text"
                                onChange={this.handleInputChange}
                            >
                            
                            </FormControl>
                            <Button 
                            type="submit"
                            bsSize="lg" 
                            bsStyle="default"
                            >
                                Post
                            </Button>
                        </FormGroup>
                    </form>
                 </Panel.Body>
                </Panel>
                
              </Col>
            </Row>
          </div>
        )
    }
}

const mapStateToProps = ({categories}) => ({categories})
export default connect(mapStateToProps)(CreatePost)