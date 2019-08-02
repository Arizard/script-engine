import React, { Component } from 'react'
import { Navbar, ButtonGroup, Alignment } from '@blueprintjs/core'
// import { Link, withRouter } from 'react-router-dom'
import LinkButton from './LinkButton'
import LogoutButton from './Logout'
import './CustomNavbar.css'


export default class CustomNavbar extends Component {
    constructor(props){
        super(props)
        console.log(props)
        this.state = {
            desktop: true,
            isOpen: false,
        }
        this.toggleNav = this.toggleNav.bind(this)
    }
    toggleNav(){
        this.setState((state) => {
            var newState = state
            newState.isOpen = true
            return newState
        })
    }
    render() {
        if (this.state.desktop){
            return (
                <Navbar className='navbar-x-scroll'>
                    <Navbar.Group align={Alignment.LEFT}>
                        <Navbar.Heading className='navbar-heading'>
                            <span style={{fontWeight: 'bold'}}>script</span>engine
                        </Navbar.Heading>
                        <Navbar.Divider />
                        <ButtonGroup minimal={true}>
                            {/* <LinkButton icon='home' to='/' text='Home'></LinkButton>
                            <LinkButton icon='document' to='/editor' text='New'></LinkButton> */}
                            <LinkButton icon='folder-open' to='/my-documents' text='My Documents'></LinkButton>
                            <LinkButton icon='info-sign' to='/about' text='About'></LinkButton>
                        </ButtonGroup>
                        {/* <Navbar.Divider /> */}
                        {/* <LinkButton className="bp3-minimal" intent='danger' to='/test-editor' icon='build' text='Test Editor'></LinkButton> */}
                    </Navbar.Group>
                    {this.props.user ? (<Navbar.Group align={Alignment.RIGHT}>
                        <LogoutButton email={this.props.user.email} />
                    </Navbar.Group>) : ('')}
                </Navbar>
            )
        }
    }
}


