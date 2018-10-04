import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import Header from './components/Header'
import Posts from './components/Posts'
import PostsByCategory from './components/PostsByCategory'
import PostDetails from './components/PostDetails'
import EditPost from './components/EditPost'
import CreatePost from './components/CreatePost'
import { withRouter } from 'react-router'
import './App.css';

import './assets/styles/bootstrap.min.css'
import {
  Grid,
} from 'react-bootstrap'


class App extends Component {


  render() {
    return (
      <div className="app">
        <Grid>
          <Header />
          
          <Route exact path="/" component={Posts} />
         
          <Route  path="/editpost" component={EditPost} />
          <Route exact path="/" component={Posts} />
          <Route path="/createpost" component={CreatePost} />
          <Route exact path="/:category" component={PostsByCategory} />
          <Route  path="/:category/:post_id" component={PostDetails} />
        </Grid>
      
      </div>
    );
  }
}

export const mapStateToProps = ({state}) => ({state})
export default withRouter(connect(mapStateToProps)(App))


