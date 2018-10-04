import React , { Component } from 'react'
import { connect } from 'react-redux'
import {
    Button,
    Col,
    Glyphicon,

    Nav,
    Navbar,
    NavItem,
    Row,
  } from 'react-bootstrap'
import { fetchCategories, updateSortKey} from '../assets/flow/actions';

class Header extends Component {



    componentDidMount() {
        const { dispatch } = this.props
        dispatch(fetchCategories())

    }
    changeSortKey = (e,key) => {
      const { dispatch } = this.props
      dispatch(updateSortKey(`-${key}`))
      
       
    }
    render() {
        const { categories } = this.props
        const showingCategories = Object.values(categories)
       
        return(
            <div>
            <Row>
            <Col md={12}>
              <Navbar inverse fixedTop fluid>
                <Navbar.Header>
                  <Navbar.Brand>
                    readable
                  </Navbar.Brand>
                </Navbar.Header>
                <Nav>
                  
                 {showingCategories.length > 0 &&
                    showingCategories.map((category) => {
                        return (
                            <NavItem href={`/${category.name}`}  key={category.name}>
                              
                               {category.name}
                                                  
                            </NavItem>
                        )
                    })
                 }
                </Nav>
              </Navbar>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
            <Navbar fluid fixedTop className="shift">
              <Nav>
              <NavItem href="/">
              <Button>
                <Glyphicon glyph="home" />
              </Button>  
            </NavItem>
              <NavItem>
              
                <Button onClick={e => this.changeSortKey(e,'timestamp')}>
                  <Glyphicon glyph="calendar" />                
                </Button>  
            
            </NavItem>
            
              <NavItem>
                <Button onClick={e => this.changeSortKey(e, 'voteScore')}>
                  <Glyphicon glyph="fire" />
                </Button>
               
              </NavItem>
              <NavItem href="/createpost">
              <Button>
                <Glyphicon glyph="plus" />
              </Button>
             
            </NavItem>
            </Nav>          
            </Navbar>
              
            </Col>
          </Row>
            </div>

        )

    }
}
const mapStateToProps = ({categories}) => ({categories})
export default connect(mapStateToProps)(Header)